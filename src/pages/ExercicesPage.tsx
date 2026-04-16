import { useState, useMemo, useEffect } from 'react';
import { loadHiddenExercices } from '../utils/hiddenExercices';
import {
  sessions, SERIE_CHATEAU, TYPE_COLORS, TYPE_LABELS,
  type SessionType, type Exercice,
} from '../data/sessions';
import {
  LIVRET_U7, LIVRET_U7_CATEGORIES, type LivretExercice,
} from '../data/livretU7';
import {
  LIVRET_U6, LIVRET_U6_CATEGORIES, type LivretU6Exercice,
} from '../data/livretU6';
import {
  SESSIONS_U8U9, U8U9_PHASE_COLORS, U8U9_PHASE_LABELS, type U8U9Phase, type U8U9Exercice,
} from '../data/sessionsU8U9';
import TerrainDiagram from '../components/TerrainDiagram';

// ─── Unified entry type ───────────────────────────────────────────────────────

type Source = 'programme' | 'livret' | 'u6' | 'u8u9';

interface UnifiedEntry {
  id: string;
  titre: string;
  surface?: string;
  consignes: string;
  but?: string;
  variantes?: string;
  vigilance?: string;
  rotations?: string;
  pointsVigilance?: string;
  source: Source;
  sourceLabel: string;
  color: string;
  categoryLabel: string;
  categoryKey: string;
  // Programme only
  exercice?: Exercice;
  sessionType?: SessionType;
  // Livret U7 only
  livretEx?: LivretExercice;
  // Livret U6 only
  livretU6Ex?: LivretU6Exercice;
  // U8-U9
  u8u9Ex?: U8U9Exercice;
  u8u9Phase?: U8U9Phase;
}

function buildEntries(): UnifiedEntry[] {
  const entries: UnifiedEntry[] = [];

  // Programme U6-U7 (sessions.ts + SERIE_CHATEAU)
  for (const s of [...sessions, ...SERIE_CHATEAU]) {
    for (const ex of s.exercices) {
      entries.push({
        id: `prog-${s.id}-${ex.id}`,
        titre: ex.titre,
        surface: ex.surface,
        consignes: ex.consignes || '',
        variantes: ex.variables,
        vigilance: ex.vigilance,
        rotations: ex.rotations,
        source: 'programme',
        sourceLabel: `Séance ${s.id} — ${s.titre}`,
        color: TYPE_COLORS[s.type],
        categoryLabel: TYPE_LABELS[s.type],
        categoryKey: `prog_${s.type}`,
        exercice: ex,
        sessionType: s.type,
      });
    }
  }

  // Programme U8-U9
  for (const s of SESSIONS_U8U9) {
    for (const ex of s.exercices) {
      const color = U8U9_PHASE_COLORS[s.phase];
      entries.push({
        id: `u8u9-${s.id}-${ex.id}`,
        titre: ex.titre,
        surface: ex.surface,
        consignes: ex.consignes || '',
        but: ex.objectif,
        variantes: ex.variables,
        vigilance: ex.vigilance,
        rotations: ex.rotations,
        source: 'u8u9',
        sourceLabel: `U8-U9 S${s.id} — ${s.titre}`,
        color,
        categoryLabel: U8U9_PHASE_LABELS[s.phase],
        categoryKey: `u8u9_${s.phase}`,
        u8u9Ex: ex,
        u8u9Phase: s.phase,
      });
    }
  }

  // Livret U7
  for (const ex of LIVRET_U7) {
    const cat = LIVRET_U7_CATEGORIES[ex.categorie];
    entries.push({
      id: `u7-${ex.id}`,
      titre: ex.titre,
      surface: ex.surface,
      consignes: ex.consignes,
      but: ex.but,
      variantes: ex.variantes,
      pointsVigilance: ex.pointsVigilance,
      source: 'livret',
      sourceLabel: `Livret U7 — N°${ex.numero}`,
      color: cat.color,
      categoryLabel: cat.label,
      categoryKey: `u7_${ex.categorie}`,
      livretEx: ex,
    });
  }

  // Guide Technique U6
  for (const ex of LIVRET_U6) {
    const cat = LIVRET_U6_CATEGORIES[ex.categorie];
    entries.push({
      id: `u6-${ex.id}`,
      titre: ex.titre,
      surface: ex.surface,
      consignes: ex.consignes,
      but: ex.but,
      variantes: ex.variantes,
      pointsVigilance: ex.pointsVigilance,
      source: 'u6',
      sourceLabel: `Guide U6 — N°${ex.numero}`,
      color: cat.color,
      categoryLabel: cat.label,
      categoryKey: `u6_${ex.categorie}`,
      livretU6Ex: ex,
    });
  }

  return entries;
}

const ALL_ENTRIES = buildEntries();

// ─── Filters ──────────────────────────────────────────────────────────────────

const SOURCE_FILTERS = [
  { key: 'all', label: 'Tous' },
  { key: 'u6', label: 'Guide U6' },
  { key: 'livret', label: 'Livret U7' },
  { key: 'programme', label: 'Programme U6-U7' },
  { key: 'u8u9', label: 'Programme U8-U9' },
] as const;

const CAT_FILTERS_LIVRET = [
  { key: 'u7_jeu_sens', label: 'Sens du jeu', color: LIVRET_U7_CATEGORIES.jeu_sens.color },
  { key: 'u7_jeu_adversaire', label: "L'adversaire", color: LIVRET_U7_CATEGORIES.jeu_adversaire.color },
  { key: 'u7_jeu_partenaires', label: 'Les partenaires', color: LIVRET_U7_CATEGORIES.jeu_partenaires.color },
  { key: 'u7_situation', label: 'Conserver/Progresser', color: LIVRET_U7_CATEGORIES.situation.color },
];

const CAT_FILTERS_U6 = [
  { key: 'u6_decouverte', label: 'Découverte du ballon', color: LIVRET_U6_CATEGORIES.decouverte.color },
  { key: 'u6_tir', label: 'Tir et duel', color: LIVRET_U6_CATEGORIES.tir.color },
  { key: 'u6_poursuite', label: 'Jeux de poursuite', color: LIVRET_U6_CATEGORIES.poursuite.color },
  { key: 'u6_collectif', label: 'Jeux collectifs', color: LIVRET_U6_CATEGORIES.collectif.color },
  { key: 'u6_passes', label: 'Passes et possession', color: LIVRET_U6_CATEGORIES.passes.color },
];

const CAT_FILTERS_PROGRAMME = (Object.keys(TYPE_LABELS) as SessionType[]).map(t => ({
  key: `prog_${t}`,
  label: TYPE_LABELS[t],
  color: TYPE_COLORS[t],
}));

const CAT_FILTERS_U8U9 = (Object.keys(U8U9_PHASE_LABELS) as U8U9Phase[]).map(p => ({
  key: `u8u9_${p}`,
  label: U8U9_PHASE_LABELS[p],
  color: U8U9_PHASE_COLORS[p],
}));

// ─── Modal ────────────────────────────────────────────────────────────────────

type Tab = 'consignes' | 'but' | 'variantes' | 'vigilance';

function ExerciceModal({
  entry, onClose,
}: { entry: UnifiedEntry; onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('consignes');
  const { color } = entry;

  const tabs: { key: Tab; label: string; content?: string }[] = [
    { key: 'consignes', label: 'Consignes', content: entry.consignes },
    ...(entry.but ? [{ key: 'but' as Tab, label: 'But', content: entry.but }] : []),
    ...(entry.variantes ? [{ key: 'variantes' as Tab, label: 'Variantes', content: entry.variantes }] : []),
    ...(entry.vigilance || entry.pointsVigilance
      ? [{ key: 'vigilance' as Tab, label: 'Vigilance', content: entry.vigilance || entry.pointsVigilance }]
      : []),
    ...(entry.rotations ? [{ key: 'vigilance' as Tab, label: 'Rotations', content: entry.rotations }] : []),
  ];

  const activeContent = tabs.find(t => t.key === tab)?.content || tabs[0]?.content || '';

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16, animation: 'fadeIn 0.18s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--color-surface)',
          border: `1px solid ${color}44`,
          borderRadius: 16, maxWidth: 680, width: '100%',
          maxHeight: '92vh', overflowY: 'auto',
          animation: 'fadeInUp 0.22s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '18px 22px 14px',
          borderBottom: `1px solid ${color}30`,
          background: `linear-gradient(135deg, ${color}15, ${color}06)`,
          position: 'sticky', top: 0, zIndex: 1,
          borderRadius: '16px 16px 0 0',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                <span style={{
                  padding: '2px 10px', borderRadius: 20,
                  background: `${color}22`, border: `1px solid ${color}55`,
                  fontSize: 11, fontWeight: 700, color,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>{entry.categoryLabel}</span>
                <span style={{ fontSize: 11, color: 'var(--color-muted)' }}>
                  {entry.sourceLabel}
                </span>
              </div>
              <h2 style={{
                fontFamily: 'Barlow Condensed', fontWeight: 900,
                fontSize: 22, color: 'var(--color-text)', margin: '0 0 4px',
              }}>{entry.titre}</h2>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                {entry.surface && (
                  <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>📐 {entry.surface}</span>
                )}
                {(entry.livretEx?.effectif || entry.livretU6Ex?.effectif) && (
                  <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>👥 {entry.livretEx?.effectif || entry.livretU6Ex?.effectif}</span>
                )}
                {(entry.livretEx?.duree || entry.livretU6Ex?.duree) && (
                  <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>⏱ {entry.livretEx?.duree || entry.livretU6Ex?.duree}</span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: '1px solid var(--color-border)',
                borderRadius: 8, color: 'var(--color-muted)', cursor: 'pointer',
                width: 34, height: 34, fontSize: 18, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
          </div>
        </div>

        {/* Terrain diagram */}
        {(entry.exercice?.marqueurs?.length || entry.livretEx?.marqueurs?.length || entry.livretU6Ex?.marqueurs?.length || entry.u8u9Ex?.marqueurs?.length) ? (
          <div style={{ padding: '16px 22px 0', display: 'flex', justifyContent: 'center' }}>
            <TerrainDiagram
              markers={entry.exercice?.marqueurs || entry.livretEx?.marqueurs || entry.livretU6Ex?.marqueurs || entry.u8u9Ex?.marqueurs}
              fleches={entry.exercice?.fleches || entry.livretEx?.fleches || entry.livretU6Ex?.fleches || entry.u8u9Ex?.fleches}
              width={500}
              height={200}
            />
          </div>
        ) : null}

        {/* Matériel */}
        {(entry.livretEx?.materiel?.length || entry.livretU6Ex?.materiel?.length) ? (
          <div style={{ padding: '14px 22px 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(entry.livretEx?.materiel || entry.livretU6Ex?.materiel || []).map((m, i) => (
              <span key={i} style={{
                padding: '4px 10px', borderRadius: 20,
                background: 'var(--color-border)',
                fontSize: 12, color: 'var(--color-muted)',
              }}>⚽ {m}</span>
            ))}
          </div>
        ) : null}

        {/* Tabs */}
        <div style={{ padding: '16px 22px 22px' }}>
          <div style={{
            display: 'flex', borderBottom: '1px solid var(--color-border)',
            marginBottom: 14, overflowX: 'auto',
          }}>
            {tabs.map(t => (
              <button
                key={t.key + t.label}
                onClick={() => setTab(t.key)}
                style={{
                  padding: '8px 16px', background: 'none', border: 'none',
                  color: tab === t.key ? color : 'var(--color-muted)',
                  cursor: 'pointer', fontSize: 13, fontWeight: 600,
                  borderBottom: `2px solid ${tab === t.key ? color : 'transparent'}`,
                  whiteSpace: 'nowrap', marginBottom: -1,
                  transition: 'all 0.15s',
                }}
              >{t.label}</button>
            ))}
          </div>
          <div style={{
            fontSize: 14, color: 'var(--color-text)', lineHeight: 1.75,
            animation: 'fadeIn 0.15s ease',
          }}>
            {activeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ExerciceCard({ entry, onClick }: { entry: UnifiedEntry; onClick: () => void }) {
  const { color } = entry;
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 12, overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${color}22`;
        e.currentTarget.style.borderColor = `${color}66`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      <div style={{ height: 3, background: color }} />

      {/* Terrain preview */}
      {(entry.exercice?.marqueurs?.length || entry.livretEx?.marqueurs?.length || entry.livretU6Ex?.marqueurs?.length || entry.u8u9Ex?.marqueurs?.length) ? (
        <div style={{
          background: '#162a16',
          display: 'flex', justifyContent: 'center',
          padding: '10px 12px 8px',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <TerrainDiagram
            markers={entry.exercice?.marqueurs || entry.livretEx?.marqueurs || entry.livretU6Ex?.marqueurs}
            fleches={entry.exercice?.fleches || entry.livretEx?.fleches || entry.livretU6Ex?.fleches}
            width={240}
            height={110}
          />
        </div>
      ) : (
        <div style={{
          height: 80,
          background: `linear-gradient(135deg, ${color}18, ${color}06)`,
          borderBottom: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 12,
        }}>
          {(entry.livretEx?.numero || entry.livretU6Ex?.numero) ? (
            <>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${color}25`, border: `2px solid ${color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, fontWeight: 900, fontFamily: 'Barlow Condensed', color,
              }}>{entry.livretEx?.numero || entry.livretU6Ex?.numero}</div>
              <div style={{ fontSize: 11, color: `${color}CC`, fontWeight: 600, maxWidth: 120, textAlign: 'center' }}>
                {entry.categoryLabel}
              </div>
            </>
          ) : (
            <div style={{ fontSize: 11, color: `${color}CC`, fontWeight: 600 }}>{entry.categoryLabel}</div>
          )}
        </div>
      )}

      <div style={{ padding: '12px 14px' }}>
        <h3 style={{
          fontFamily: 'Barlow Condensed', fontWeight: 800,
          fontSize: 16, color: 'var(--color-text)',
          margin: '0 0 6px', lineHeight: 1.2,
        }}>{entry.titre}</h3>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
          <span style={{
            padding: '2px 8px', borderRadius: 12,
            background: `${color}20`, border: `1px solid ${color}44`,
            fontSize: 10, fontWeight: 700, color,
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            {entry.source === 'livret' ? 'Livret U7' : entry.source === 'u6' ? 'Guide U6' : entry.source === 'u8u9' ? 'Programme U8-U9' : 'Programme U6-U7'}
          </span>
          {entry.surface && (
            <span style={{ fontSize: 11, color: 'var(--color-muted)' }}>📐 {entry.surface}</span>
          )}
        </div>

        <p style={{
          fontSize: 12, color: 'var(--color-muted)',
          lineHeight: 1.5, margin: '0 0 10px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {entry.but || entry.consignes}
        </p>

        <div style={{
          fontSize: 11, color: 'var(--color-muted)',
          paddingTop: 8, borderTop: '1px solid var(--color-border)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {entry.sourceLabel}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ExercicesPage() {
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | Source>('all');
  const [catFilter, setCatFilter] = useState<string>('all');
  const [selected, setSelected] = useState<UnifiedEntry | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(loadHiddenExercices);

  // Refresh hidden list whenever tab becomes active
  useEffect(() => {
    const onFocus = () => setHiddenIds(loadHiddenExercices());
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  const catFilters = useMemo(() => {
    if (sourceFilter === 'livret') return CAT_FILTERS_LIVRET;
    if (sourceFilter === 'u6') return CAT_FILTERS_U6;
    if (sourceFilter === 'programme') return CAT_FILTERS_PROGRAMME;
    if (sourceFilter === 'u8u9') return CAT_FILTERS_U8U9;
    return [...CAT_FILTERS_U6, ...CAT_FILTERS_LIVRET, ...CAT_FILTERS_PROGRAMME, ...CAT_FILTERS_U8U9];
  }, [sourceFilter]);

  const filtered = useMemo(() => {
    return ALL_ENTRIES.filter(e => {
      if (hiddenIds.has(e.id)) return false;
      if (sourceFilter !== 'all' && e.source !== sourceFilter) return false;
      if (catFilter !== 'all' && e.categoryKey !== catFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          e.titre.toLowerCase().includes(q) ||
          e.consignes.toLowerCase().includes(q) ||
          (e.but?.toLowerCase().includes(q) ?? false) ||
          e.categoryLabel.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, sourceFilter, catFilter]);

  const livretCount = ALL_ENTRIES.filter(e => e.source === 'livret').length;
  const u6Count = ALL_ENTRIES.filter(e => e.source === 'u6').length;
  const progCount = ALL_ENTRIES.filter(e => e.source === 'programme').length;
  const u8u9Count = ALL_ENTRIES.filter(e => e.source === 'u8u9').length;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'Barlow, sans-serif' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #EAE8E1, #F0EEE7)',
        borderBottom: '1px solid var(--color-border)',
        padding: '24px 20px 20px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Barlow Condensed', fontWeight: 900,
            fontSize: 'clamp(22px, 4vw, 36px)', margin: '0 0 4px',
            color: 'var(--color-text)',
          }}>
            Bibliothèque d'<span style={{ color: '#1E9E58' }}>exercices</span>
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: 13, marginBottom: 16 }}>
            <span style={{ color: LIVRET_U6_CATEGORIES.decouverte.color, fontWeight: 600 }}>
              {u6Count} Guide U6
            </span>
            {' · '}
            <span style={{ color: LIVRET_U7_CATEGORIES.jeu_sens.color, fontWeight: 600 }}>
              {livretCount} Livret U7
            </span>
            {' · '}
            <span style={{ color: '#8B90A8' }}>{progCount} Programme U6-U7</span>
            {' · '}
            <span style={{ color: U8U9_PHASE_COLORS.attaque, fontWeight: 600 }}>{u8u9Count} Programme U8-U9</span>
            {' · '}
            <strong style={{ color: 'var(--color-text)' }}>{ALL_ENTRIES.length} au total</strong>
          </p>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <span style={{
              position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--color-muted)', fontSize: 14, pointerEvents: 'none',
            }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher un exercice, un objectif..."
              style={{
                width: '100%', background: 'var(--color-surface)',
                border: '1px solid var(--color-border)', borderRadius: 10,
                padding: '10px 12px 10px 34px', color: 'var(--color-text)',
                fontSize: 13, outline: 'none', boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = '#1E9E58')}
              onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
            />
          </div>

          {/* Source filters */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 }}>
            {SOURCE_FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => { setSourceFilter(f.key); setCatFilter('all'); }}
                style={{
                  padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  border: `1px solid ${sourceFilter === f.key ? '#1E9E58' : 'var(--color-border)'}`,
                  background: sourceFilter === f.key ? '#1E9E5818' : 'var(--color-surface)',
                  color: sourceFilter === f.key ? '#1E9E58' : 'var(--color-muted)',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >{f.label}</button>
            ))}
            <div style={{ flex: 1 }} />
            {/* View toggle */}
            <div style={{
              display: 'flex', gap: 2,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 8, padding: 3,
            }}>
              {(['grid', 'list'] as const).map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  style={{
                    padding: '5px 10px', borderRadius: 6, border: 'none',
                    background: view === v ? 'var(--color-border)' : 'none',
                    color: view === v ? 'var(--color-text)' : 'var(--color-muted)',
                    cursor: 'pointer', fontSize: 15, transition: 'all 0.15s',
                  }}
                >{v === 'grid' ? '⊞' : '☰'}</button>
              ))}
            </div>
          </div>

          {/* Category filters */}
          {catFilters.length > 0 && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <button
                onClick={() => setCatFilter('all')}
                style={{
                  padding: '5px 12px', borderRadius: 16, fontSize: 11, fontWeight: 600,
                  border: `1px solid ${catFilter === 'all' ? '#555' : 'var(--color-border)'}`,
                  background: catFilter === 'all' ? 'var(--color-border)' : 'transparent',
                  color: catFilter === 'all' ? 'var(--color-text)' : 'var(--color-muted)',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >Toutes catégories</button>
              {catFilters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setCatFilter(f.key)}
                  style={{
                    padding: '5px 12px', borderRadius: 16, fontSize: 11, fontWeight: 600,
                    border: `1px solid ${catFilter === f.key ? f.color : 'var(--color-border)'}`,
                    background: catFilter === f.key ? `${f.color}20` : 'transparent',
                    color: catFilter === f.key ? f.color : 'var(--color-muted)',
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                >{f.label}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 20px 120px' }}>
        <div style={{ marginBottom: 14, fontSize: 13, color: 'var(--color-muted)' }}>
          {filtered.length} exercice{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
        </div>

        {view === 'grid' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: 12,
          }}>
            {filtered.map(entry => (
              <ExerciceCard key={entry.id} entry={entry} onClick={() => setSelected(entry)} />
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {filtered.map(entry => (
              <div
                key={entry.id}
                onClick={() => setSelected(entry)}
                style={{
                  display: 'flex', gap: 14, alignItems: 'center',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderLeft: `3px solid ${entry.color}`,
                  borderRadius: 10, padding: '12px 16px',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#ECEAE3')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface)')}
              >
                {(entry.exercice?.marqueurs?.length || entry.livretEx?.marqueurs?.length || entry.livretU6Ex?.marqueurs?.length || entry.u8u9Ex?.marqueurs?.length) ? (
                  <div style={{ flexShrink: 0 }}>
                    <TerrainDiagram
                      markers={entry.exercice?.marqueurs || entry.livretEx?.marqueurs || entry.livretU6Ex?.marqueurs}
                      fleches={entry.exercice?.fleches || entry.livretEx?.fleches || entry.livretU6Ex?.fleches}
                      width={100}
                      height={64}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: 48, height: 48, borderRadius: 10, flexShrink: 0,
                    background: `${entry.color}20`, border: `1px solid ${entry.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, fontWeight: 900, fontFamily: 'Barlow Condensed',
                    color: entry.color,
                  }}>
                    {entry.livretEx?.numero || entry.livretU6Ex?.numero || '⚽'}
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed', fontWeight: 800,
                    fontSize: 15, color: 'var(--color-text)', marginBottom: 2,
                  }}>{entry.titre}</div>
                  <div style={{ fontSize: 11, color: 'var(--color-muted)', marginBottom: 4 }}>
                    {entry.sourceLabel}
                    {entry.surface ? ` · 📐 ${entry.surface}` : ''}
                  </div>
                  <p style={{
                    fontSize: 12, color: 'var(--color-muted)',
                    margin: 0, lineHeight: 1.4,
                    display: '-webkit-box', WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>{entry.but || entry.consignes}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                  <span style={{
                    padding: '3px 8px', borderRadius: 10,
                    background: `${entry.color}18`, border: `1px solid ${entry.color}44`,
                    fontSize: 10, fontWeight: 700, color: entry.color,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>{entry.source === 'livret' ? 'Livret U7' : entry.source === 'u6' ? 'Guide U6' : entry.source === 'u8u9' ? 'U8-U9' : 'U6-U7'}</span>
                  <span style={{ color: 'var(--color-muted)', fontSize: 18 }}>›</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-muted)' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
            <p style={{ fontSize: 15 }}>Aucun exercice ne correspond à votre recherche.</p>
          </div>
        )}
      </div>

      {selected && (
        <ExerciceModal entry={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

// ─── Exports for CreerSeancePage ──────────────────────────────────────────────
export { ALL_ENTRIES, type UnifiedEntry };
