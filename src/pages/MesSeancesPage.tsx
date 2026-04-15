import { useState } from 'react';
import TerrainDiagram from '../components/TerrainDiagram';
import type { UnifiedEntry } from './ExercicesPage';

// ─── Types (mirror of CreerSeancePage) ───────────────────────────────────────

interface ExerciceSlot {
  id: string;
  entry: UnifiedEntry | null;
}

interface CustomSeance {
  id: string;
  titre: string;
  objectif: string;
  effectif: string;
  duree: string;
  materiel: string;
  slots: ExerciceSlot[];
  savedAt: string;
}

function loadSaved(): CustomSeance[] {
  try {
    const raw = localStorage.getItem('custom_seances_v2');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function deleteSaved(id: string): CustomSeance[] {
  const updated = loadSaved().filter(s => s.id !== id);
  localStorage.setItem('custom_seances_v2', JSON.stringify(updated));
  return updated;
}

// ─── Exercise detail card (inside a session) ─────────────────────────────────

type Tab = 'consignes' | 'but' | 'variantes' | 'vigilance';

function ExerciceDetailCard({ entry, index }: { entry: UnifiedEntry; index: number }) {
  const [tab, setTab] = useState<Tab>('consignes');

  const tabs: { key: Tab; label: string; content?: string }[] = [
    { key: 'consignes', label: 'Consignes', content: entry.consignes },
    ...(entry.but ? [{ key: 'but' as Tab, label: 'But', content: entry.but }] : []),
    ...(entry.variantes ? [{ key: 'variantes' as Tab, label: 'Variantes', content: entry.variantes }] : []),
    ...(entry.vigilance || entry.pointsVigilance
      ? [{ key: 'vigilance' as Tab, label: 'Vigilance', content: entry.vigilance || entry.pointsVigilance }]
      : []),
  ];

  const activeContent = tabs.find(t => t.key === tab)?.content || tabs[0]?.content || '';
  const { color } = entry;

  return (
    <div style={{
      background: 'var(--color-bg)',
      border: `1px solid ${color}30`,
      borderRadius: 14, overflow: 'hidden',
    }}>
      {/* Exercise header */}
      <div style={{
        padding: '14px 18px',
        background: `linear-gradient(135deg, ${color}12, ${color}04)`,
        borderBottom: `1px solid ${color}20`,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8, flexShrink: 0,
          background: `${color}22`, border: `1px solid ${color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 900, color,
          fontFamily: 'Barlow Condensed',
        }}>{index + 1}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'Barlow Condensed', fontWeight: 800,
            fontSize: 16, color: 'var(--color-text)', lineHeight: 1.2,
          }}>{entry.titre}</div>
          <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 2 }}>
            {entry.sourceLabel}
            {entry.surface ? ` · 📐 ${entry.surface}` : ''}
            {entry.livretEx?.effectif ? ` · 👥 ${entry.livretEx.effectif}` : ''}
          </div>
        </div>
        <span style={{
          padding: '2px 8px', borderRadius: 10,
          background: `${color}18`, border: `1px solid ${color}33`,
          fontSize: 10, fontWeight: 700, color,
          textTransform: 'uppercase', letterSpacing: '0.05em',
          flexShrink: 0,
        }}>
          {entry.source === 'livret' ? 'U7' : 'U6-U7'}
        </span>
      </div>

      {/* Terrain */}
      {(entry.exercice?.marqueurs?.length || entry.livretEx?.marqueurs?.length) ? (
        <div style={{
          background: '#162a16', padding: '12px 18px',
          borderBottom: `1px solid ${color}18`,
          display: 'flex', justifyContent: 'center',
        }}>
          <TerrainDiagram
            markers={entry.exercice?.marqueurs || entry.livretEx?.marqueurs}
            fleches={entry.exercice?.fleches || entry.livretEx?.fleches}
            width={420}
            height={160}
          />
        </div>
      ) : null}

      {/* Tabs */}
      <div style={{ padding: '12px 18px 16px' }}>
        {tabs.length > 1 && (
          <div style={{
            display: 'flex', gap: 0,
            borderBottom: '1px solid var(--color-border)',
            marginBottom: 12, overflowX: 'auto',
          }}>
            {tabs.map(t => (
              <button
                key={t.key + t.label}
                onClick={() => setTab(t.key)}
                style={{
                  padding: '7px 14px', background: 'none', border: 'none',
                  color: tab === t.key ? color : 'var(--color-muted)',
                  cursor: 'pointer', fontSize: 12, fontWeight: 600,
                  borderBottom: `2px solid ${tab === t.key ? color : 'transparent'}`,
                  whiteSpace: 'nowrap', marginBottom: -1,
                  transition: 'all 0.12s',
                }}
              >{t.label}</button>
            ))}
          </div>
        )}
        <p style={{
          margin: 0, fontSize: 13, color: 'var(--color-text)',
          lineHeight: 1.7, animation: 'fadeIn 0.15s ease',
        }}>
          {activeContent}
        </p>
      </div>
    </div>
  );
}

// ─── Session detail view ──────────────────────────────────────────────────────

function SeanceDetail({
  seance, onBack, onDelete,
}: {
  seance: CustomSeance;
  onBack: () => void;
  onDelete: () => void;
}) {
  const filledSlots = seance.slots.filter(s => s.entry !== null);

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px 120px' }}>
      {/* Back */}
      <button
        onClick={onBack}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--color-muted)', fontSize: 13, fontWeight: 600,
          display: 'flex', alignItems: 'center', gap: 6,
          marginBottom: 24, padding: 0,
        }}
      >
        ← Mes séances
      </button>

      {/* Header */}
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 16, padding: '22px 24px', marginBottom: 20,
      }}>
        <h1 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 900, fontSize: 28,
          color: 'var(--color-text)', margin: '0 0 10px',
          letterSpacing: '0.02em',
        }}>
          {seance.titre}
        </h1>

        {seance.objectif && (
          <div style={{
            background: '#1E9E5812', border: '1px solid #1E9E5830',
            borderRadius: 8, padding: '8px 12px', marginBottom: 12,
            fontSize: 13, color: '#1E9E58', fontWeight: 600,
          }}>
            🎯 {seance.objectif}
          </div>
        )}

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'var(--color-muted)' }}>
          {seance.effectif && <span>👥 {seance.effectif}</span>}
          {seance.duree && <span>⏱ {seance.duree}</span>}
          {seance.materiel && <span>🎒 {seance.materiel}</span>}
          <span>⚽ {filledSlots.length} exercice{filledSlots.length !== 1 ? 's' : ''}</span>
          <span style={{ marginLeft: 'auto', fontSize: 12 }}>
            💾 {new Date(seance.savedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Exercises */}
      {filledSlots.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-muted)', fontSize: 14 }}>
          Aucun exercice dans cette séance.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {filledSlots.map((slot, i) => slot.entry && (
            <ExerciceDetailCard key={slot.id} entry={slot.entry} index={i} />
          ))}
        </div>
      )}

      {/* Delete */}
      <button
        onClick={() => {
          if (confirm(`Supprimer la séance "${seance.titre}" ?`)) onDelete();
        }}
        style={{
          marginTop: 32, width: '100%',
          background: 'none', border: '1px solid #E3061A40',
          borderRadius: 12, padding: '12px 0',
          color: '#E3061A', fontSize: 13, fontWeight: 600, cursor: 'pointer',
        }}
      >
        Supprimer cette séance
      </button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MesSeancesPage() {
  const [seances, setSeances] = useState<CustomSeance[]>(loadSaved);
  const [selected, setSelected] = useState<CustomSeance | null>(null);

  const handleDelete = (id: string) => {
    const updated = deleteSaved(id);
    setSeances(updated);
    setSelected(null);
  };

  if (selected) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'Barlow, sans-serif' }}>
        <SeanceDetail
          seance={selected}
          onBack={() => setSelected(null)}
          onDelete={() => handleDelete(selected.id)}
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'Barlow, sans-serif' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #EAE8E1, #F0EEE7)',
        borderBottom: '1px solid var(--color-border)',
        padding: '24px 20px 20px',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Barlow Condensed', fontWeight: 900,
            fontSize: 'clamp(22px, 4vw, 36px)', margin: '0 0 4px',
            color: 'var(--color-text)',
          }}>
            Mes <span style={{ color: '#9F4271' }}>séances</span>
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: 13, margin: 0 }}>
            {seances.length === 0
              ? 'Aucune séance sauvegardée pour l\'instant.'
              : `${seances.length} séance${seances.length > 1 ? 's' : ''} sauvegardée${seances.length > 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px 120px' }}>
        {seances.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '60px 20px',
            color: 'var(--color-muted)',
          }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>📋</div>
            <p style={{ fontSize: 16, marginBottom: 8 }}>Vous n'avez pas encore créé de séance.</p>
            <p style={{ fontSize: 13 }}>
              Rendez-vous dans <strong style={{ color: 'var(--color-text)' }}>Créer ma séance</strong> pour composer votre première séance.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {seances.map(s => {
              const filled = s.slots.filter(e => e.entry !== null).length;
              const date = new Date(s.savedAt).toLocaleDateString('fr-FR', {
                day: 'numeric', month: 'short', year: 'numeric',
              });

              return (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 14, padding: '18px 20px',
                    cursor: 'pointer', textAlign: 'left',
                    transition: 'all 0.15s', width: '100%',
                    display: 'flex', alignItems: 'center', gap: 16,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#9F427166';
                    e.currentTarget.style.background = '#ECEAE3';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'var(--color-surface)';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                    background: '#9F427120', border: '1px solid #9F427140',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22,
                  }}>📋</div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'Barlow Condensed', fontWeight: 800,
                      fontSize: 18, color: 'var(--color-text)', marginBottom: 4,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {s.titre || 'Séance sans titre'}
                    </div>
                    {s.objectif && (
                      <div style={{
                        fontSize: 12, color: '#1E9E58', marginBottom: 4,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        🎯 {s.objectif}
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12, color: 'var(--color-muted)' }}>
                      {s.effectif && <span>👥 {s.effectif}</span>}
                      {s.duree && <span>⏱ {s.duree}</span>}
                      <span>⚽ {filled} exercice{filled !== 1 ? 's' : ''}</span>
                      <span>💾 {date}</span>
                    </div>
                  </div>

                  <span style={{ color: 'var(--color-muted)', fontSize: 22, flexShrink: 0 }}>›</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
