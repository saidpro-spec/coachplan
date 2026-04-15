import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sessions, SERIE_CHATEAU, TYPE_COLORS, TYPE_LABELS, type Exercice } from '../data/sessions';
import TerrainDiagram from '../components/TerrainDiagram';

type Tab = 'consignes' | 'rotations' | 'vigilance' | 'variables';
const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: 'consignes', label: 'Consignes', icon: '📋' },
  { key: 'rotations', label: 'Rotations', icon: '🔄' },
  { key: 'vigilance', label: 'Vigilance', icon: '⚠️' },
  { key: 'variables', label: 'Variables', icon: '🎛️' },
];

const MATERIEL_ICONS: Record<string, string> = {
  'ballon': '⚽', 'ballons': '⚽',
  'plot': '🔶', 'plots': '🔶',
  'mini-but': '🥅', 'mini-buts': '🥅',
  'chasuble': '🦺', 'chasubles': '🦺',
  'dossard': '🎽', 'dossards': '🎽',
  'sifflet': '📯',
  'diplôme': '📜', 'diplômes': '📜',
};

function getMaterielIcon(item: string) {
  const lower = item.toLowerCase();
  for (const [key, icon] of Object.entries(MATERIEL_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return '📦';
}

function ExerciceCard({ exercice, color, index, terrainMode }: {
  exercice: Exercice;
  color: string;
  index: number;
  terrainMode?: boolean;
}) {
  const [tab, setTab] = useState<Tab>('consignes');

  if (terrainMode) {
    return (
      <div style={{ padding: '0 0 32px' }}>
        <div style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 28, fontWeight: 800, color: 'white',
          marginBottom: 12,
        }}>
          Exercice {index + 1} — {exercice.titre}
        </div>
        <div style={{
          display: 'inline-block', padding: '4px 12px',
          background: 'rgba(255,255,255,0.1)', borderRadius: 20,
          fontSize: 14, color: 'rgba(255,255,255,0.7)',
          marginBottom: 20,
        }}>📐 {exercice.surface}</div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{
                  padding: '8px 16px', borderRadius: 8,
                  background: tab === t.key ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${tab === t.key ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  color: tab === t.key ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', fontSize: 14, fontWeight: 600,
                  transition: 'all 0.15s',
                }}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.08)', borderRadius: 12,
            padding: '16px 20px', fontSize: 18, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.9)',
          }}>
            {exercice[tab]}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 14, overflow: 'hidden',
      marginBottom: 16,
    }}>
      {/* Card Header */}
      <div style={{
        background: `linear-gradient(135deg, ${color}22, ${color}0A)`,
        borderBottom: `1px solid ${color}33`,
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: `${color}33`, border: `1px solid ${color}66`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 16,
          color: color, flexShrink: 0,
        }}>{index + 1}</div>
        <div>
          <div style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 800, fontSize: 18, color: 'var(--color-text)',
          }}>{exercice.titre}</div>
          <div style={{
            fontSize: 12, color: 'var(--color-muted)',
            display: 'flex', alignItems: 'center', gap: 4, marginTop: 2,
          }}>
            <span>📐</span>
            <span>{exercice.surface}</span>
          </div>
        </div>
      </div>

      {/* Diagram + Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 0,
      }}>
        {/* Terrain */}
        <div style={{
          padding: '16px 12px 16px 16px',
          borderRight: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'flex-start',
        }}>
          <TerrainDiagram
            markers={exercice.marqueurs}
            fleches={exercice.fleches}
            width={220}
            height={140}
          />
        </div>

        {/* Tabs */}
        <div style={{ padding: '16px 20px' }}>
          <div style={{
            display: 'flex', gap: 0,
            borderBottom: '1px solid var(--color-border)',
            marginBottom: 14,
            overflowX: 'auto',
          }}>
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{
                  padding: '7px 14px',
                  background: 'none', border: 'none',
                  color: tab === t.key ? color : 'var(--color-muted)',
                  cursor: 'pointer', fontSize: 12, fontWeight: 600,
                  borderBottom: `2px solid ${tab === t.key ? color : 'transparent'}`,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                  marginBottom: -1,
                }}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div style={{
            fontSize: 13.5, color: 'var(--color-text)', lineHeight: 1.65,
            animation: 'fadeIn 0.2s ease',
          }}>
            {exercice[tab]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeancePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const numId = Number(id);
  const session = numId >= 37
    ? SERIE_CHATEAU.find(s => s.id === numId)
    : sessions.find(s => s.id === numId);

  const [terrainMode, setTerrainMode] = useState(false);
  const [terrainExIndex, setTerrainExIndex] = useState(0);
  const [note, setNote] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!session) return;
    try {
      const favs = JSON.parse(localStorage.getItem('cfi_favorites') || '[]');
      setIsFavorite(favs.includes(session.id));
      const done = JSON.parse(localStorage.getItem('cfi_completed') || '[]');
      setIsCompleted(done.includes(session.id));
      const notes = JSON.parse(localStorage.getItem('cfi_notes') || '{}');
      setNote(notes[session.id] || '');
    } catch {}
  }, [session]);

  const toggleFavorite = () => {
    if (!session) return;
    const favs: number[] = JSON.parse(localStorage.getItem('cfi_favorites') || '[]');
    const next = isFavorite ? favs.filter(f => f !== session.id) : [...favs, session.id];
    localStorage.setItem('cfi_favorites', JSON.stringify(next));
    setIsFavorite(!isFavorite);
  };

  const toggleCompleted = () => {
    if (!session) return;
    const done: number[] = JSON.parse(localStorage.getItem('cfi_completed') || '[]');
    const next = isCompleted ? done.filter(d => d !== session.id) : [...done, session.id];
    localStorage.setItem('cfi_completed', JSON.stringify(next));
    setIsCompleted(!isCompleted);
  };

  const saveNote = (val: string) => {
    if (!session) return;
    setNote(val);
    const notes = JSON.parse(localStorage.getItem('cfi_notes') || '{}');
    notes[session.id] = val;
    localStorage.setItem('cfi_notes', JSON.stringify(notes));
  };

  if (!session) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--color-muted)' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p>Séance introuvable</p>
          <button onClick={() => navigate('/')} style={{ marginTop: 12, cursor: 'pointer', color: '#0080C8', background: 'none', border: 'none', fontSize: 14 }}>← Retour au programme</button>
        </div>
      </div>
    );
  }

  const color = TYPE_COLORS[session.type];

  // Terrain mode fullscreen
  if (terrainMode) {
    const ex = session.exercices[terrainExIndex];
    return (
      <div className="terrain-mode" style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'linear-gradient(135deg, #050810 0%, #0A1020 100%)',
        overflowY: 'auto',
        fontFamily: 'Barlow, sans-serif',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(5,8,16,0.95)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              padding: '4px 12px', borderRadius: 20,
              background: `${color}33`, border: `1px solid ${color}66`,
              fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: 13,
              color: color, letterSpacing: '0.05em',
            }}>
              MODE TERRAIN
            </div>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              Séance {session.id} — {session.titre}
            </span>
          </div>
          <button
            onClick={() => setTerrainMode(false)}
            style={{
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, color: 'white', cursor: 'pointer',
              width: 36, height: 36, fontSize: 18, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>
        </div>

        {/* Exercise nav */}
        <div style={{ display: 'flex', gap: 8, padding: '16px 24px 0' }}>
          {session.exercices.map((_, i) => (
            <button
              key={i}
              onClick={() => setTerrainExIndex(i)}
              style={{
                padding: '8px 20px', borderRadius: 8, fontWeight: 700,
                background: terrainExIndex === i ? color : 'rgba(255,255,255,0.08)',
                border: `1px solid ${terrainExIndex === i ? color : 'rgba(255,255,255,0.15)'}`,
                color: 'white', cursor: 'pointer', fontSize: 14,
                transition: 'all 0.15s',
              }}
            >Exercice {i + 1}</button>
          ))}
        </div>

        {/* Main content */}
        <div style={{ padding: '24px 24px 40px' }}>
          {/* Terrain diagram large */}
          <div style={{ marginBottom: 24 }}>
            <TerrainDiagram
              markers={ex.marqueurs}
              fleches={ex.fleches}
              width={560}
              height={340}
            />
          </div>
          <ExerciceCard
            exercice={ex}
            color={color}
            index={terrainExIndex}
            terrainMode
          />
        </div>

        {/* Nav arrows */}
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 12,
        }}>
          <button
            onClick={() => setTerrainExIndex(Math.max(0, terrainExIndex - 1))}
            disabled={terrainExIndex === 0}
            style={{
              width: 48, height: 48, borderRadius: '50%',
              background: terrainExIndex === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', cursor: terrainExIndex === 0 ? 'not-allowed' : 'pointer',
              fontSize: 20, opacity: terrainExIndex === 0 ? 0.4 : 1,
            }}
          >←</button>
          <button
            onClick={() => setTerrainExIndex(Math.min(session.exercices.length - 1, terrainExIndex + 1))}
            disabled={terrainExIndex === session.exercices.length - 1}
            style={{
              width: 48, height: 48, borderRadius: '50%',
              background: terrainExIndex === session.exercices.length - 1 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', cursor: terrainExIndex === session.exercices.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: 20, opacity: terrainExIndex === session.exercices.length - 1 ? 0.4 : 1,
            }}
          >→</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'Barlow, sans-serif' }}>
      {/* STICKY HEADER */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: `linear-gradient(135deg, ${color}18, #0F1117)`,
        borderBottom: `1px solid ${color}44`,
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '12px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {/* Back */}
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'none', border: 'none',
                color: 'var(--color-muted)', cursor: 'pointer',
                fontSize: 13, display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              ← Programme
            </button>

            <span style={{ color: 'var(--color-border)' }}>|</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', flex: 1 }}>
              {/* Session number */}
              <div style={{
                fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: 20,
                color: color,
              }}>
                Séance {session.id}
              </div>

              {/* Type badge */}
              <div style={{
                padding: '3px 10px', borderRadius: 20,
                background: `${color}22`, border: `1px solid ${color}55`,
                fontSize: 11, fontWeight: 700, color: color,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {TYPE_LABELS[session.type]}
              </div>
              {session.id >= 37 && (
                <div style={{
                  padding: '3px 10px', borderRadius: 20,
                  background: '#C09B5720', border: '1px solid #C09B5755',
                  fontSize: 11, fontWeight: 700, color: '#C09B57',
                  letterSpacing: '0.06em',
                }}>
                  🏰 Défendre son Château
                </div>
              )}

              {/* Meta pills */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { icon: '👥', val: session.effectif },
                  { icon: '⏱', val: session.duree },
                  { icon: '🏷', val: session.categorie },
                ].map((m, i) => (
                  <span key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    fontSize: 12, color: 'var(--color-muted)',
                  }}>
                    <span>{m.icon}</span><span>{m.val}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
              <button
                onClick={toggleFavorite}
                title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                style={{
                  background: isFavorite ? '#C09B5720' : 'none',
                  border: `1px solid ${isFavorite ? '#C09B57' : 'var(--color-border)'}`,
                  borderRadius: 8, color: isFavorite ? '#C09B57' : 'var(--color-muted)',
                  cursor: 'pointer', fontSize: 16, padding: '6px 10px',
                  transition: 'all 0.2s',
                }}
              >⭐</button>
              <button
                onClick={toggleCompleted}
                style={{
                  background: isCompleted ? '#22c55e20' : 'none',
                  border: `1px solid ${isCompleted ? '#22c55e' : 'var(--color-border)'}`,
                  borderRadius: 8,
                  color: isCompleted ? '#22c55e' : 'var(--color-muted)',
                  cursor: 'pointer', fontSize: 12, fontWeight: 600,
                  padding: '6px 12px',
                  transition: 'all 0.2s',
                }}
              >
                {isCompleted ? '✓ Réalisée' : 'Marquer réalisée'}
              </button>
              <button
                onClick={() => setTerrainMode(true)}
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}BB)`,
                  border: 'none', borderRadius: 8,
                  color: 'white', cursor: 'pointer',
                  fontSize: 12, fontWeight: 700, padding: '6px 14px',
                  display: 'flex', alignItems: 'center', gap: 6,
                  letterSpacing: '0.04em',
                }}
              >
                ⚽ Mode Terrain
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 20px 80px' }}>

        {/* Title + objective */}
        <div style={{
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
          border: `1px solid ${color}30`,
          borderRadius: 14, padding: '20px 24px', marginBottom: 24,
        }}>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 900,
            color: 'var(--color-text)', margin: '0 0 8px',
          }}>
            {session.titre}
          </h1>
          <div style={{
            fontSize: 12, fontWeight: 600, color: color,
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10,
          }}>
            {session.phaseLabel}
          </div>
          {session.objectif && (
            <p style={{ color: 'var(--color-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              🎯 {session.objectif}
            </p>
          )}
        </div>

        {/* MATERIAL */}
        <section style={{ marginBottom: 24 }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.12em', color: 'var(--color-muted)',
            textTransform: 'uppercase', marginBottom: 10,
          }}>Matériel nécessaire</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {session.materiel.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 14px', borderRadius: 10,
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                fontSize: 13, color: 'var(--color-text)',
              }}>
                <span style={{ fontSize: 16 }}>{getMaterielIcon(item)}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* EXERCISES */}
        <section style={{ marginBottom: 28 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 16,
          }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed', fontSize: 13, fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--color-muted)',
              textTransform: 'uppercase', margin: 0,
            }}>
              Exercices ({session.exercices.length})
            </h2>
          </div>

          {session.exercices.map((ex, i) => (
            <ExerciceCard key={ex.id} exercice={ex} color={color} index={i} />
          ))}
        </section>

        {/* NOTES */}
        <section style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 14, padding: '20px',
        }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.12em', color: 'var(--color-muted)',
            textTransform: 'uppercase', marginBottom: 12, marginTop: 0,
          }}>
            📝 Notes de l'éducateur
          </h2>
          <textarea
            value={note}
            onChange={e => saveNote(e.target.value)}
            placeholder="Notez vos observations, adaptations, retours de terrain..."
            style={{
              width: '100%', minHeight: 100,
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 10, padding: '12px',
              color: 'var(--color-text)', fontSize: 13,
              lineHeight: 1.6, resize: 'vertical', outline: 'none',
              transition: 'border-color 0.2s',
              fontFamily: 'Barlow, sans-serif',
              boxSizing: 'border-box',
            }}
            onFocus={e => (e.target.style.borderColor = color)}
            onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
          />
          {note && (
            <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 6, textAlign: 'right' }}>
              ✓ Sauvegardé automatiquement
            </div>
          )}
        </section>

        {/* NAVIGATION prev/next */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginTop: 28, gap: 12,
        }}>
          {session.id > 1 ? (
            <button
              onClick={() => navigate(`/seance/${session.id - 1}`)}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 10, padding: '10px 18px',
                color: 'var(--color-muted)', cursor: 'pointer',
                fontSize: 13, fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: 8,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.color = 'var(--color-text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-muted)';
              }}
            >← {session.id - 1 >= 37 ? `Variante ${session.id - 37}` : `Séance ${session.id - 1}`}</button>
          ) : <div />}
          {session.id < 42 && (
            <button
              onClick={() => navigate(`/seance/${session.id + 1}`)}
              style={{
                background: `${color}20`,
                border: `1px solid ${color}55`,
                borderRadius: 10, padding: '10px 18px',
                color: color, cursor: 'pointer',
                fontSize: 13, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >{session.id + 1 >= 37 ? `Variante ${session.id - 36 + 1}` : `Séance ${session.id + 1}`} →</button>
          )}
        </div>
      </div>
    </div>
  );
}
