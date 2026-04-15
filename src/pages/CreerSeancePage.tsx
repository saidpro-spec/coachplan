import { useState, useCallback } from 'react';
import { ALL_ENTRIES, type UnifiedEntry } from './ExercicesPage';
import TerrainDiagram from '../components/TerrainDiagram';

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Exercise Picker Modal ────────────────────────────────────────────────────

function ExercicePicker({
  onSelect,
  onClose,
}: {
  onSelect: (entry: UnifiedEntry) => void;
  onClose: () => void;
}) {
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'livret' | 'programme'>('all');
  const [selected, setSelected] = useState<UnifiedEntry | null>(null);

  const filtered = ALL_ENTRIES.filter(e => {
    if (sourceFilter !== 'all' && e.source !== sourceFilter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      e.titre.toLowerCase().includes(q) ||
      e.consignes.toLowerCase().includes(q) ||
      (e.but?.toLowerCase().includes(q) ?? false)
    );
  });

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 16, width: '100%', maxWidth: 800,
        maxHeight: '88vh', display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '18px 22px 14px',
          borderBottom: '1px solid var(--color-border)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--color-text)' }}>
              Choisir un exercice
              <span style={{ marginLeft: 10, fontSize: 13, fontWeight: 500, color: 'var(--color-muted)' }}>
                {filtered.length} disponibles
              </span>
            </h2>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: '1px solid var(--color-border)',
                borderRadius: 8, cursor: 'pointer',
                color: 'var(--color-muted)', fontSize: 18,
                width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >✕</button>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1 1 200px' }}>
              <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)', fontSize: 13 }}>🔍</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher..."
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 8, padding: '8px 10px 8px 30px',
                  color: 'var(--color-text)', fontSize: 13, outline: 'none',
                }}
              />
            </div>
            {(['all', 'livret', 'programme'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSourceFilter(s)}
                style={{
                  padding: '7px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                  border: `1px solid ${sourceFilter === s ? '#1E9E58' : 'var(--color-border)'}`,
                  background: sourceFilter === s ? '#1E9E5820' : 'transparent',
                  color: sourceFilter === s ? '#1E9E58' : 'var(--color-muted)',
                  cursor: 'pointer',
                }}
              >
                {{ all: 'Tous', livret: 'Livret U7', programme: 'Programme CFI' }[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Content: list + preview */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* List */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '10px 12px',
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 40, color: 'var(--color-muted)', fontSize: 14 }}>
                Aucun exercice trouvé
              </div>
            ) : filtered.map(entry => {
              const isSelected = selected?.id === entry.id;
              return (
                <button
                  key={entry.id}
                  onClick={() => setSelected(entry)}
                  style={{
                    background: isSelected ? `${entry.color}12` : 'transparent',
                    border: `1px solid ${isSelected ? entry.color : 'var(--color-border)'}`,
                    borderRadius: 9, padding: '9px 12px',
                    cursor: 'pointer', textAlign: 'left',
                    transition: 'all 0.12s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: entry.color, flexShrink: 0, display: 'inline-block',
                    }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text)' }}>
                      {entry.titre}
                    </span>
                    <span style={{
                      marginLeft: 'auto', fontSize: 10, fontWeight: 700,
                      color: entry.color, background: `${entry.color}18`,
                      border: `1px solid ${entry.color}33`,
                      borderRadius: 6, padding: '1px 6px',
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>
                      {entry.source === 'livret' ? 'U7' : 'CFI'}
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-muted)', paddingLeft: 15 }}>
                    {entry.sourceLabel}
                    {entry.surface ? ` · ${entry.surface}` : ''}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Preview */}
          {selected && (
            <div style={{
              width: 260, borderLeft: '1px solid var(--color-border)',
              padding: 16, overflowY: 'auto', flexShrink: 0,
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 5 }}>APERÇU</div>
                <h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>
                  {selected.titre}
                </h3>
                <div style={{ fontSize: 11, color: 'var(--color-muted)' }}>{selected.sourceLabel}</div>
                {selected.surface && <div style={{ fontSize: 11, color: 'var(--color-muted)' }}>📐 {selected.surface}</div>}
              </div>

              {selected.exercice?.marqueurs?.length ? (
                <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                  <TerrainDiagram
                    markers={selected.exercice.marqueurs}
                    fleches={selected.exercice.fleches}
                    width={228}
                    height={140}
                  />
                </div>
              ) : selected.livretEx && (
                <div style={{
                  background: `${selected.color}15`, borderRadius: 8,
                  padding: 12, textAlign: 'center',
                }}>
                  <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'Barlow Condensed', color: selected.color }}>
                    N°{selected.livretEx.numero}
                  </div>
                  <div style={{ fontSize: 11, color: selected.color }}>{selected.categoryLabel}</div>
                  {selected.livretEx.effectif && (
                    <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 4 }}>👥 {selected.livretEx.effectif}</div>
                  )}
                </div>
              )}

              {(selected.but || selected.consignes) && (
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-muted)', marginBottom: 4, textTransform: 'uppercase' }}>
                    {selected.but ? 'BUT' : 'CONSIGNES'}
                  </div>
                  <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text)', lineHeight: 1.6 }}>
                    {selected.but || selected.consignes}
                  </p>
                </div>
              )}

              <button
                onClick={() => { onSelect(selected); onClose(); }}
                style={{
                  marginTop: 'auto', width: '100%',
                  background: selected.color, border: 'none',
                  borderRadius: 8, padding: '10px 0',
                  color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                }}
              >
                Ajouter cet exercice
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Slot Card ────────────────────────────────────────────────────────────────

function SlotCard({
  slot, index, onAdd, onRemove,
}: {
  slot: ExerciceSlot; index: number;
  onAdd: () => void; onRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!slot.entry) {
    return (
      <button
        onClick={onAdd}
        style={{
          background: 'transparent',
          border: '2px dashed var(--color-border)',
          borderRadius: 12, padding: '16px 20px',
          cursor: 'pointer', textAlign: 'left',
          display: 'flex', alignItems: 'center', gap: 12,
          transition: 'border-color 0.15s', width: '100%',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = '#1E9E58')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: 'var(--color-muted)', fontSize: 20, lineHeight: 1 }}>+</span>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-muted)' }}>Exercice {index + 1}</div>
          <div style={{ fontSize: 12, color: 'var(--color-muted)', opacity: 0.7 }}>Cliquer pour ajouter depuis la bibliothèque</div>
        </div>
      </button>
    );
  }

  const { entry } = slot;
  return (
    <div style={{
      background: 'var(--color-surface)', border: '1px solid var(--color-border)',
      borderRadius: 12, overflow: 'hidden',
    }}>
      <div style={{ padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: `${entry.color}20`, border: `1px solid ${entry.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, fontSize: 13, fontWeight: 800, color: entry.color,
          fontFamily: 'Barlow Condensed',
        }}>{index + 1}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {entry.titre}
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-muted)' }}>
            {entry.sourceLabel}{entry.surface ? ` · ${entry.surface}` : ''}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
          <button onClick={() => setExpanded(v => !v)} style={btnStyle}>{expanded ? 'Masquer' : 'Détails'}</button>
          <button onClick={onAdd} style={{ ...btnStyle, color: '#1E9E58', borderColor: '#1E9E5830' }}>Changer</button>
          <button onClick={onRemove} style={{ ...btnStyle, color: '#E3061A', borderColor: '#E3061A30' }}>✕</button>
        </div>
      </div>

      {expanded && (
        <div style={{ borderTop: '1px solid var(--color-border)', padding: 16 }}>
          {(entry.but || entry.consignes) && (
            <div style={{ marginBottom: 10 }}>
              <div style={labelSmall}>{entry.but ? 'BUT' : 'CONSIGNES'}</div>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text)', lineHeight: 1.6 }}>
                {entry.but || entry.consignes}
              </p>
            </div>
          )}
          {entry.variantes && (
            <div>
              <div style={labelSmall}>VARIANTES</div>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text)', lineHeight: 1.6 }}>{entry.variantes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  background: 'none', border: '1px solid var(--color-border)',
  borderRadius: 6, padding: '5px 10px',
  color: 'var(--color-muted)', fontSize: 11, fontWeight: 600, cursor: 'pointer',
};

const labelSmall: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
  color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 5,
};

// ─── Saved Sessions List ──────────────────────────────────────────────────────

function SavedSeancesList({
  seances, onDelete, onEdit,
}: {
  seances: CustomSeance[];
  onDelete: (id: string) => void;
  onEdit: (s: CustomSeance) => void;
}) {
  if (seances.length === 0) return null;
  return (
    <div style={{ marginTop: 48 }}>
      <h2 style={{
        margin: '0 0 18px',
        fontSize: 20, fontWeight: 800,
        fontFamily: 'Barlow Condensed, sans-serif',
        color: 'var(--color-text)', letterSpacing: '0.02em',
      }}>
        Séances sauvegardées
        <span style={{
          marginLeft: 10, fontSize: 13, fontWeight: 600,
          background: 'var(--color-border)', borderRadius: 20,
          padding: '2px 10px', color: 'var(--color-muted)', verticalAlign: 'middle',
        }}>{seances.length}</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {seances.map(s => {
          const filled = s.slots.filter(e => e.entry !== null).length;
          return (
            <div key={s.id} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 12, padding: '14px 18px',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ margin: '0 0 5px', fontSize: 15, fontWeight: 700, color: 'var(--color-text)' }}>
                  {s.titre || 'Séance sans titre'}
                </h3>
                <div style={{ fontSize: 12, color: 'var(--color-muted)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {s.objectif && <span>🎯 {s.objectif}</span>}
                  {s.effectif && <span>👥 {s.effectif}</span>}
                  {s.duree && <span>⏱ {s.duree}</span>}
                  <span>⚽ {filled} exercice{filled !== 1 ? 's' : ''}</span>
                  <span>💾 {new Date(s.savedAt).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => onEdit(s)} style={{
                  background: 'none', border: '1px solid var(--color-border)',
                  borderRadius: 8, padding: '7px 14px',
                  color: 'var(--color-text)', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}>Modifier</button>
                <button onClick={() => { if (confirm(`Supprimer "${s.titre || 'cette séance'}" ?`)) onDelete(s.id); }} style={{
                  background: 'none', border: '1px solid #E3061A30',
                  borderRadius: 8, padding: '7px 14px',
                  color: '#E3061A', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}>Supprimer</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const EMPTY_SLOTS = (): ExerciceSlot[] =>
  Array.from({ length: 5 }, (_, i) => ({ id: `slot-${i}`, entry: null }));

function loadSaved(): CustomSeance[] {
  try {
    const raw = localStorage.getItem('custom_seances_v2');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export default function CreerSeancePage() {
  const [titre, setTitre] = useState('');
  const [objectif, setObjectif] = useState('');
  const [effectif, setEffectif] = useState('');
  const [duree, setDuree] = useState('');
  const [materiel, setMateriel] = useState('');
  const [slots, setSlots] = useState<ExerciceSlot[]>(EMPTY_SLOTS());
  const [pickerSlotId, setPickerSlotId] = useState<string | null>(null);
  const [savedSeances, setSavedSeances] = useState<CustomSeance[]>(loadSaved);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState('');

  const handleSelect = useCallback((entry: UnifiedEntry) => {
    if (!pickerSlotId) return;
    setSlots(prev => prev.map(s => s.id === pickerSlotId ? { ...s, entry } : s));
    setPickerSlotId(null);
  }, [pickerSlotId]);

  const removeSlot = (slotId: string) =>
    setSlots(prev => prev.map(s => s.id === slotId ? { ...s, entry: null } : s));

  const handleSave = () => {
    const seance: CustomSeance = {
      id: editingId || `custom-${Date.now()}`,
      titre: titre.trim() || 'Ma séance',
      objectif, effectif, duree, materiel, slots,
      savedAt: new Date().toISOString(),
    };
    const existing = loadSaved();
    const updated = editingId
      ? existing.map(s => s.id === editingId ? seance : s)
      : [seance, ...existing];
    localStorage.setItem('custom_seances_v2', JSON.stringify(updated));
    setSavedSeances(updated);
    setSaveMsg(editingId ? 'Séance mise à jour !' : 'Séance enregistrée !');
    setTimeout(() => setSaveMsg(''), 3000);
    resetForm();
  };

  const resetForm = () => {
    setTitre(''); setObjectif(''); setEffectif(''); setDuree(''); setMateriel('');
    setSlots(EMPTY_SLOTS()); setEditingId(null);
  };

  const handleEdit = (s: CustomSeance) => {
    setTitre(s.titre); setObjectif(s.objectif); setEffectif(s.effectif);
    setDuree(s.duree); setMateriel(s.materiel);
    const filled = s.slots.length;
    setSlots(filled === 5 ? s.slots : [
      ...s.slots,
      ...Array.from({ length: 5 - filled }, (_, i) => ({ id: `slot-edit-${i}`, entry: null })),
    ]);
    setEditingId(s.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    const updated = loadSaved().filter(s => s.id !== id);
    localStorage.setItem('custom_seances_v2', JSON.stringify(updated));
    setSavedSeances(updated);
  };

  const filledCount = slots.filter(s => s.entry !== null).length;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingBottom: 100 }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 20px 0' }}>
        {/* Page header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{
            margin: '0 0 6px',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 32, fontWeight: 900,
            color: 'var(--color-text)', letterSpacing: '0.02em',
          }}>
            {editingId ? 'Modifier la séance' : 'Créer ma séance'}
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--color-muted)' }}>
            Composez une séance sur-mesure en sélectionnant jusqu'à 5 exercices depuis la bibliothèque.
          </p>
        </div>

        {/* Save confirmation */}
        {saveMsg && (
          <div style={{
            marginBottom: 18,
            background: '#208B7818', border: '1px solid #208B78',
            borderRadius: 10, padding: '11px 16px',
            color: '#208B78', fontSize: 14, fontWeight: 600,
          }}>
            ✓ {saveMsg}
          </div>
        )}

        {/* Infos card */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 16, padding: 24, marginBottom: 20,
        }}>
          <h2 style={sectionTitle}>Informations générales</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Titre de la séance</label>
              <input value={titre} onChange={e => setTitre(e.target.value)}
                placeholder="Ex : Séance dribble et conduite"
                style={inputStyle} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Objectif pédagogique</label>
              <input value={objectif} onChange={e => setObjectif(e.target.value)}
                placeholder="Ex : Conduire le ballon en évitant les adversaires"
                style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Effectif</label>
              <input value={effectif} onChange={e => setEffectif(e.target.value)}
                placeholder="Ex : 12-16 joueurs" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Durée</label>
              <input value={duree} onChange={e => setDuree(e.target.value)}
                placeholder="Ex : 60 min" style={inputStyle} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Matériel</label>
              <input value={materiel} onChange={e => setMateriel(e.target.value)}
                placeholder="Ex : 12 ballons, 20 plots, chasubles..."
                style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Slots card */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 16, padding: 24, marginBottom: 22,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <h2 style={{ ...sectionTitle, margin: 0 }}>Exercices</h2>
            <span style={{ fontSize: 13, color: 'var(--color-muted)' }}>
              {filledCount}/5
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {slots.map((slot, i) => (
              <SlotCard
                key={slot.id}
                slot={slot}
                index={i}
                onAdd={() => setPickerSlotId(slot.id)}
                onRemove={() => removeSlot(slot.id)}
              />
            ))}
          </div>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          style={{
            width: '100%', background: '#1E9E58',
            border: 'none', borderRadius: 12, padding: '15px 0',
            color: '#fff', fontSize: 15, fontWeight: 800,
            cursor: 'pointer',
            fontFamily: 'Barlow Condensed, sans-serif',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          {editingId ? '✓ Mettre à jour la séance' : '✓ Enregistrer la séance'}
        </button>

        {editingId && (
          <button onClick={resetForm} style={{
            width: '100%', marginTop: 10,
            background: 'none', border: '1px solid var(--color-border)',
            borderRadius: 12, padding: '11px 0',
            color: 'var(--color-muted)', fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>
            Annuler la modification
          </button>
        )}

        <SavedSeancesList
          seances={savedSeances}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {pickerSlotId && (
        <ExercicePicker
          onSelect={handleSelect}
          onClose={() => setPickerSlotId(null)}
        />
      )}
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const sectionTitle: React.CSSProperties = {
  margin: '0 0 18px', fontSize: 13, fontWeight: 700,
  color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em',
};

const labelStyle: React.CSSProperties = {
  display: 'block', marginBottom: 6,
  fontSize: 11, fontWeight: 600,
  color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em',
};

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
  borderRadius: 8, padding: '10px 14px',
  color: 'var(--color-text)', fontSize: 14, outline: 'none',
  fontFamily: 'Barlow, sans-serif',
};
