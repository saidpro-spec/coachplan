// Livret d'exercices U7 — V1 décembre 2020

interface Marker {
  x: number; y: number;
  type: 'attaquant' | 'defenseur' | 'ballon' | 'plot' | 'but';
  label?: string;
}
interface Arrow { x1: number; y1: number; x2: number; y2: number; cx?: number; cy?: number; }

export interface LivretExercice {
  id: string;
  numero: string;
  titre: string;
  categorie: 'jeu_sens' | 'jeu_adversaire' | 'jeu_partenaires' | 'situation';
  sousCategorie: string;
  effectif: string;
  surface: string;
  duree: string;
  materiel: string[];
  but: string;
  consignes: string;
  variantes?: string;
  pointsVigilance: string;
  marqueurs?: Marker[];
  fleches?: Arrow[];
}

export const LIVRET_U7_CATEGORIES = {
  jeu_sens: { label: 'Comprendre le sens du jeu', color: '#0080C8' },
  jeu_adversaire: { label: "Découvrir l'adversaire", color: '#E3061A' },
  jeu_partenaires: { label: 'Découvrir les partenaires', color: '#9F4271' },
  situation: { label: 'Conserver / Progresser', color: '#208B78' },
} as const;

export const LIVRET_U7: LivretExercice[] = [
  {
    id: 'u7-26',
    numero: '26',
    titre: 'Les déménageurs 1',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['15 ballons', 'Jeu de chasubles', 'Plots'],
    but: "L'équipe qui aura le plus de ballons dans sa maison marque 1 pt.",
    consignes: "Séquences de 30 sec. Au signal, aller chercher un ballon dans l'autre maison et le ramener à la main dans sa maison.",
    variantes: 'Le joueur doit ramener le ballon en conduite de balle.',
    pointsVigilance: 'Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites. Tous les joueurs doivent être actifs.',
    marqueurs: [
      // Zone gauche (maison bleue) — plots
      { x: 8, y: 10, type: 'plot' }, { x: 38, y: 10, type: 'plot' },
      { x: 8, y: 90, type: 'plot' }, { x: 38, y: 90, type: 'plot' },
      // Zone droite (maison rouge) — plots
      { x: 62, y: 10, type: 'plot' }, { x: 92, y: 10, type: 'plot' },
      { x: 62, y: 90, type: 'plot' }, { x: 92, y: 90, type: 'plot' },
      // Ballons dans maison bleue
      { x: 18, y: 35, type: 'ballon' }, { x: 28, y: 65, type: 'ballon' },
      // Ballons dans maison rouge
      { x: 72, y: 35, type: 'ballon' }, { x: 82, y: 65, type: 'ballon' },
      // Joueurs bleus (dans maison rouge en train de prendre)
      { x: 68, y: 50, type: 'attaquant', label: 'B' },
      { x: 78, y: 25, type: 'attaquant', label: 'B' },
      // Joueurs rouges (dans maison bleue)
      { x: 32, y: 50, type: 'defenseur', label: 'R' },
      { x: 22, y: 75, type: 'defenseur', label: 'R' },
    ],
    fleches: [
      { x1: 68, y1: 50, x2: 45, y2: 50, cx: 56, cy: 40 },
      { x1: 32, y1: 50, x2: 55, y2: 50, cx: 44, cy: 60 },
    ],
  },
  {
    id: 'u7-27a',
    numero: '27',
    titre: 'Les déménageurs 3',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['15 ballons', 'Jeu de chasubles', 'Plots'],
    but: "L'équipe qui aura le moins de ballons dans sa maison marque 1 pt.",
    consignes: "Séquences de 30 sec. Au signal, amener en conduite de balle le ballon dans la maison de l'équipe adverse en passant obligatoirement par la route de mon équipe.",
    variantes: "Un joueur sans ballon peut revenir par le chemin adverse pour essayer de ralentir l'équipe adverse ou prendre le ballon. Possibilité de se faire des passes pour éviter l'adversaire qui essaie de prendre un ballon.",
    pointsVigilance: 'Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites. Tous les joueurs doivent être actifs.',
    marqueurs: [
      // Maison bleue gauche
      { x: 8, y: 10, type: 'plot' }, { x: 38, y: 10, type: 'plot' },
      { x: 8, y: 90, type: 'plot' }, { x: 38, y: 90, type: 'plot' },
      // Maison rouge droite
      { x: 62, y: 10, type: 'plot' }, { x: 92, y: 10, type: 'plot' },
      { x: 62, y: 90, type: 'plot' }, { x: 92, y: 90, type: 'plot' },
      // Route haute bleue / route basse rouge (plots délimitants)
      { x: 50, y: 5, type: 'plot' }, { x: 50, y: 48, type: 'plot' },
      { x: 50, y: 52, type: 'plot' }, { x: 50, y: 95, type: 'plot' },
      // Joueurs bleus avec ballons
      { x: 20, y: 30, type: 'attaquant', label: 'B' },
      { x: 30, y: 70, type: 'attaquant', label: 'B' },
      // Joueurs rouges
      { x: 80, y: 30, type: 'defenseur', label: 'R' },
      { x: 70, y: 70, type: 'defenseur', label: 'R' },
      { x: 20, y: 30, type: 'ballon' },
    ],
    fleches: [
      { x1: 20, y1: 30, x2: 75, y2: 25, cx: 50, cy: 15 },
      { x1: 80, y1: 30, x2: 25, y2: 75, cx: 50, cy: 85 },
    ],
  },
  {
    id: 'u7-27b',
    numero: '27',
    titre: 'Les déménageurs 4',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['15 ballons', 'Jeu de chasubles', 'Plots', 'Haies'],
    but: "L'équipe qui aura le moins de ballons dans sa maison marque 1 pt.",
    consignes: "Séquences de 30 sec. Séparation de l'aire de jeu en 2 couloirs et 4 zones. Une équipe dans chaque couloir avec 3 joueurs dans la zone près de son camp et 2 joueurs près du camp adverse. Au signal, les 3 joueurs cherchent à vider leur camp en prenant un ballon et en l'amenant près de l'autre zone pour faire une passe à un partenaire.",
    variantes: undefined,
    pointsVigilance: 'Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites. Tous les joueurs doivent être actifs.',
    marqueurs: [
      // Ligne de séparation couloirs (horizontale au milieu)
      { x: 5, y: 50, type: 'plot' }, { x: 50, y: 50, type: 'plot' }, { x: 95, y: 50, type: 'plot' },
      // Séparation verticale milieu
      { x: 50, y: 5, type: 'plot' }, { x: 50, y: 95, type: 'plot' },
      // Joueurs bleus couloir haut
      { x: 20, y: 25, type: 'attaquant', label: 'B' },
      { x: 30, y: 25, type: 'attaquant', label: 'B' },
      { x: 70, y: 25, type: 'attaquant', label: 'B' },
      // Joueurs rouges couloir bas
      { x: 20, y: 75, type: 'defenseur', label: 'R' },
      { x: 30, y: 75, type: 'defenseur', label: 'R' },
      { x: 75, y: 75, type: 'defenseur', label: 'R' },
      // Ballons
      { x: 15, y: 25, type: 'ballon' },
      { x: 15, y: 75, type: 'ballon' },
    ],
    fleches: [
      { x1: 20, y1: 25, x2: 45, y2: 25 },
      { x1: 70, y1: 25, x2: 80, y2: 25 },
      { x1: 20, y1: 75, x2: 45, y2: 75 },
    ],
  },
  {
    id: 'u7-29',
    numero: '29',
    titre: '1, 2, 3... Soleil',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '10 joueurs',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['Cônes (1,2,3 soleil)', 'Plots'],
    but: 'Le joueur qui atteint le 1er la zone but marque un point.',
    consignes: "L'éducateur prononce «1-2-3 Soleil». Les joueurs doivent se déplacer en allant vers la zone but. Dès que l'éducateur a terminé sa phrase, il se retourne ; les joueurs doivent s'arrêter et faire la statue. Si un joueur est surpris en train de bouger, il retourne sur la ligne de départ.",
    variantes: "Les joueurs partent en conduite de balle. Varier le rythme d'énonciation de la phrase.",
    pointsVigilance: 'Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites.',
    marqueurs: [
      // Éducateur / but côté droit (dos aux joueurs)
      { x: 90, y: 50, type: 'defenseur', label: 'E' },
      // Ligne de départ (plots)
      { x: 8, y: 10, type: 'plot' }, { x: 8, y: 90, type: 'plot' },
      // Joueurs en progression (attaquants bleus)
      { x: 15, y: 25, type: 'attaquant', label: '1' },
      { x: 25, y: 50, type: 'attaquant', label: '2' },
      { x: 18, y: 75, type: 'attaquant', label: '3' },
      { x: 40, y: 35, type: 'attaquant', label: '4' },
      { x: 35, y: 65, type: 'attaquant', label: '5' },
      // Ballons
      { x: 15, y: 25, type: 'ballon' },
      { x: 35, y: 65, type: 'ballon' },
    ],
    fleches: [
      { x1: 15, y1: 25, x2: 35, y2: 25 },
      { x1: 25, y1: 50, x2: 50, y2: 50 },
      { x1: 18, y1: 75, x2: 38, y2: 75 },
      { x1: 40, y1: 35, x2: 62, y2: 40 },
    ],
  },
  {
    id: 'u7-30',
    numero: '30',
    titre: 'Les 4 coins',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['1 ballon par joueur', 'Jeu de chasubles', 'Plots'],
    but: "C'est l'équipe qui sera regroupée la première dans les coins correspondant à sa couleur qui marque un point.",
    consignes: "Chaque joueur conduit son ballon dans son camp. Au signal de l'éducateur, chaque joueur prend son ballon avec les mains et ira le déposer dans un des coins correspondant à sa couleur.",
    variantes: "Au signal, le ballon est déposé en conduite de balle. Deux joueurs minimum doivent être dans chaque coin. Un joueur adverse (le glouton) peut passer dans l'autre camp et essayer de sortir des ballons des limites du terrain.",
    pointsVigilance: 'Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites. Tous les joueurs doivent être actifs.',
    marqueurs: [
      // 4 coins — plots
      { x: 8, y: 8, type: 'plot' }, { x: 92, y: 8, type: 'plot' },
      { x: 8, y: 92, type: 'plot' }, { x: 92, y: 92, type: 'plot' },
      // Séparation milieu
      { x: 50, y: 8, type: 'plot' }, { x: 50, y: 92, type: 'plot' },
      // Joueurs bleus (gauche) en mouvement vers coins
      { x: 25, y: 30, type: 'attaquant', label: 'B' },
      { x: 30, y: 55, type: 'attaquant', label: 'B' },
      { x: 20, y: 70, type: 'attaquant', label: 'B' },
      // Joueurs rouges (droite)
      { x: 75, y: 30, type: 'defenseur', label: 'R' },
      { x: 65, y: 55, type: 'defenseur', label: 'R' },
      { x: 78, y: 70, type: 'defenseur', label: 'R' },
      // Ballons
      { x: 25, y: 30, type: 'ballon' },
      { x: 65, y: 55, type: 'ballon' },
    ],
    fleches: [
      { x1: 25, y1: 30, x2: 10, y2: 12, cx: 15, cy: 20 },
      { x1: 75, y1: 30, x2: 90, y2: 12, cx: 85, cy: 20 },
      { x1: 20, y1: 70, x2: 10, y2: 88, cx: 14, cy: 80 },
      { x1: 78, y1: 70, x2: 90, y2: 88, cx: 85, cy: 80 },
    ],
  },
  {
    id: 'u7-31',
    numero: '31',
    titre: 'Le chasseur',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '10 joueurs',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['Cônes', 'Plots'],
    but: "Le dernier joueur restant et qui n'a pas été touché marque un point.",
    consignes: "Les joueurs doivent aller dans la zone refuge sans se faire toucher ou attraper par le chasseur. Tous les joueurs attrapés deviennent des chasseurs et doivent se tenir la main.",
    variantes: "Les joueurs partent en conduite de balle. Mettre des portes dans la surface centrale. Chaque joueur doit passer par au moins une porte lorsqu\'il traverse. Augmenter le nombre initial de chasseurs.",
    pointsVigilance: "Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites. Changer régulièrement de chasseur. Occupation de toute la largeur par les joueurs. Tous les joueurs doivent être actifs.",
    marqueurs: [
      // Zone refuge droite (plots)
      { x: 75, y: 8, type: 'plot' }, { x: 95, y: 8, type: 'plot' },
      { x: 75, y: 92, type: 'plot' }, { x: 95, y: 92, type: 'plot' },
      // Ligne de départ gauche
      { x: 8, y: 8, type: 'plot' }, { x: 8, y: 92, type: 'plot' },
      // Chasseur (rouge) au milieu
      { x: 50, y: 50, type: 'defenseur', label: 'C' },
      // Joueurs (attaquants) se déplaçant vers refuge
      { x: 15, y: 25, type: 'attaquant' },
      { x: 12, y: 50, type: 'attaquant' },
      { x: 15, y: 75, type: 'attaquant' },
      { x: 35, y: 35, type: 'attaquant' },
      { x: 38, y: 65, type: 'attaquant' },
      // Ballons
      { x: 15, y: 25, type: 'ballon' },
      { x: 35, y: 35, type: 'ballon' },
    ],
    fleches: [
      { x1: 15, y1: 25, x2: 72, y2: 30, cx: 42, cy: 15 },
      { x1: 12, y1: 50, x2: 72, y2: 50 },
      { x1: 15, y1: 75, x2: 72, y2: 70, cx: 42, cy: 85 },
    ],
  },
  {
    id: 'u7-32',
    numero: '32',
    titre: 'Les 2 chasseurs',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '10 joueurs',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['8 ballons', '1 jeu chasubles', 'Plots'],
    but: "Le dernier joueur restant et qui n'a pas été touché marque un point.",
    consignes: "Les joueurs doivent aller dans la zone refuge en conduite de balle en évitant les deux chasseurs qui chassent chacun dans leur zone. Ils peuvent s'arrêter dans la zone refuge située entre les deux zones chasseurs. Le chasseur essaie de faire sortir le ballon de son espace de jeu.",
    variantes: "Les chasseurs peuvent évoluer librement dans les 2 zones mais pas dans le refuge qu\'ils ne peuvent pas traverser.",
    pointsVigilance: "Laisser jouer - Observer – Questionner. Compter les points. Valoriser les réussites. Changer régulièrement de chasseur. Occupation de toute la largeur par les joueurs. Tous les joueurs doivent être actifs.",
    marqueurs: [
      // Zone départ gauche
      { x: 8, y: 8, type: 'plot' }, { x: 8, y: 92, type: 'plot' },
      // Zone refuge milieu (plots)
      { x: 38, y: 8, type: 'plot' }, { x: 60, y: 8, type: 'plot' },
      { x: 38, y: 92, type: 'plot' }, { x: 60, y: 92, type: 'plot' },
      // Zone arrivée droite
      { x: 92, y: 8, type: 'plot' }, { x: 92, y: 92, type: 'plot' },
      // Chasseur 1 (zone gauche)
      { x: 22, y: 50, type: 'defenseur', label: 'C' },
      // Chasseur 2 (zone droite)
      { x: 75, y: 50, type: 'defenseur', label: 'C' },
      // Joueurs avec ballons
      { x: 12, y: 25, type: 'attaquant' }, { x: 12, y: 50, type: 'attaquant' }, { x: 12, y: 75, type: 'attaquant' },
      { x: 12, y: 25, type: 'ballon' }, { x: 12, y: 75, type: 'ballon' },
    ],
    fleches: [
      { x1: 12, y1: 25, x2: 36, y2: 25, cx: 22, cy: 18 },
      { x1: 12, y1: 50, x2: 36, y2: 50 },
      { x1: 12, y1: 75, x2: 36, y2: 75, cx: 22, cy: 82 },
    ],
  },
  {
    id: 'u7-33',
    numero: '33',
    titre: 'Le jeu de quilles',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['12 ballons', '16 cônes', 'Plots'],
    but: "L'équipe qui fait tomber toutes les quilles la première marque 1 point.",
    consignes: "Au signal, les joueurs doivent frapper dans le ballon pour faire tomber les quilles.",
    variantes: "Possibilité de mettre une réserve de ballons au milieu. Dans ce cas les joueurs peuvent aller chercher un ballon dans la réserve et la ramener en conduite de balle avant de tirer.",
    pointsVigilance: "Corriger le geste. Compter les points. Valoriser les réussites. Joueur : Frappe de l'intérieur du pied. Pied d'appui près du ballon légèrement en retrait. Cheville ferme. Pointe du pied d'appui en direction de la cible. Viser une quille et ne pas frapper n'importe où.",
    marqueurs: [
      // Quilles adverses (côté rouge) — rangées de plots
      { x: 70, y: 20, type: 'plot' }, { x: 78, y: 20, type: 'plot' }, { x: 86, y: 20, type: 'plot' },
      { x: 70, y: 50, type: 'plot' }, { x: 78, y: 50, type: 'plot' }, { x: 86, y: 50, type: 'plot' },
      { x: 70, y: 80, type: 'plot' }, { x: 78, y: 80, type: 'plot' }, { x: 86, y: 80, type: 'plot' },
      // Quilles côté bleu
      { x: 14, y: 20, type: 'plot' }, { x: 22, y: 20, type: 'plot' }, { x: 30, y: 20, type: 'plot' },
      { x: 14, y: 50, type: 'plot' }, { x: 22, y: 50, type: 'plot' }, { x: 30, y: 50, type: 'plot' },
      { x: 14, y: 80, type: 'plot' }, { x: 22, y: 80, type: 'plot' }, { x: 30, y: 80, type: 'plot' },
      // Joueurs bleus tirant vers droite
      { x: 48, y: 30, type: 'attaquant', label: 'B' },
      { x: 48, y: 70, type: 'attaquant', label: 'B' },
      // Joueurs rouges tirant vers gauche
      { x: 52, y: 20, type: 'defenseur', label: 'R' },
      { x: 52, y: 80, type: 'defenseur', label: 'R' },
      { x: 48, y: 30, type: 'ballon' }, { x: 52, y: 20, type: 'ballon' },
    ],
    fleches: [
      { x1: 48, y1: 30, x2: 68, y2: 28 },
      { x1: 48, y1: 70, x2: 68, y2: 72 },
      { x1: 52, y1: 20, x2: 32, y2: 22 },
      { x1: 52, y1: 80, x2: 32, y2: 78 },
    ],
  },
  {
    id: 'u7-34',
    numero: '34',
    titre: 'Le jeu de quilles 2',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['12 ballons', '26 cônes', 'Plots'],
    but: "Les équipes jouent le même nombre de ballons, l'équipe qui aura fait tomber le plus de quilles marque 1 point.",
    consignes: "Au signal, les joueurs doivent frapper dans le ballon pour faire tomber les quilles. Ils peuvent aller chercher d'autres ballons dans leur réserve.",
    variantes: "Un joueur adverse sans ballon chasse les joueurs adverses pour les empêcher de viser. Les joueurs peuvent se faire des passes pour éviter le chasseur.",
    pointsVigilance: "Corriger. Compter les points. Valoriser les réussites. Joueur : Frappe de l'intérieur du pied. Cheville ferme. Pointe du pied d'appui en direction de la cible.",
    marqueurs: [
      // Quilles côté droit (adverses des bleus)
      { x: 72, y: 18, type: 'plot' }, { x: 80, y: 18, type: 'plot' }, { x: 88, y: 18, type: 'plot' },
      { x: 72, y: 40, type: 'plot' }, { x: 80, y: 40, type: 'plot' }, { x: 88, y: 40, type: 'plot' },
      { x: 72, y: 62, type: 'plot' }, { x: 80, y: 62, type: 'plot' }, { x: 88, y: 62, type: 'plot' },
      { x: 72, y: 82, type: 'plot' }, { x: 80, y: 82, type: 'plot' }, { x: 88, y: 82, type: 'plot' },
      // Quilles côté gauche
      { x: 12, y: 18, type: 'plot' }, { x: 20, y: 18, type: 'plot' }, { x: 28, y: 18, type: 'plot' },
      { x: 12, y: 50, type: 'plot' }, { x: 20, y: 50, type: 'plot' }, { x: 28, y: 50, type: 'plot' },
      { x: 12, y: 82, type: 'plot' }, { x: 20, y: 82, type: 'plot' }, { x: 28, y: 82, type: 'plot' },
      // Joueurs + ballons au milieu
      { x: 48, y: 25, type: 'attaquant', label: 'B' }, { x: 48, y: 75, type: 'attaquant', label: 'B' },
      { x: 52, y: 50, type: 'defenseur', label: 'R' },
      { x: 42, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 48, y1: 25, x2: 70, y2: 22 },
      { x1: 48, y1: 75, x2: 70, y2: 78 },
      { x1: 52, y1: 50, x2: 30, y2: 48 },
    ],
  },
  {
    id: 'u7-35',
    numero: '35',
    titre: 'Le bowling',
    categorie: 'jeu_sens',
    sousCategorie: 'Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '40 m × 20 m',
    duree: '10 mn',
    materiel: ['20 ballons', '12 cônes', 'Plots'],
    but: "Les équipes jouent le même nombre de ballons, l'équipe qui aura fait tomber le plus de quilles marque 1 point.",
    consignes: "Les joueurs conduisent leur ballon ; au signal ils doivent faire tomber les quilles de l'équipe adverse. Une fois le tir effectué, ils peuvent aller chercher des ballons dans la réserve.",
    variantes: "Un joueur adverse placé dans la zone adverse essaie d'intercepter les tirs. S'il récupère le ballon, il peut essayer de faire tomber des quilles.",
    pointsVigilance: 'Compter les points. Valoriser les réussites. Corriger les mauvais gestes.',
    marqueurs: [
      // Séparation milieu (plots)
      { x: 50, y: 8, type: 'plot' }, { x: 50, y: 92, type: 'plot' },
      // Quilles côté rouge (droite)
      { x: 72, y: 25, type: 'plot' }, { x: 80, y: 25, type: 'plot' }, { x: 88, y: 25, type: 'plot' },
      { x: 72, y: 75, type: 'plot' }, { x: 80, y: 75, type: 'plot' }, { x: 88, y: 75, type: 'plot' },
      // Quilles côté bleu (gauche)
      { x: 12, y: 25, type: 'plot' }, { x: 20, y: 25, type: 'plot' }, { x: 28, y: 25, type: 'plot' },
      { x: 12, y: 75, type: 'plot' }, { x: 20, y: 75, type: 'plot' }, { x: 28, y: 75, type: 'plot' },
      // Joueurs bleus conduisant vers droite
      { x: 35, y: 35, type: 'attaquant', label: 'B' }, { x: 30, y: 65, type: 'attaquant', label: 'B' },
      { x: 35, y: 35, type: 'ballon' },
      // Joueur rouge défenseur
      { x: 65, y: 50, type: 'defenseur', label: 'R' },
    ],
    fleches: [
      { x1: 35, y1: 35, x2: 70, y2: 28 },
      { x1: 30, y1: 65, x2: 70, y2: 72 },
    ],
  },
  {
    id: 'u7-36',
    numero: '36',
    titre: 'Les 3 portes',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '5 × 5',
    surface: '15 m × 15 m',
    duree: '10 mn',
    materiel: ['Jeu de chasubles', '6 cônes', 'Plots', 'Haies'],
    but: 'Passer dans une porte = 1 pt',
    consignes: "Au signal de l'éducateur, le joueur rouge doit essayer de passer dans la porte 1 ou 2 sans se faire toucher par le joueur bleu. S'il se fait toucher, le joueur bleu peut passer dans la porte 3 si il ne se fait pas toucher à son tour.",
    variantes: 'Ballon à la main. Ballon au pied.',
    pointsVigilance: "Compter les points. Valoriser les réussites. Joueur rouge : Faire des feintes en changeant de direction. Garder sa vitesse.",
    marqueurs: [
      // Porte 1 (gauche)
      { x: 25, y: 15, type: 'plot' }, { x: 25, y: 40, type: 'plot' },
      // Porte 2 (droite)
      { x: 75, y: 15, type: 'plot' }, { x: 75, y: 40, type: 'plot' },
      // Porte 3 (bas, pour defenseur)
      { x: 42, y: 75, type: 'plot' }, { x: 58, y: 75, type: 'plot' },
      // Joueur rouge attaquant (en bas)
      { x: 50, y: 90, type: 'defenseur', label: 'R' },
      // Joueur bleu défenseur (au milieu)
      { x: 50, y: 55, type: 'attaquant', label: 'B' },
      // Équipe adverse (haut)
      { x: 20, y: 12, type: 'attaquant' }, { x: 50, y: 12, type: 'attaquant' }, { x: 80, y: 12, type: 'attaquant' },
      { x: 50, y: 90, type: 'ballon' },
    ],
    fleches: [
      { x1: 50, y1: 90, x2: 28, y2: 42, cx: 25, cy: 70 },
      { x1: 50, y1: 90, x2: 72, y2: 42, cx: 75, cy: 70 },
    ],
  },
  {
    id: 'u7-37',
    numero: '37',
    titre: 'Les 3 buts',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '5 × 5',
    surface: '15 m × 15 m',
    duree: '10 mn',
    materiel: ['5 ballons', 'Jeu de chasubles', '6 cônes', 'Plots'],
    but: 'Marquer dans un but = 1 pt',
    consignes: "Au signal de l'éducateur, le joueur bleu doit faire une passe au joueur rouge. Ce dernier doit contrôler le ballon et marquer dans la porte 1 ou 2. Si le joueur bleu récupère le ballon, il peut marquer dans la porte 3.",
    variantes: "Ajouter ou retirer une porte (but). Modifier la position des portes. Un 2ème joueur rouge rentre pour faire un 2c1. Un 2ème joueur bleu placé autour du terrain peut rentrer au moment de la passe pour aider à défendre.",
    pointsVigilance: "Compter les points. Valoriser les réussites. Corriger les mauvais gestes. Joueur rouge : Frappe de l'intérieur du pied. Cheville ferme. Pied d'appui près du ballon légèrement en retrait. Pointe du pied d'appui en direction du but visé.",
    marqueurs: [
      // But 1 (gauche haut)
      { x: 15, y: 12, type: 'but' },
      // But 2 (droite haut)
      { x: 82, y: 12, type: 'but' },
      // But 3 (bas centre — pour défenseur)
      { x: 50, y: 88, type: 'but' },
      // Joueur rouge (attaquant) au centre
      { x: 50, y: 55, type: 'defenseur', label: 'R' },
      // Joueur bleu (passeur) en bas
      { x: 25, y: 85, type: 'attaquant', label: 'B' },
      { x: 50, y: 55, type: 'ballon' },
      // Équipe adverse (haut)
      { x: 30, y: 20, type: 'attaquant' }, { x: 70, y: 20, type: 'attaquant' },
    ],
    fleches: [
      { x1: 25, y1: 85, x2: 48, y2: 58, cx: 30, cy: 70 },
      { x1: 50, y1: 55, x2: 18, y2: 22, cx: 28, cy: 38 },
      { x1: 50, y1: 55, x2: 80, y2: 22, cx: 72, cy: 38 },
    ],
  },
  {
    id: 'u7-40',
    numero: '40',
    titre: 'Le château',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '8 à 10 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['6 ballons', 'Jeu de chasubles', '8 piquets', '9 cônes', 'Plots'],
    but: 'Toucher les cônes (quilles)',
    consignes: "Cercle de 6m de diamètre avec des cônes dans le château au milieu. 4 joueurs bleus protègent les cônes dans le château. 4 joueurs rouges possèdent un ballon à l'extérieur du château. Les joueurs bleus doivent empêcher les ballons de toucher les quilles ; les joueurs rouges doivent essayer de faire tomber les quilles.",
    variantes: 'Ajouter ou enlever des ballons.',
    pointsVigilance: 'Compter les points. Valoriser les réussites. Inverser les rôles.',
    marqueurs: [
      // Quilles (plots) dans le château (cercle central)
      { x: 46, y: 40, type: 'plot' }, { x: 54, y: 40, type: 'plot' },
      { x: 42, y: 52, type: 'plot' }, { x: 50, y: 48, type: 'plot' }, { x: 58, y: 52, type: 'plot' },
      { x: 46, y: 62, type: 'plot' }, { x: 54, y: 62, type: 'plot' },
      // Défenseurs bleus dans le château
      { x: 44, y: 45, type: 'attaquant', label: 'D' }, { x: 56, y: 45, type: 'attaquant', label: 'D' },
      { x: 44, y: 58, type: 'attaquant', label: 'D' }, { x: 56, y: 58, type: 'attaquant', label: 'D' },
      // Attaquants rouges avec ballons autour
      { x: 20, y: 50, type: 'defenseur', label: 'A' }, { x: 80, y: 50, type: 'defenseur', label: 'A' },
      { x: 50, y: 15, type: 'defenseur', label: 'A' }, { x: 50, y: 85, type: 'defenseur', label: 'A' },
      { x: 20, y: 50, type: 'ballon' }, { x: 80, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 20, y1: 50, x2: 40, y2: 50 },
      { x1: 80, y1: 50, x2: 60, y2: 50 },
      { x1: 50, y1: 15, x2: 50, y2: 37 },
      { x1: 50, y1: 85, x2: 50, y2: 65 },
    ],
  },
  {
    id: 'u7-41',
    numero: '41',
    titre: 'Le château 2',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '8 à 10 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['6 ballons', 'Jeu de chasubles', '4 cônes', 'Plots'],
    but: 'Marquer un point en tirant au but',
    consignes: "Un demi-cercle de 6m de diamètre représente le château à défendre. Dans le château, 1 but défendu par un gardien. Terrain séparé en 2 zones. 2 joueurs bleus défendent en dehors du château dans chaque zone. Dans chaque zone, 2 joueurs rouges munis d'un ballon, vont essayer de pénétrer dans le ½ cercle pour marquer un but.",
    variantes: 'Faire partir un défenseur de derrière ou sur le côté après le départ du ballon.',
    pointsVigilance: 'Compter les points. Valoriser les réussites. Inverser régulièrement les rôles.',
    marqueurs: [
      // But (droit, centre)
      { x: 92, y: 50, type: 'but' },
      // Gardien
      { x: 85, y: 50, type: 'attaquant', label: 'G' },
      // Séparation milieu (verticale)
      { x: 50, y: 8, type: 'plot' }, { x: 50, y: 92, type: 'plot' },
      // Défenseurs bleus (2 par zone)
      { x: 65, y: 28, type: 'attaquant', label: 'D' }, { x: 72, y: 60, type: 'attaquant', label: 'D' },
      // Attaquants rouges zone haute
      { x: 25, y: 28, type: 'defenseur', label: 'A' }, { x: 35, y: 20, type: 'defenseur', label: 'A' },
      // Attaquants rouges zone basse
      { x: 25, y: 72, type: 'defenseur', label: 'A' }, { x: 35, y: 80, type: 'defenseur', label: 'A' },
      { x: 25, y: 28, type: 'ballon' }, { x: 25, y: 72, type: 'ballon' },
      // Joueur sans ballon (arrière)
      { x: 10, y: 50, type: 'defenseur', label: '+' },
    ],
    fleches: [
      { x1: 25, y1: 28, x2: 75, y2: 38, cx: 55, cy: 25 },
      { x1: 25, y1: 72, x2: 75, y2: 62, cx: 55, cy: 78 },
      { x1: 10, y1: 50, x2: 35, y2: 35, cx: 20, cy: 40 },
    ],
  },
  {
    id: 'u7-42',
    numero: '42',
    titre: 'Le château 3',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '8 à 10 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['4 ballons', 'Jeu de chasubles', '2 cônes', 'Plots'],
    but: 'Marquer un but = 1 pt',
    consignes: "Un demi-cercle de 6m de diamètre représente le château à défendre. Dans le château, 1 but défendu par un gardien. 2 joueurs bleus défendent en dehors du château. 4 joueurs rouges munis d'un ballon, vont essayer collectivement de pénétrer dans le ½ cercle pour marquer un but.",
    variantes: "Faire partir un défenseur de derrière ou sur le côté après le départ du ballon. Faire un 5c3 au démarrage plus un défenseur qui rentre.",
    pointsVigilance: 'Compter les points. Valoriser les réussites. Inverser régulièrement les rôles.',
    marqueurs: [
      // But droit
      { x: 92, y: 50, type: 'but' },
      // Gardien
      { x: 84, y: 50, type: 'attaquant', label: 'G' },
      // 2 Défenseurs bleus
      { x: 65, y: 35, type: 'attaquant', label: 'D' }, { x: 65, y: 65, type: 'attaquant', label: 'D' },
      // 4 Attaquants rouges
      { x: 20, y: 30, type: 'defenseur', label: 'A' }, { x: 20, y: 70, type: 'defenseur', label: 'A' },
      { x: 35, y: 50, type: 'defenseur', label: 'A' }, { x: 10, y: 50, type: 'defenseur', label: 'A' },
      { x: 20, y: 30, type: 'ballon' }, { x: 35, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 20, y1: 30, x2: 40, y2: 35, cx: 30, cy: 25 },
      { x1: 35, y1: 50, x2: 62, y2: 45 },
      { x1: 20, y1: 70, x2: 40, y2: 65, cx: 30, cy: 75 },
      { x1: 10, y1: 50, x2: 18, y2: 30, cx: 8, cy: 40 },
    ],
  },
  {
    id: 'u7-43',
    numero: '43',
    titre: 'La bergerie',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '10 à 12 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['Jeu de chasubles', 'Plots'],
    but: "Rejoindre la bergerie à minuit sans se faire attraper par le loup. Être le dernier mouton dans la bergerie à la fin du temps de jeu.",
    consignes: "Délimiter une aire de jeu qui comprend un refuge «la bergerie» et le repère. Le loup est dans son repère et les moutons se promènent en trottinant dans l'aire de jeu hors de la bergerie. Ils demandent au loup «Loup, quelle heure est-il ?».",
    variantes: "Mettre 2 ou plusieurs loups. Imposer l'entrée dans la bergerie par 2 portes. Les moutons se tiennent la main par deux.",
    pointsVigilance: "Compter les points. Valoriser les réussites.",
    marqueurs: [
      // Bergerie (zone droite) — plots
      { x: 68, y: 10, type: 'plot' }, { x: 92, y: 10, type: 'plot' },
      { x: 68, y: 90, type: 'plot' }, { x: 92, y: 90, type: 'plot' },
      // Repère du loup (gauche) — plots
      { x: 8, y: 35, type: 'plot' }, { x: 28, y: 35, type: 'plot' },
      { x: 8, y: 65, type: 'plot' }, { x: 28, y: 65, type: 'plot' },
      // Loup (rouge)
      { x: 18, y: 50, type: 'defenseur', label: 'L' },
      // Moutons (bleus) se promenant
      { x: 45, y: 25, type: 'attaquant' }, { x: 55, y: 50, type: 'attaquant' },
      { x: 42, y: 70, type: 'attaquant' }, { x: 60, y: 35, type: 'attaquant' },
      { x: 60, y: 70, type: 'attaquant' },
    ],
    fleches: [
      { x1: 45, y1: 25, x2: 66, y2: 30, cx: 56, cy: 18 },
      { x1: 55, y1: 50, x2: 66, y2: 50 },
      { x1: 42, y1: 70, x2: 66, y2: 68, cx: 54, cy: 78 },
    ],
  },
  {
    id: 'u7-44',
    numero: '44',
    titre: 'La bergerie 2',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire / Découvrir les partenaires",
    effectif: '10 à 12 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['Jeu de chasubles', 'Plots'],
    but: 'Avoir le plus de moutons libres à la fin du temps de jeu.',
    consignes: "Délimiter une aire de jeu qui comprend deux refuges (une «bergerie» par équipe) et le repère du loup. Les moutons forment deux équipes. Quand il est minuit, les moutons doivent se réfugier dans la bergerie qui correspond à leur couleur.",
    variantes: undefined,
    pointsVigilance: 'Laisser jouer - Observer – Questionner.',
    marqueurs: [
      // Bergerie rouge (droite haut)
      { x: 70, y: 8, type: 'plot' }, { x: 92, y: 8, type: 'plot' },
      { x: 70, y: 40, type: 'plot' }, { x: 92, y: 40, type: 'plot' },
      // Bergerie bleue (droite bas)
      { x: 70, y: 60, type: 'plot' }, { x: 92, y: 60, type: 'plot' },
      { x: 70, y: 92, type: 'plot' }, { x: 92, y: 92, type: 'plot' },
      // Loup (rouge au milieu)
      { x: 50, y: 50, type: 'defenseur', label: 'L' },
      // Moutons rouges (allant bergerie rouge)
      { x: 25, y: 30, type: 'defenseur', label: 'R' }, { x: 40, y: 20, type: 'defenseur', label: 'R' },
      // Moutons bleus (allant bergerie bleue)
      { x: 28, y: 70, type: 'attaquant', label: 'B' }, { x: 42, y: 80, type: 'attaquant', label: 'B' },
    ],
    fleches: [
      { x1: 25, y1: 30, x2: 68, y2: 22, cx: 48, cy: 18 },
      { x1: 28, y1: 70, x2: 68, y2: 78, cx: 48, cy: 82 },
    ],
  },
  {
    id: 'u7-45',
    numero: '45',
    titre: 'La queue du diable',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire / Découvrir les partenaires",
    effectif: '10 à 12 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['Jeu de chasubles', 'Plots'],
    but: 'Attraper le plus de chasubles possibles sans se faire prendre le sien.',
    consignes: "Chaque joueur accroche une chasuble dans son dos (la «queue du diable»), rentrée dans son short. Le but du jeu est d'attraper le plus de chasubles possibles sans se faire prendre le sien. Quand on a perdu «sa queue», on sort du jeu («prison»).",
    variantes: "Le joueur doit assurer 2 rôles, regarder partout et changer rapidement d'appuis, occuper tout l'espace pour être plus en sécurité, faire éventuellement des alliances !",
    pointsVigilance: "Laisser jouer - Observer – Questionner. Limiter le temps du jeu.",
    marqueurs: [
      // Zone prison (droite)
      { x: 75, y: 10, type: 'plot' }, { x: 92, y: 10, type: 'plot' },
      { x: 75, y: 40, type: 'plot' }, { x: 92, y: 40, type: 'plot' },
      // Joueurs bleus (avec queue)
      { x: 20, y: 25, type: 'attaquant' }, { x: 40, y: 55, type: 'attaquant' },
      { x: 55, y: 30, type: 'attaquant' }, { x: 30, y: 75, type: 'attaquant' },
      // Joueurs rouges (avec queue)
      { x: 60, y: 65, type: 'defenseur' }, { x: 45, y: 80, type: 'defenseur' },
      { x: 35, y: 40, type: 'defenseur' }, { x: 65, y: 45, type: 'defenseur' },
    ],
    fleches: [
      { x1: 35, y1: 40, x2: 22, y2: 28, cx: 27, cy: 32 },
      { x1: 60, y1: 65, x2: 42, y2: 57, cx: 50, cy: 60 },
    ],
  },
  {
    id: 'u7-46',
    numero: '46',
    titre: 'La queue du diable 2',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire / Découvrir les partenaires",
    effectif: '10 à 12 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['Jeu de chasubles', '2 piquets', 'Plots'],
    but: "Être l'équipe qui a capturé le plus de chasubles.",
    consignes: "Même principe que La queue du diable mais en équipes. Chaque équipe possède une réserve. Les chasubles attrapées sont déposées dans la réserve de l'équipe. Un joueur sans queue peut récupérer une chasuble dans la réserve adverse pour se refaire une queue.",
    variantes: 'Limiter le nombre de chasubles dans la réserve. Modifier les dimensions du terrain.',
    pointsVigilance: "Laisser jouer - Observer – Questionner. Limiter le temps du jeu. Changer régulièrement les rôles.",
    marqueurs: [
      // Réserve bleue (bas gauche)
      { x: 8, y: 68, type: 'plot' }, { x: 28, y: 68, type: 'plot' },
      { x: 8, y: 92, type: 'plot' }, { x: 28, y: 92, type: 'plot' },
      // Réserve rouge (haut droite)
      { x: 72, y: 8, type: 'plot' }, { x: 92, y: 8, type: 'plot' },
      { x: 72, y: 32, type: 'plot' }, { x: 92, y: 32, type: 'plot' },
      // Joueurs bleus
      { x: 30, y: 35, type: 'attaquant', label: 'B' }, { x: 45, y: 55, type: 'attaquant', label: 'B' },
      { x: 20, y: 55, type: 'attaquant', label: 'B' },
      // Joueurs rouges
      { x: 65, y: 55, type: 'defenseur', label: 'R' }, { x: 55, y: 35, type: 'defenseur', label: 'R' },
      { x: 75, y: 65, type: 'defenseur', label: 'R' },
    ],
    fleches: [
      { x1: 30, y1: 35, x2: 53, y2: 38, cx: 42, cy: 28 },
      { x1: 65, y1: 55, x2: 47, y2: 52, cx: 55, cy: 62 },
    ],
  },
  {
    id: 'u7-47',
    numero: '47',
    titre: 'Le sorcier et le diable',
    categorie: 'jeu_adversaire',
    sousCategorie: "Découvrir l'adversaire",
    effectif: '10 à 12 joueurs',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['Plots'],
    but: "Pour le sorcier : attraper le plus de diables. Pour le diable : se déplacer le plus facilement possible.",
    consignes: "Le sorcier essaie d'attraper le diable en le touchant. Quand il est touché, le diable est transformé en statue. Un autre joueur peut libérer la statue en la touchant. Le sorcier essaie de transformer toutes les statues en même temps.",
    variantes: "Ajouter plusieurs sorciers. Donner un ballon aux joueurs libres. Le sorcier doit toucher le ballon plutôt que le joueur.",
    pointsVigilance: "Laisser jouer - Observer – Questionner. Limiter les temps de jeu à 40 secondes. Changer le sorcier régulièrement.",
    marqueurs: [
      // Sorcier (rouge)
      { x: 50, y: 50, type: 'defenseur', label: 'S' },
      // Diables (bleus) libres
      { x: 20, y: 30, type: 'attaquant' }, { x: 75, y: 25, type: 'attaquant' },
      { x: 80, y: 70, type: 'attaquant' }, { x: 30, y: 75, type: 'attaquant' },
      // Statue figée (bleu clair) — attaquant en position figée
      { x: 60, y: 40, type: 'attaquant', label: '!' },
      // Autre joueur venant libérer
      { x: 45, y: 25, type: 'attaquant' },
    ],
    fleches: [
      { x1: 50, y1: 50, x2: 58, y2: 42, cx: 52, cy: 44 },
      { x1: 45, y1: 25, x2: 59, y2: 38, cx: 50, cy: 30 },
      { x1: 20, y1: 30, x2: 35, y2: 22, cx: 25, cy: 24 },
    ],
  },
  {
    id: 'u7-48',
    numero: '48',
    titre: 'Le ballon au but',
    categorie: 'jeu_partenaires',
    sousCategorie: 'Découvrir les partenaires',
    effectif: '4 × 4',
    surface: '25 m × 15 m',
    duree: '2 × 5 mn',
    materiel: ['5 ballons', 'Jeu de chasubles', '2 piquets', '2 cônes', 'Barres'],
    but: 'Marquer des buts dans la cible centrale commune aux 2 équipes.',
    consignes: "2 équipes s'affrontent avec un but au centre de l'espace de jeu. Possibilité de marquer des buts dans un sens et dans l'autre. À la fin d'un temps de jeu ou d'un nombre de ballons défini par l'éducateur, l'équipe qui gagne est celle qui a le plus de points.",
    variantes: "Mettre 1 seul gardien. Jeu à la main. Couper le terrain en 2 zones avec but entre les 2 zones.",
    pointsVigilance: "Bien compter les points. Encourager et dynamiser. Questionner les enfants. Joueur : L'occupation de l'espace et largeur du but.",
    marqueurs: [
      // But central
      { x: 50, y: 50, type: 'but' },
      // Équipe bleue (gauche)
      { x: 20, y: 25, type: 'attaquant', label: 'B' }, { x: 15, y: 50, type: 'attaquant', label: 'B' },
      { x: 20, y: 75, type: 'attaquant', label: 'B' }, { x: 35, y: 50, type: 'attaquant', label: 'B' },
      // Équipe rouge (droite)
      { x: 80, y: 25, type: 'defenseur', label: 'R' }, { x: 85, y: 50, type: 'defenseur', label: 'R' },
      { x: 80, y: 75, type: 'defenseur', label: 'R' }, { x: 65, y: 50, type: 'defenseur', label: 'R' },
      { x: 35, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 35, y1: 50, x2: 48, y2: 50 },
      { x1: 65, y1: 50, x2: 52, y2: 50 },
    ],
  },
  {
    id: 'u7-49',
    numero: '49',
    titre: 'Le multi buts',
    categorie: 'jeu_partenaires',
    sousCategorie: 'Découvrir les partenaires / Comprendre le sens du jeu',
    effectif: '5 × 5',
    surface: '30 m × 20 m',
    duree: '2 × 5 mn',
    materiel: ['3 ballons', 'Jeu de chasubles', '4 piquets', '2 cônes'],
    but: 'Marquer le plus de buts.',
    consignes: "Chaque équipe attaque les 2 buts adverses et défend ses 2 buts. Pas de gardiens de but. 1 but = 1 point.",
    variantes: "Possibilité d'agrandir ou de rétrécir les buts. Rajouter un gardien dans chaque équipe qui défend ses 2 buts. Obligation de faire un nombre de passes avant de marquer. Rajouter un 3ème but.",
    pointsVigilance: "Laisser jouer - Observer – Questionner. L'occupation de l'espace. Bien compter les points.",
    marqueurs: [
      // 2 buts gauche (équipe bleue)
      { x: 8, y: 25, type: 'but' }, { x: 8, y: 75, type: 'but' },
      // 2 buts droite (équipe rouge)
      { x: 92, y: 25, type: 'but' }, { x: 92, y: 75, type: 'but' },
      // Joueurs bleus
      { x: 25, y: 35, type: 'attaquant', label: 'B' }, { x: 30, y: 60, type: 'attaquant', label: 'B' },
      { x: 42, y: 45, type: 'attaquant', label: 'B' },
      // Joueurs rouges
      { x: 75, y: 35, type: 'defenseur', label: 'R' }, { x: 70, y: 65, type: 'defenseur', label: 'R' },
      { x: 58, y: 55, type: 'defenseur', label: 'R' },
      { x: 50, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 42, y1: 45, x2: 88, y2: 28, cx: 70, cy: 32 },
      { x1: 58, y1: 55, x2: 12, y2: 72, cx: 30, cy: 68 },
    ],
  },
  {
    id: 'u7-50',
    numero: '50',
    titre: 'La balle au capitaine',
    categorie: 'jeu_partenaires',
    sousCategorie: 'Découvrir les partenaires',
    effectif: '5 × 5',
    surface: '25 m × 15 m',
    duree: '2 × 5 mn',
    materiel: ['5 ballons', 'Jeu de chasubles', '6 plots'],
    but: 'Atteindre le joueur capitaine dans la zone. Coopérer pour atteindre le capitaine.',
    consignes: "Balle à la main. On ne peut pas courir avec la balle dans ses mains. On ne peut pas toucher le porteur de balle. Ballon mal maîtrisé = ballon perdu et rendu à l'adversaire. 1 mètre sépare le défenseur du porteur du ballon.",
    variantes: "Les ballons sont joués à hauteur d'épaule. Interdiction de jouer par-dessus la tête. On peut courir avec le ballon si le porteur de balle est touché = perte de balle.",
    pointsVigilance: "Penser à changer les capitaines toutes les 2 min environ. Compter les points et valoriser les réussites. Joueur : L'occupation de l'espace.",
    marqueurs: [
      // Zone capitaine bleue (droite)
      { x: 78, y: 38, type: 'plot' }, { x: 92, y: 38, type: 'plot' },
      { x: 78, y: 62, type: 'plot' }, { x: 92, y: 62, type: 'plot' },
      // Zone capitaine rouge (gauche)
      { x: 8, y: 38, type: 'plot' }, { x: 22, y: 38, type: 'plot' },
      { x: 8, y: 62, type: 'plot' }, { x: 22, y: 62, type: 'plot' },
      // Capitaines
      { x: 85, y: 50, type: 'attaquant', label: 'C' },
      { x: 15, y: 50, type: 'defenseur', label: 'C' },
      // Joueurs bleus
      { x: 40, y: 28, type: 'attaquant', label: 'B' }, { x: 55, y: 50, type: 'attaquant', label: 'B' },
      { x: 40, y: 72, type: 'attaquant', label: 'B' },
      // Joueurs rouges
      { x: 60, y: 32, type: 'defenseur', label: 'R' }, { x: 45, y: 55, type: 'defenseur', label: 'R' },
      { x: 55, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 55, y1: 50, x2: 80, y2: 50, cx: 68, cy: 42 },
    ],
  },
  {
    id: 'u7-51',
    numero: '51',
    titre: '3 contre 3',
    categorie: 'jeu_partenaires',
    sousCategorie: "Découvrir l'adversaire / Découvrir les partenaires",
    effectif: '3 × 3',
    surface: '15 m × 10 m',
    duree: '2 × 5 mn',
    materiel: ['Jeu de chasubles', 'Plots'],
    but: 'Marquer le plus de buts.',
    consignes: "But excentré = 1 pt. But central = 3 pts. Pas de gardien de but.",
    variantes: "Changer la majoration des buts. Pour l'équipe qui prend l'avantage on ferme le but où elle a marqué. À égalité tous les buts redeviennent ouverts. Mettre un gardien volant.",
    pointsVigilance: "Bien compter les points. Encourager et dynamiser. Questionner les enfants. Joueur : L'occupation de l'espace.",
    marqueurs: [
      // 3 buts côté droit (1pt, 3pts, 1pt)
      { x: 92, y: 12, type: 'but' },
      { x: 92, y: 50, type: 'but' },
      { x: 92, y: 88, type: 'but' },
      // 3 buts côté gauche
      { x: 8, y: 12, type: 'but' },
      { x: 8, y: 50, type: 'but' },
      { x: 8, y: 88, type: 'but' },
      // Équipe bleue
      { x: 30, y: 30, type: 'attaquant', label: 'B' },
      { x: 25, y: 55, type: 'attaquant', label: 'B' },
      { x: 35, y: 75, type: 'attaquant', label: 'B' },
      // Équipe rouge
      { x: 70, y: 30, type: 'defenseur', label: 'R' },
      { x: 75, y: 55, type: 'defenseur', label: 'R' },
      { x: 65, y: 75, type: 'defenseur', label: 'R' },
      { x: 50, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 35, y1: 75, x2: 88, y2: 52, cx: 65, cy: 60 },
    ],
  },
  {
    id: 'u7-52',
    numero: '52',
    titre: '3 contre 3 V2',
    categorie: 'jeu_partenaires',
    sousCategorie: "Découvrir l'adversaire / Découvrir les partenaires",
    effectif: '3 × 3',
    surface: '15 m × 10 m',
    duree: '2 × 5 mn',
    materiel: ['Jeu de chasubles', 'Plots'],
    but: 'Marquer le plus de buts.',
    consignes: "But = 1 pt. Pas de gardien de but. Quand le ballon est dans son camp, tous les joueurs de l'équipe qui défend doivent se trouver dans leur camp. Sinon, si but de l'équipe adverse, alors 2 pts au lieu de 1 seul.",
    variantes: undefined,
    pointsVigilance: "Bien compter les points. Encourager et dynamiser. Questionner les enfants. Attaquant : L'occupation de l'espace. Défenseur : Reformer le bloc défensif dans son camp.",
    marqueurs: [
      // But gauche, but droit
      { x: 8, y: 50, type: 'but' },
      { x: 92, y: 50, type: 'but' },
      // Séparation milieu
      { x: 50, y: 8, type: 'plot' }, { x: 50, y: 92, type: 'plot' },
      // Équipe bleue (attaque droite)
      { x: 28, y: 28, type: 'attaquant', label: 'B' },
      { x: 38, y: 55, type: 'attaquant', label: 'B' },
      { x: 25, y: 72, type: 'attaquant', label: 'B' },
      // Équipe rouge (défense côté droit)
      { x: 72, y: 30, type: 'defenseur', label: 'R' },
      { x: 78, y: 55, type: 'defenseur', label: 'R' },
      { x: 68, y: 72, type: 'defenseur', label: 'R' },
      { x: 50, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 38, y1: 55, x2: 52, y2: 52 },
      { x1: 50, y1: 50, x2: 88, y2: 50 },
    ],
  },
  {
    id: 'u7-53',
    numero: '53',
    titre: '3 contre 3 avec portes',
    categorie: 'jeu_partenaires',
    sousCategorie: "Découvrir l'adversaire / Découvrir les partenaires",
    effectif: '3 × 3',
    surface: '15 m × 10 m',
    duree: '2 × 5 mn',
    materiel: ['5 ballons', 'Jeu de chasubles', '10 cônes', 'Plots'],
    but: 'Marquer le plus de buts à travers les portes.',
    consignes: "1 porte passée = 1 pt. Pas de gardien de but.",
    variantes: "On peut passer plusieurs portes d'affilée. On ne peut pas marquer deux fois d'affilée dans la même porte. Identifier des portes de couleurs avec des points différents.",
    pointsVigilance: "Bien compter les points. Encourager et dynamiser. Questionner les enfants. Attaquant : L'occupation de l'espace.",
    marqueurs: [
      // Portes (paires de plots)
      { x: 20, y: 15, type: 'plot' }, { x: 20, y: 35, type: 'plot' },
      { x: 50, y: 8, type: 'plot' }, { x: 50, y: 30, type: 'plot' },
      { x: 80, y: 15, type: 'plot' }, { x: 80, y: 35, type: 'plot' },
      { x: 20, y: 65, type: 'plot' }, { x: 20, y: 85, type: 'plot' },
      { x: 50, y: 70, type: 'plot' }, { x: 50, y: 92, type: 'plot' },
      { x: 80, y: 65, type: 'plot' }, { x: 80, y: 85, type: 'plot' },
      // Équipe bleue
      { x: 30, y: 50, type: 'attaquant', label: 'B' },
      { x: 42, y: 35, type: 'attaquant', label: 'B' },
      { x: 38, y: 65, type: 'attaquant', label: 'B' },
      // Équipe rouge
      { x: 65, y: 45, type: 'defenseur', label: 'R' },
      { x: 58, y: 30, type: 'defenseur', label: 'R' },
      { x: 62, y: 68, type: 'defenseur', label: 'R' },
      { x: 50, y: 50, type: 'ballon' },
    ],
    fleches: [
      { x1: 42, y1: 35, x2: 20, y2: 25, cx: 30, cy: 28 },
      { x1: 38, y1: 65, x2: 20, y2: 75, cx: 28, cy: 72 },
    ],
  },
  {
    id: 'u7-puits',
    numero: '—',
    titre: 'Le puits',
    categorie: 'situation',
    sousCategorie: 'Conserver / Progresser',
    effectif: '5 × 5',
    surface: '20 m × 20 m',
    duree: '10 mn',
    materiel: ['5 ballons', 'Jeu de chasubles', '10 cerceaux', 'Plots'],
    but: 'Porter le ballon dans un cerceau de la bonne couleur pour être sauvé.',
    consignes: "Au départ, chaque joueur d'une des deux équipes (ici rouge) a un ballon. Au top, l'éducateur indique une couleur de cerceau permettant d'être sauvé. Un joueur porteur du ballon doit alors essayer de rejoindre un cerceau de la bonne couleur et d'y arrêter le ballon. Dans ce cas, son équipe marque un point. L'adversaire le presse pour tenter de l'en empêcher.",
    variantes: "Donner un temps maximum pour rejoindre un cerceau. Modifier la taille du terrain pour varier la difficulté.",
    pointsVigilance: "Protection du ballon avec son corps. Encourager la maîtrise du ballon sous la semelle. Conduite de balle près du joueur pour pouvoir changer rapidement de direction si nécessaire. Le ballon doit être arrêté proprement dans le cerceau pour marquer le point.",
    marqueurs: [
      // Cerceaux (représentés par plots) dispersés
      { x: 15, y: 20, type: 'plot' }, { x: 40, y: 15, type: 'plot' },
      { x: 65, y: 25, type: 'plot' }, { x: 85, y: 15, type: 'plot' },
      { x: 20, y: 50, type: 'plot' }, { x: 50, y: 50, type: 'plot' }, { x: 80, y: 50, type: 'plot' },
      { x: 15, y: 80, type: 'plot' }, { x: 45, y: 82, type: 'plot' }, { x: 75, y: 80, type: 'plot' },
      // Joueurs rouges (porteurs de ballon)
      { x: 35, y: 40, type: 'defenseur', label: 'R' }, { x: 60, y: 55, type: 'defenseur', label: 'R' },
      { x: 30, y: 65, type: 'defenseur', label: 'R' },
      // Joueurs bleus (presseurs)
      { x: 42, y: 35, type: 'attaquant', label: 'B' }, { x: 68, y: 48, type: 'attaquant', label: 'B' },
      { x: 38, y: 60, type: 'attaquant', label: 'B' },
      { x: 35, y: 40, type: 'ballon' }, { x: 60, y: 55, type: 'ballon' },
    ],
    fleches: [
      { x1: 35, y1: 40, x2: 18, y2: 22, cx: 22, cy: 30 },
      { x1: 60, y1: 55, x2: 78, y2: 52, cx: 70, cy: 48 },
      { x1: 30, y1: 65, x2: 43, y2: 80, cx: 35, cy: 72 },
    ],
  },
];
