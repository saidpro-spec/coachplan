import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  sessions, GRID_LAYOUT, TYPE_COLORS, TYPE_LABELS, SERIE_CHATEAU,
  type SessionType, type PhaseType
} from '../data/sessions';

const VALUES = [
  {
    key: 'PLAISIR',
    color: '#0080C8',
    icon: '⚽',
    desc: "Faire jouer équitablement l'ensemble des pratiquant(e)s. Encourager les joueur(e)s dans toutes leurs prises d'initiatives.",
  },
  {
    key: 'RESPECT',
    color: '#208B78',
    icon: '🤝',
    desc: "Instaurer un climat bienveillant entre tous. Être le garant du bon comportement des joueur(e)s et des parents vis-à-vis des acteurs du jeu.",
  },
  {
    key: 'ENGAGEMENT',
    color: '#C09B57',
    icon: '💪',
    desc: "Vérifier et inciter la présence régulière des jeunes. Rythme et intensité pour favoriser le jeu en continuité. Séquençage rigoureux pour soutenir l'attention.",
  },
  {
    key: 'TOLÉRANCE',
    color: '#9F4271',
    icon: '🌍',
    desc: "Accepter toutes les joueuses et joueurs quel que soit leurs origines. Donner le droit à l'erreur (source d'apprentissage).",
  },
  {
    key: 'SOLIDARITÉ',
    color: '#E3061A',
    icon: '🏆',
    desc: "Veiller à ce que tous les jeunes s'encouragent quel que soit l'évolution du score. Mettre en place des rituels entre les joueur(e)s.",
  },
];

const VACANCES_NAMES: Record<number, string> = {
  7: 'Toussaint',
  15: 'Noël',
  22: 'Hiver',
  29: 'Printemps',
};

const TYPE_FILTERS: { key: SessionType | 'all'; label: string }[] = [
  { key: 'all', label: 'Toutes' },
  { key: 'accueil', label: 'Accueil' },
  { key: 'jeu', label: 'Jeu' },
  { key: 'educatif', label: 'Éducatif' },
  { key: 'evaluation', label: 'Évaluation' },
  { key: 'recreatif', label: 'Récréatif' },
  { key: 'collectif', label: 'Collectif' },
];

const PHASE_FILTERS: { key: PhaseType | 'all'; label: string; color: string }[] = [
  { key: 'all', label: 'Toutes les phases', color: '#8B90A8' },
  { key: 'phase1', label: 'Phase 1 — Attaque individuelle / Terrain', color: '#0080C8' },
  { key: 'phase2', label: 'Phase 2 — Attaque individuelle / Filets', color: '#208B78' },
  { key: 'phase3', label: 'Phase 3 — Défense individuelle', color: '#E3061A' },
  { key: 'phase4', label: 'Phase 4 — Attaque collective', color: '#9F4271' },
  { key: 'accueil', label: "Séances d'accueil", color: '#998F99' },
  { key: 'recreatif', label: 'Séances récréatives', color: '#C09B57' },
];

export default function ProgramPage() {
  const navigate = useNavigate();
  const [openValue, setOpenValue] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<SessionType | 'all'>('all');
  const [phaseFilter, setPhaseFilter] = useState<PhaseType | 'all'>('all');
  const [search, setSearch] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [completed, setCompleted] = useState<Set<number>>(() => {
    try {
      const s = localStorage.getItem('cfi_completed');
      return new Set(s ? JSON.parse(s) : []);
    } catch { return new Set(); }
  });

  useEffect(() => {
    localStorage.setItem('cfi_completed', JSON.stringify([...completed]));
  }, [completed]);

  const toggleCompleted = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const isVisible = (id: number) => {
    const s = sessions.find(s => s.id === id);
    if (!s) return false;
    if (typeFilter !== 'all' && s.type !== typeFilter) return false;
    if (phaseFilter !== 'all' && s.phase !== phaseFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        s.titre.toLowerCase().includes(q) ||
        s.phaseLabel.toLowerCase().includes(q) ||
        s.type.toLowerCase().includes(q) ||
        s.exercices.some(e => e.titre.toLowerCase().includes(q))
      );
    }
    return true;
  };

  const completedCount = sessions.filter(s => completed.has(s.id)).length;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'Barlow, sans-serif' }}>
      {/* HEADER */}
      <header style={{
        background: 'linear-gradient(135deg, #0A0E1A 0%, #0F1525 40%, #1A0A0A 100%)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative grid lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 20px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'linear-gradient(135deg, #0080C8, #005a8e)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>⚽</div>
                <span style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.15em',
                  color: '#0080C8', textTransform: 'uppercase',
                }}>Programme U6-U7</span>
              </div>
              <h1 style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 900, margin: 0, lineHeight: 1,
                color: 'var(--color-text)',
                letterSpacing: '-0.01em',
              }}>
                Ma Saison en{' '}
                <span style={{ color: '#0080C8' }}>36 Séances</span>
              </h1>
              <p style={{ color: 'var(--color-muted)', marginTop: 8, fontSize: 14 }}>
                Programme annuel de formation — Football éducatif
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Progress */}
              <div style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 12, padding: '10px 16px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', color: '#208B78' }}>
                  {completedCount}<span style={{ color: 'var(--color-muted)', fontSize: 14 }}>/36</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-muted)', letterSpacing: '0.05em' }}>SÉANCES RÉALISÉES</div>
              </div>

              {/* Upload button */}
              <button
                onClick={() => setShowUploadModal(true)}
                style={{
                  background: 'linear-gradient(135deg, #0080C8, #005a8e)',
                  border: 'none', borderRadius: 10, padding: '10px 18px',
                  color: 'white', cursor: 'pointer', fontSize: 13, fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <span style={{ fontSize: 16 }}>+</span>
                Ajouter une séance
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{
            marginTop: 16, height: 4, background: 'var(--color-border)',
            borderRadius: 2, overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', borderRadius: 2,
              background: 'linear-gradient(90deg, #0080C8, #208B78)',
              width: `${(completedCount / 36) * 100}%`,
              transition: 'width 0.5s ease',
            }} />
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 100px' }}>

        {/* VALUES SECTION */}
        <section style={{ marginTop: 28, marginBottom: 24 }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
            color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 12,
          }}>Valeurs pédagogiques</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {VALUES.map(v => (
              <div key={v.key} style={{ flex: '1 1 160px', minWidth: 0 }}>
                <button
                  onClick={() => setOpenValue(openValue === v.key ? null : v.key)}
                  style={{
                    width: '100%', background: openValue === v.key
                      ? `linear-gradient(135deg, ${v.color}22, ${v.color}11)`
                      : 'var(--color-surface)',
                    border: `1px solid ${openValue === v.key ? v.color + '66' : 'var(--color-border)'}`,
                    borderRadius: 10, padding: '10px 14px',
                    cursor: 'pointer', textAlign: 'left',
                    display: 'flex', alignItems: 'center', gap: 10,
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: 18 }}>{v.icon}</span>
                  <span style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700, fontSize: 14, letterSpacing: '0.06em',
                    color: openValue === v.key ? v.color : 'var(--color-text)',
                  }}>{v.key}</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--color-muted)', fontSize: 12 }}>
                    {openValue === v.key ? '▲' : '▼'}
                  </span>
                </button>
                {openValue === v.key && (
                  <div style={{
                    background: `${v.color}08`,
                    border: `1px solid ${v.color}33`,
                    borderTop: 'none', borderRadius: '0 0 10px 10px',
                    padding: '10px 14px',
                    fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.5,
                    animation: 'fadeInUp 0.2s ease',
                  }}>
                    {v.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* LEGEND */}
        <section style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 12, padding: '16px 20px', marginBottom: 24,
        }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
            color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 12,
          }}>Phases du programme</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {PHASE_FILTERS.slice(1).map(p => (
              <div
                key={p.key}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '6px 12px', borderRadius: 20,
                  background: `${p.color}18`,
                  border: `1px solid ${p.color}44`,
                  cursor: 'pointer',
                  opacity: phaseFilter === 'all' || phaseFilter === p.key ? 1 : 0.4,
                  transition: 'opacity 0.2s',
                }}
                onClick={() => setPhaseFilter(phaseFilter === p.key ? 'all' : p.key as PhaseType)}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--color-text)', fontWeight: 500 }}>{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap',
          marginBottom: 24, alignItems: 'center',
        }}>
          <div style={{ position: 'relative', flex: '1 1 200px' }}>
            <span style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--color-muted)', fontSize: 14,
            }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher une séance, un thème, un exercice..."
              style={{
                width: '100%', background: 'var(--color-surface)',
                border: '1px solid var(--color-border)', borderRadius: 10,
                padding: '9px 12px 9px 36px', color: 'var(--color-text)',
                fontSize: 13, outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = '#0080C8')}
              onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
            />
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {TYPE_FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setTypeFilter(f.key as SessionType | 'all')}
                style={{
                  padding: '7px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                  border: `1px solid ${typeFilter === f.key
                    ? (f.key === 'all' ? '#0080C8' : TYPE_COLORS[f.key as SessionType])
                    : 'var(--color-border)'}`,
                  background: typeFilter === f.key
                    ? (f.key === 'all' ? '#0080C820' : `${TYPE_COLORS[f.key as SessionType]}20`)
                    : 'var(--color-surface)',
                  color: typeFilter === f.key
                    ? (f.key === 'all' ? '#0080C8' : TYPE_COLORS[f.key as SessionType])
                    : 'var(--color-muted)',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: 8,
        }}>
          {GRID_LAYOUT.map((id, index) => {
            if (id === null) {
              // Vacances cell
              const vacancesName = VACANCES_NAMES[index] || 'Vacances';
              return (
                <div
                  key={`vac-${index}`}
                  style={{
                    borderRadius: 10,
                    border: '2px dashed var(--color-border)',
                    padding: '8px 6px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    minHeight: 80, gap: 3,
                    opacity: 0.6,
                  }}
                >
                  <span style={{ fontSize: 16 }}>🏖</span>
                  <span style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                    color: 'var(--color-muted)', textTransform: 'uppercase',
                    textAlign: 'center',
                  }}>Vacances<br />{vacancesName}</span>
                </div>
              );
            }

            const session = sessions.find(s => s.id === id);
            if (!session) return null;
            const color = TYPE_COLORS[session.type];
            const visible = isVisible(id);
            const done = completed.has(id);

            return (
              <div
                key={id}
                className="session-card"
                onClick={() => visible && navigate(`/seance/${id}`)}
                style={{
                  borderRadius: 10,
                  background: `linear-gradient(145deg, ${color}DD, ${color}99)`,
                  border: `1px solid ${color}`,
                  padding: '8px 6px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  minHeight: 80, gap: 3,
                  cursor: visible ? 'pointer' : 'default',
                  opacity: visible ? 1 : 0.2,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
                }}
              >
                {/* Completed overlay */}
                {done && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 10, zIndex: 2,
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12,
                    }}>✓</div>
                  </div>
                )}

                {/* Shine effect */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)',
                  borderRadius: '10px 10px 0 0', pointerEvents: 'none',
                }} />

                <span style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase',
                }}>Séance</span>
                <span style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 22, fontWeight: 900, color: 'white',
                  lineHeight: 1,
                }}>{id}</span>

                {/* Tick button */}
                <button
                  onClick={e => toggleCompleted(id, e)}
                  title={done ? 'Marquer non-réalisée' : 'Marquer réalisée'}
                  style={{
                    position: 'absolute', bottom: 4, right: 4,
                    width: 18, height: 18, borderRadius: '50%',
                    background: done ? '#22c55e' : 'rgba(255,255,255,0.2)',
                    border: `1.5px solid ${done ? '#22c55e' : 'rgba(255,255,255,0.4)'}`,
                    cursor: 'pointer', fontSize: 9, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 3, transition: 'all 0.2s',
                  }}
                >
                  {done ? '✓' : ''}
                </button>
              </div>
            );
          })}
        </div>

        {/* TYPE LEGEND below grid */}
        <div style={{
          marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 10,
          padding: '16px 0',
          borderTop: '1px solid var(--color-border)',
        }}>
          {Object.entries(TYPE_LABELS).map(([key, label]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 12, height: 12, borderRadius: 3,
                background: TYPE_COLORS[key as SessionType],
              }} />
              <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>{label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 12, height: 12, borderRadius: 3,
              border: '2px dashed var(--color-border)',
            }} />
            <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>Vacances scolaires</span>
          </div>
        </div>

        {/* ─── SÉRIE BONUS : DÉFENDRE SON CHÂTEAU ──────────────────────────── */}
        <section style={{ marginTop: 36 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16,
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{
                  padding: '3px 10px', borderRadius: 20,
                  background: '#E3061A22', border: '1px solid #E3061A55',
                  fontSize: 10, fontWeight: 700, color: '#E3061A',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>Série Bonus — PDF importé</div>
              </div>
              <h2 style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900,
                color: 'var(--color-text)', margin: 0,
              }}>
                🏰 Défendre son Château
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: 13, marginTop: 4 }}>
                6 progressions — Thème : Découverte de l'adversaire — U7 — 10 min / exercice
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 10,
          }}>
            {SERIE_CHATEAU.map(s => {
              const color = TYPE_COLORS[s.type];
              const done = completed.has(s.id);
              return (
                <div
                  key={s.id}
                  className="session-card"
                  onClick={() => navigate(`/seance/${s.id}`)}
                  style={{
                    borderRadius: 12,
                    background: `linear-gradient(145deg, ${color}CC, ${color}88)`,
                    border: `1px solid ${color}`,
                    padding: '14px 16px',
                    cursor: 'pointer', position: 'relative', overflow: 'hidden',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  {done && (
                    <div style={{
                      position: 'absolute', top: 8, right: 8,
                      width: 18, height: 18, borderRadius: '50%',
                      background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, color: 'white',
                    }}>✓</div>
                  )}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
                    pointerEvents: 'none',
                  }} />
                  <div style={{
                    fontFamily: 'Barlow Condensed', fontWeight: 900,
                    fontSize: 15, color: 'white', marginBottom: 4,
                  }}>
                    Var. {s.serieId}
                  </div>
                  <div style={{
                    fontSize: 11, color: 'rgba(255,255,255,0.8)',
                    fontWeight: 500, lineHeight: 1.3,
                  }}>
                    {s.titre}
                  </div>
                  <div style={{
                    marginTop: 8, fontSize: 10, color: 'rgba(255,255,255,0.6)',
                    display: 'flex', gap: 8,
                  }}>
                    <span>👥 {s.effectif}</span>
                    <span>⏱ {s.duree}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 100, padding: 20,
          }}
          onClick={() => setShowUploadModal(false)}
        >
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 16, padding: '28px 32px',
              maxWidth: 480, width: '100%',
              animation: 'fadeInUp 0.3s ease',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'Barlow Condensed', fontSize: 22, fontWeight: 800, margin: 0, color: 'var(--color-text)' }}>
                Ajouter une séance
              </h2>
              <button
                onClick={() => setShowUploadModal(false)}
                style={{
                  background: 'none', border: 'none', color: 'var(--color-muted)',
                  cursor: 'pointer', fontSize: 20, lineHeight: 1,
                }}
              >×</button>
            </div>

            <div style={{
              border: '2px dashed var(--color-border)',
              borderRadius: 12, padding: '32px 24px',
              textAlign: 'center', cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#0080C8')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>📄</div>
              <p style={{ color: 'var(--color-text)', fontWeight: 600, marginBottom: 6 }}>
                Import de PDF — Fonctionnalité à venir
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: 13, lineHeight: 1.5 }}>
                Glissez-déposez votre fichier PDF ici ou cliquez pour sélectionner.
                Cette fonctionnalité permettra d'importer automatiquement le contenu
                de vos séances depuis un PDF structuré.
              </p>
            </div>

            <div style={{
              marginTop: 16, padding: '12px 16px',
              background: '#0080C810', border: '1px solid #0080C830',
              borderRadius: 8, fontSize: 12, color: 'var(--color-muted)',
            }}>
              💡 <strong style={{ color: '#0080C8' }}>Format attendu :</strong> PDF interactif CFI (même structure que CFI_U6-U7_Programmation_v2.pdf)
            </div>

            <button
              onClick={() => setShowUploadModal(false)}
              style={{
                marginTop: 16, width: '100%', padding: '11px',
                background: 'var(--color-surface2)',
                border: '1px solid var(--color-border)',
                borderRadius: 10, color: 'var(--color-muted)',
                cursor: 'pointer', fontSize: 13, fontWeight: 500,
              }}
            >Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
