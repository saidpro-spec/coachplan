// CFI U8-U9 — Programmation v2

export type U8U9Phase = 'accueil' | 'attaque' | 'defense' | 'recreatif' | 'collectif_att' | 'collectif_def';

export type MarkerType = 'attaquant' | 'defenseur' | 'ballon' | 'plot' | 'but';

export interface Marqueur {
  x: number;
  y: number;
  type: MarkerType;
  label?: string;
}

export interface Fleche {
  x1: number; y1: number;
  x2: number; y2: number;
  cx?: number; cy?: number;
}

export interface U8U9Exercice {
  id: number;
  titre: string;
  surface?: string;
  objectif?: string;
  consignes: string;
  rotations?: string;
  vigilance?: string;
  variables?: string;
  marqueurs?: Marqueur[];
  fleches?: Fleche[];
}

export interface U8U9Session {
  id: number;
  titre: string;
  phase: U8U9Phase;
  phaseLabel: string;
  categorie: 'U8-U9';
  effectif: string;
  duree: string;
  materiel: string[];
  exercices: U8U9Exercice[];
  messageEducatif?: string;
  vocabulaire?: string;
}

export const U8U9_PHASE_COLORS: Record<U8U9Phase, string> = {
  accueil:       '#998F99',
  attaque:       '#0080C8',
  defense:       '#E3061A',
  recreatif:     '#C09B57',
  collectif_att: '#208B78',
  collectif_def: '#9F4271',
};

export const U8U9_PHASE_LABELS: Record<U8U9Phase, string> = {
  accueil:       "Séance d'accueil",
  attaque:       "J'attaque",
  defense:       'Je défends',
  recreatif:     'Séance récréative',
  collectif_att: "J'attaque collectivement",
  collectif_def: 'Je défends collectivement',
};

export const SESSIONS_U8U9: U8U9Session[] = [
  {
    id: 1,
    titre: `SÉANCE D’ACCUEIL`,
    phase: 'accueil',
    phaseLabel: `SÉANCE D’ACCUEIL`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (5 x 3’). 30’’ de récupération entre les répétitions.`,
        rotations: `Prévoir une rotation sur les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et 
faire monter et descendre sur le nombre x de terrains. Obliger les 
enfants à être dans les zones des 4m pour pouvoir marquer.
Valoriser par 2 points si le but est marqué de la zone des 4m.
Empêcher l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.5, y: 48.5, type: 'ballon' }, { x: 26.1, y: 67.6, type: 'attaquant' }, { x: 41.9, y: 63.3, type: 'attaquant' }, { x: 80.8, y: 66.7, type: 'attaquant' }, { x: 65.1, y: 67.6, type: 'attaquant' }, { x: 26.1, y: 24.9, type: 'defenseur' }, { x: 43.1, y: 22.8, type: 'defenseur' }, { x: 67.2, y: 27.0, type: 'defenseur' }, { x: 80.8, y: 28.2, type: 'defenseur' }, { x: 16.6, y: 18.5, type: 'plot' }, { x: 16.6, y: 8.4, type: 'plot' }, { x: 16.4, y: 87.7, type: 'plot' }, { x: 16.4, y: 77.5, type: 'plot' }, { x: 34.8, y: 36.3, type: 'defenseur' }, { x: 34.8, y: 56.2, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (5 x 3’). 30’’ de récupération entre les répétitions.`,
        rotations: `Prévoir une rotation sur les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et 
faire monter et descendre sur le nombre x de terrains. Obliger les 
enfants à être dans les zones des 4m pour pouvoir marquer.
Valoriser par 2 points si le but est marqué de la zone des 4m.
Empêcher l’accès à la zone des 4m pour les défenseurs.
Terrain 1
Terrain 2
4m
4m
Terrain 1
Terrain 2
4m
4m`,
        marqueurs: [{ x: 53.5, y: 48.5, type: 'ballon' }, { x: 26.1, y: 67.6, type: 'attaquant' }, { x: 41.9, y: 63.3, type: 'attaquant' }, { x: 80.8, y: 66.7, type: 'attaquant' }, { x: 65.1, y: 67.6, type: 'attaquant' }, { x: 26.1, y: 24.9, type: 'defenseur' }, { x: 43.1, y: 22.8, type: 'defenseur' }, { x: 67.2, y: 27.0, type: 'defenseur' }, { x: 80.8, y: 28.2, type: 'defenseur' }, { x: 35.6, y: 32.4, type: 'defenseur' }, { x: 16.6, y: 18.5, type: 'plot' }, { x: 16.6, y: 8.4, type: 'plot' }, { x: 16.4, y: 87.7, type: 'plot' }, { x: 16.4, y: 77.5, type: 'plot' }, { x: 34.4, y: 58.5, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `épervier`,
        surface: `27 x 28`,
        objectif: `Conduire le ballon en évitant l’adversaire.`,
        consignes: `Les oiseaux (bleus) doivent conduire leur ballon sans se le faire 
prendre par l’épervier et l’immobiliser dans l’une des 3 zones.
1 point dans la zone du milieu.
2 points sur les côtés. 
Si le ballon sort des limites du terrain, l’oiseau apporte son ballon 
dans le nid de l’épervier (rectangle blanc). Les éperviers (en jaune) 
lancent le jeu en annonçant « épervier en chasse » puis doivent 
récupérer les ballons des oiseaux pour les déposer dans leur nid. 
Dès que l’épervier a pris le ballon, les oiseaux ne peuvent plus 
le récupérer. Le dernier oiseau encore en jeu remporte 2 points 
supplémentaires. Les oiseaux effectuent 6 passages par manche. 
L’oiseau qui a le plus de points gagne la manche.
Séquence : 15’.`,
        rotations: `On change les éperviers à chaque manche, le vainqueur de la par
tie précédente devient épervier.`,
        vigilance: `Conduite de balle proche du joueur. Toucher de nombreuses fois 
le ballon pour le maîtriser. Essayer d’éviter les éperviers lorsque 
ceux-ci viennent lui prendre le ballon (dribble).`,
        variables: `On rajoute des plots que les oiseaux contournent avant d’aller 
immobiliser le ballon dans une zone.`,
        marqueurs: [{ x: 50.0, y: 95.8, type: 'but' }, { x: 50.0, y: 50.4, type: 'ballon' }, { x: 55.7, y: 33.4, type: 'plot' }, { x: 27.2, y: 27.4, type: 'defenseur' }, { x: 27.2, y: 35.6, type: 'defenseur' }, { x: 27.2, y: 42.2, type: 'defenseur' }, { x: 27.2, y: 48.8, type: 'defenseur' }, { x: 27.2, y: 55.0, type: 'defenseur' }, { x: 27.2, y: 61.3, type: 'defenseur' }, { x: 27.2, y: 67.8, type: 'defenseur' }, { x: 27.2, y: 74.3, type: 'defenseur' }, { x: 43.4, y: 41.6, type: 'plot' }, { x: 50.4, y: 66.8, type: 'plot' }, { x: 50.0, y: 4.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Eveil au jeu collectif.`,
        consignes: `Pratique 5 contre 5.
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.6, y: 47.8, type: 'ballon' }, { x: 62.1, y: 29.8, type: 'attaquant' }, { x: 47.8, y: 68.6, type: 'attaquant' }, { x: 40.7, y: 35.4, type: 'attaquant' }, { x: 35.0, y: 64.4, type: 'defenseur' }, { x: 50.0, y: 22.9, type: 'defenseur' }, { x: 36.0, y: 27.7, type: 'defenseur' }, { x: 55.4, y: 56.0, type: 'defenseur' }, { x: 63.3, y: 59.1, type: 'attaquant' }, { x: 15.7, y: 47.5, type: 'but' }, { x: 82.9, y: 49.0, type: 'but' }],
      },
    ],
  },
  {
    id: 2,
    titre: `J’ATTAQUE EN CONTRÔLANT UN BALLON ET EN LE CONDUISANT VERS LE BUT POUR MARQUER`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `La première chose à effectuer quand on 
arrive à l’entraînement, c’est de saluer les 
différentes personnes rencontrées et de 
connaitre les différents codes de politesse.`,
    vocabulaire: `La conduite de balle
L’engagement`,
    exercices: [
      {
        id: 1,
        titre: `gagne terrain`,
        surface: `36 x 28`,
        objectif: `Progresser avec le ballon.`,
        consignes: `Le jeu est libre sur l’ensemble du terrain. 
Les règles du jeu sont identiques à celles des rencontres. 
Les lignes des surfaces et celle du milieu de terrain sont matéria
lisées. Le fait de les traverser en conduite de balle fera gagner 1 
point à son équipe. À chaque relance du gardien de but, l’équipe 
adverse doit reculer derrière la ligne médiane. Si avant de traver
ser la ligne, le joueur a effectué un contrôle, alors il remportera 2 
points pour son équipe. 
L’équipe qui marque 1 but, remporte 3 points. 
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, des enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 6.`,
        variables: `Gagner 1 point pour le contrôle et la conduite de balle uniquement 
sur la ligne du milieu de terrain et la ligne de la zone protégée 
de l’équipe adverse. 2 points si avant de passer la ligne, le joueur 
effectue un contrôle.`,
        marqueurs: [{ x: 49.6, y: 48.7, type: 'ballon' }, { x: 64.3, y: 41.8, type: 'attaquant' }, { x: 51.2, y: 20.2, type: 'attaquant' }, { x: 52.4, y: 72.8, type: 'attaquant' }, { x: 27.7, y: 40.9, type: 'defenseur' }, { x: 55.8, y: 24.4, type: 'defenseur' }, { x: 25.9, y: 72.8, type: 'defenseur' }, { x: 35.0, y: 41.6, type: 'plot' }, { x: 56.5, y: 73.5, type: 'defenseur' }, { x: 52.4, y: 52.2, type: 'attaquant' }, { x: 25.3, y: 43.3, type: 'plot' }, { x: 15.7, y: 50.2, type: 'but' }, { x: 83.5, y: 48.7, type: 'but' }],
      },
      {
        id: 2,
        titre: `ballon magique`,
        surface: `27 x 28`,
        objectif: `Attaquer et défendre en 2 contre 2.`,
        consignes: `Les enfants se trouvent au point de corner à droite et à gauche 
de leur but. L’éducateur a 2 ballons dans ses mains. Au signal de 
l’éducateur, 2 joueurs (à droite et à gauche de leur but) de chaque 
équipe rentrent dans le terrain. L’éducateur choisit de faire une 
passe à l’un ou l’autre des joueurs (ballon dosé donné à la main 
dans les pieds du joueur ou devant lui). Le joueur ayant le ballon 
doit aller marquer dans le but adverse en éliminant son adver
saire ou en passant le ballon à son partenaire. Si les adversaires 
récupèrent le ballon, ils tentent de marquer à leur tour. Si le ballon 
est récupéré par le GB, il relance à l’un de ses partenaires. Si le 
ballon sort en touche ou en sortie de but, l’éducateur injecte un 
2ème ballon en criant « Ballon magique ». Les joueurs se disputent 
alors ce ballon. 
À la fin de la séquence, les enfants quittent le terrain par les portes 
latérales et on recommence avec 4 autres. 
Séquence : 15’ - limiter à 45’’ de jeu (1 à 2 ballons) par séquence.`,
        rotations: `Lorsque tous les enfants sont passés 2 fois, on change les joueurs 
gardien de but. Si le nombre de joueurs est supérieur à 10, faire 
doubler certains enfants.`,
        vigilance: `Ne pas donner le ballon toujours à la même équipe
Donner le ballon à un joueur l’ayant eu le moins souvent. 
Modifier l’ordre des passages d’une équipe (= ne pas toujours jouer 
contre les mêmes adversaires).`,
        variables: `L’éducateur change de côté. 
L’éducateur donne le ballon en faisant une passe au pied. 
E
G
G
1 pt`,
        marqueurs: [{ x: 52.6, y: 48.7, type: 'ballon' }, { x: 74.1, y: 83.5, type: 'attaquant' }, { x: 73.4, y: 13.7, type: 'attaquant' }, { x: 71.3, y: 85.1, type: 'attaquant' }, { x: 73.5, y: 9.5, type: 'attaquant' }, { x: 15.1, y: 84.4, type: 'defenseur' }, { x: 11.9, y: 87.3, type: 'defenseur' }, { x: 53.3, y: 82.3, type: 'ballon' }, { x: 28.9, y: 78.1, type: 'plot' }, { x: 31.2, y: 77.7, type: 'plot' }, { x: 47.4, y: 54.8, type: 'plot' }, { x: 70.6, y: 18.7, type: 'attaquant' }, { x: 70.6, y: 6.6, type: 'attaquant' }, { x: 16.7, y: 90.5, type: 'defenseur' }, { x: 16.7, y: 78.4, type: 'defenseur' }, { x: 43.0, y: 61.1, type: 'plot' }, { x: 18.3, y: 48.7, type: 'ballon' }, { x: 68.8, y: 48.7, type: 'ballon' }, { x: 16.7, y: 19.0, type: 'defenseur' }, { x: 16.7, y: 6.9, type: 'defenseur' }, { x: 70.3, y: 90.5, type: 'attaquant' }, { x: 70.3, y: 78.4, type: 'attaquant' }, { x: 26.0, y: 21.2, type: 'plot' }, { x: 60.9, y: 78.1, type: 'plot' }, { x: 15.3, y: 12.6, type: 'defenseur' }, { x: 12.8, y: 16.0, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `relais shoot out`,
        surface: `36 x 28`,
        objectif: `Conduire le ballon.`,
        consignes: `Les enfants réalisent le parcours en conduite de balle le plus rapi
dement possible en commençant par passer à droite du 1er plot. A 
la fin du parcours, ils rentrent dans la zone protégée pour pouvoir 
tirer au but. Le deuxième démarre quand le joueur précédent a 
tiré. 
Petite précision : si le but n’est pas marqué, le joueur suivant 
devra faire le tour du plot (qui se trouve au point de pénalty (8m 
en face du but).
La manche se termine quand tous les joueurs ont effectué un 
passage. L’équipe qui termine la 1ère remporte la manche. Le slalom 
doit être effectué correctement, si ce n’est pas le cas, l’enfant doit 
recommencer au plot raté. 
Séquence : 15’`,
        rotations: `Il est nécessaire d’avoir le même nombre de joueurs par équipe. Si 
ce n’est pas le cas, un joueur effectuera 2 passages.
À chaque manche, les gardiens de but changent et l’ordre des 
enfants également.`,
        vigilance: `Faire respecter les règles.
Conduite de balle proche du joueur.
Toucher de nombreuses fois le ballon pour le maîtriser.`,
        variables: `Diminuer ou agrandir l’espace entre les cônes.
Rajouter un cône supplémentaire.
Pas de pénalité de contournement, si le tir est cadré.`,
        marqueurs: [{ x: 51.1, y: 48.8, type: 'ballon' }, { x: 53.8, y: 37.2, type: 'attaquant' }, { x: 58.2, y: 36.5, type: 'attaquant' }, { x: 60.6, y: 36.1, type: 'attaquant' }, { x: 39.7, y: 64.4, type: 'defenseur' }, { x: 37.0, y: 64.5, type: 'defenseur' }, { x: 47.4, y: 64.1, type: 'defenseur' }, { x: 43.1, y: 64.1, type: 'defenseur' }, { x: 63.1, y: 36.5, type: 'attaquant' }, { x: 56.2, y: 65.8, type: 'plot' }, { x: 51.3, y: 42.4, type: 'attaquant' }, { x: 51.3, y: 30.0, type: 'attaquant' }, { x: 51.0, y: 69.9, type: 'defenseur' }, { x: 51.0, y: 57.5, type: 'defenseur' }, { x: 37.0, y: 29.0, type: 'plot' }, { x: 41.2, y: 29.0, type: 'plot' }, { x: 61.1, y: 68.0, type: 'plot' }, { x: 65.2, y: 68.0, type: 'plot' }, { x: 44.9, y: 34.5, type: 'plot' }, { x: 32.7, y: 56.2, type: 'plot' }, { x: 69.4, y: 41.1, type: 'plot' }, { x: 16.9, y: 48.5, type: 'but' }, { x: 85.3, y: 48.8, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Eveil au jeu collectif.`,
        consignes: `Pratique 5 contre 5. Faire jouer de manière libre les enfants en 
insistant sur le respect des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but. Si vous avez plus de 10 
joueurs, les enfants sont remplaçants et intègrent la rotation.`,
        vigilance: `Après un but, les équipes se positionnent dans leur camp respectif 
et l’engagement se fait au centre du terrain.
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.6, y: 47.5, type: 'ballon' }, { x: 62.1, y: 29.4, type: 'attaquant' }, { x: 47.8, y: 68.2, type: 'attaquant' }, { x: 40.7, y: 35.0, type: 'attaquant' }, { x: 35.0, y: 64.0, type: 'defenseur' }, { x: 50.0, y: 22.5, type: 'defenseur' }, { x: 36.0, y: 27.3, type: 'defenseur' }, { x: 55.4, y: 55.6, type: 'defenseur' }, { x: 63.3, y: 58.8, type: 'attaquant' }, { x: 15.7, y: 47.1, type: 'but' }, { x: 82.9, y: 48.6, type: 'but' }],
      },
    ],
  },
  {
    id: 3,
    titre: `J’ATTAQUE EN CONTRÔLANT UN BALLON ET EN LE CONDUISANT VERS LE BUT POUR MARQUER`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Quand on fait du sport, il est très important 
de s’hydrater et donc d’utiliser une gourde 
d’eau individuelle. L’éducateur prévoit des 
pauses hydratation.`,
    vocabulaire: `La passe
La ligne de touche
La touche
Le but`,
    exercices: [
      {
        id: 1,
        titre: `match 2 contre 2 avec 4 buts`,
        surface: `17 x 28`,
        objectif: `Match 2 contre 2 avec 4 buts.`,
        consignes: `Jeu libre. Chaque équipe a 2 buts à attaquer et à défendre. Il n’y 
a pas de gardien de but. On ne peut marquer que dans la zone de 
8m (au-delà de la ligne bleue ou rouge, dans le camp adverse). À 
chaque relance ou but, l’équipe adverse recule derrière la ligne 
médiane (relance protégée).
Séquence : 15’ (6 x 1’30’’). Récupération de 30’’ entre les répéti
tions.`,
        rotations: `Faire des équipes de 5 joueurs et faire des rotations avec le joueur 
en attente au bout de 1min30. 
Si vous avez plus de 5 joueurs par équipe, faire une rotation avec 
les x joueurs.`,
        vigilance: `Faire respecter les règles.
Féliciter les enfants sur les buts marqués et les échanges réussis.
Modifier les binômes si la différence de buts entre les 2 équipes 
est supérieure à 3.`,
        variables: `Franchir la ligne pointillée en conduite de balle = 1 point.
Franchir la ligne pointillée et notre équipe marque un but = 3 
points. Possibilité d’intervenir après la 1ère passe. Supprimer la 
règle de la zone protégée.`,
        marqueurs: [{ x: 50.0, y: 45.7, type: 'ballon' }, { x: 35.7, y: 30.6, type: 'attaquant' }, { x: 43.9, y: 48.8, type: 'attaquant' }, { x: 77.3, y: 63.9, type: 'attaquant' }, { x: 78.0, y: 22.1, type: 'attaquant' }, { x: 22.6, y: 22.1, type: 'defenseur' }, { x: 34.5, y: 65.8, type: 'defenseur' }, { x: 63.5, y: 25.3, type: 'defenseur' }, { x: 65.3, y: 67.6, type: 'defenseur' }, { x: 39.5, y: 90.8, type: 'defenseur' }, { x: 60.5, y: 91.3, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `béret`,
        surface: `36 x 28`,
        objectif: `Attaquer et défendre en 1 contre 1.`,
        consignes: `L’éducateur donne un numéro à chacun des joueurs qui sont sur 
la ligne de touche. À l’appel de son numéro, le joueur se saisit le 
plus rapidement possible du ballon qui se trouve dans le cerceau 
et conduit le ballon vers le but adversaire pour tirer au but. Le tir 
n’est possible qu’après avoir franchi la ligne (8m). Un ballon est 
repositionné dans le cerceau et on enchaîne avec un 2ème numéro. 
1 point est donné à l’équipe qui a franchi la 1ère la ligne. 
1 point supplémentaire est donné quand le but est marqué. 
12 ballons joués par manche. L’équipe qui a le plus de points rem
porte la manche.
Séquence : 15’.`,
        rotations: `Dans le cas d’un nombre impair de joueurs, 2 numéros sont donnés 
au même joueur mais ses 2 numéros ne seront pas appelés l’un 
après l’autre. Changer les positions des 4 joueurs et le gardien de 
but. Changer de camp à chaque manche.`,
        vigilance: `Bien conduire son ballon pour se rapprocher du but le plus vite 
possible et pour tirer. Gérer la première touche de balle pour sortir 
le ballon du cerceau et aller vers l’avant. Le tir s’effectue après la 
ligne pointillée. Prévoir une réserve de ballons à proximité des cer
ceaux. Donner les mêmes numéros à des joueurs de même niveau.`,
        variables: `Appeler 2 numéros en même temps. Installer des planches à 
rebond pour effectuer une passe puis un contrôle pour enchaîner 
avec la conduite de balle jusqu’à la zone pour tirer. Rajouter un 
obstacle (cône) à contourner obligatoirement.
G
G
1
3
4
2
1
4
2
3
5m
5m`,
        marqueurs: [{ x: 50.8, y: 48.1, type: 'ballon' }, { x: 84.8, y: 48.2, type: 'but' }, { x: 16.9, y: 47.8, type: 'but' }, { x: 44.7, y: 4.0, type: 'attaquant' }, { x: 47.8, y: 4.0, type: 'attaquant' }, { x: 52.1, y: 3.7, type: 'attaquant' }, { x: 55.2, y: 4.3, type: 'attaquant' }, { x: 42.7, y: 92.3, type: 'defenseur' }, { x: 46.6, y: 92.5, type: 'defenseur' }, { x: 52.6, y: 92.8, type: 'defenseur' }, { x: 56.5, y: 92.3, type: 'defenseur' }, { x: 51.7, y: 26.4, type: 'plot' }, { x: 51.2, y: 67.5, type: 'plot' }, { x: 33.4, y: 36.0, type: 'plot' }, { x: 63.0, y: 8.8, type: 'plot' }, { x: 63.0, y: 29.9, type: 'plot' }, { x: 63.0, y: 66.7, type: 'plot' }, { x: 63.0, y: 87.7, type: 'plot' }, { x: 61.8, y: 93.5, type: 'ballon' }],
      },
      {
        id: 3,
        titre: `déménageurs`,
        surface: `36 x 28`,
        objectif: `Progresser en « passe-conduite ».`,
        consignes: `Le déménagement consiste à transporter les ballons de sa maison 
vers la maison de l’équipe adverse. Le transport s’effectue par une 
passe puis ensuite une conduite de balle pour immobiliser le ballon 
dans la maison de l’équipe adverse. Ex : le joueur A rouge prend un 
ballon dans la maison rouge, conduit pour passer la ligne puis fait une 
passe au joueur B rouge qui se trouve dans la porte rouge, ensuite 
celui-ci contrôle et conduit le ballon jusqu’à la maison bleue dans 
laquelle il immobilise le ballon avec le pied. Le ballon suivant ne part 
qu’après le retour du joueur précédent à la porte rouge. La manche 
se termine à la fin du temps imparti. L’équipe qui gagne la manche 
est l’équipe qui a le moins de ballons dans sa maison. Les ballons à 
l’extérieur des maisons ne sont pas comptabilisés.
Séquence : 15’ (6 x 1’30’’). Récupération de 30’’ entre les répétitions.`,
        rotations: `Il est nécessaire d’avoir le même nombre de joueurs par équipe. 
Si ce n’est pas le cas, mettre en place une rotation des joueurs. 
À chaque manche, les déménageurs qui effectuent les passes 
prennent la place de ceux qui contrôlent et conduisent le ballon et 
vice-versa (ne garder que 2 joueurs dans sa propre maison).
Le joueur en attente compte le nombre de ballons avec l’éducateur.`,
        vigilance: `Les enfants touchent un maximum de fois le ballon dans leur 
conduite et regardent devant eux. Faire respecter les espaces de 
jeu pour pratiquer en toute sécurité. Avoir le même nombre de 
ballons dans chaque maison au départ du jeu.`,
        variables: `Modifier la position des joueurs pour que le contrôle se fasse de 
l’autre côté. Rajouter des obstacles à éviter.
MAISON
ROUGE
MAISON
BLEUE
A
B`,
        marqueurs: [{ x: 49.6, y: 49.9, type: 'ballon' }, { x: 76.3, y: 37.4, type: 'attaquant' }, { x: 49.9, y: 4.5, type: 'attaquant' }, { x: 48.4, y: 86.7, type: 'defenseur' }, { x: 23.3, y: 75.5, type: 'defenseur' }, { x: 24.6, y: 64.7, type: 'defenseur' }, { x: 48.8, y: 95.2, type: 'defenseur' }, { x: 46.2, y: 86.2, type: 'plot' }, { x: 63.8, y: 72.6, type: 'plot' }, { x: 54.1, y: 14.4, type: 'plot' }, { x: 34.3, y: 22.5, type: 'plot' }, { x: 41.5, y: 95.8, type: 'defenseur' }, { x: 57.1, y: 3.6, type: 'attaquant' }, { x: 54.9, y: 6.7, type: 'attaquant' }, { x: 44.6, y: 6.7, type: 'attaquant' }, { x: 44.4, y: 92.5, type: 'defenseur' }, { x: 54.6, y: 92.4, type: 'defenseur' }, { x: 75.6, y: 25.5, type: 'attaquant' }, { x: 51.7, y: 13.3, type: 'attaquant' }, { x: 63.8, y: 4.2, type: 'attaquant' }, { x: 35.5, y: 97.5, type: 'defenseur' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Eveil au jeu collectif.`,
        consignes: `Pratique 5 contre 5.
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les cor
ners et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but. Si vous avez plus de 10 
joueurs, les enfants sont remplaçants et intègrent la rotation.`,
        vigilance: `Insister sur les rentrées de touche. Possible de rentrer en conduite 
de balle ou en passe. 
Faire respecter les lois du jeu.
Faire jouer tous les enfants le même temps de jeu. 
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.9, y: 50.2, type: 'ballon' }, { x: 49.9, y: 17.1, type: 'attaquant' }, { x: 48.1, y: 71.0, type: 'attaquant' }, { x: 46.5, y: 39.5, type: 'attaquant' }, { x: 34.3, y: 57.3, type: 'defenseur' }, { x: 62.9, y: 13.9, type: 'defenseur' }, { x: 40.1, y: 7.5, type: 'defenseur' }, { x: 61.3, y: 66.4, type: 'defenseur' }, { x: 63.8, y: 47.2, type: 'attaquant' }, { x: 60.5, y: 13.9, type: 'plot' }, { x: 46.2, y: 21.1, type: 'plot' }, { x: 16.1, y: 49.7, type: 'but' }, { x: 83.7, y: 52.0, type: 'but' }],
      },
    ],
  },
  {
    id: 4,
    titre: `J’ATTAQUE AVEC MON PARTENAIRE`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Comme à l’école, au club, il faut avoir son 
matériel, il faut préparer son sac avec les 
bonnes choses à l’intérieur, adaptées aux 
conditions météorologiques. L’éducateur 
rappelle la tenue souhaitée pour 
l’entraînement et le port obligatoire des 
protége-tibias.`,
    vocabulaire: `Le joueur en appui
Le corner
Le but
E`,
    exercices: [
      {
        id: 1,
        titre: `funino capitaine`,
        surface: `36 x 28`,
        objectif: `Recherche d’un appui en jouant en 3 contre 3 dans la zone centrale.`,
        consignes: `2 capitaines de chaque équipe se positionnent dans la zone de la 
relance protégée adverse. Les défenseurs ne peuvent pas interve
nir dans celles-ci, de ce fait les capitaines sont inattaquables. La 
règle du jeu (touche) est identique à celles des rencontres dans 
la zone centrale. C’est l’éducateur qui donnera un nouveau ballon 
quand celui-ci sera sorti au niveau de la zone protégée. 
Le but du jeu est de trouver un capitaine qui doit ensuite marquer 
dans l’un des 2 buts, sans sortir de la zone de jeu. L’engagement se 
fera après chaque but au milieu du terrain. 
L’équipe qui gagne le jeu est l’équipe qui a marqué le plus de buts. 
Séquence : 15’ (5 x 2’30’’).`,
        rotations: `Rotation des joueurs, y compris les capitaines après chaque mi
nute. Si vous avez plus de 10 joueurs, les enfants sont en attente 
et intègrent la rotation. Créer des binômes d’opposition de niveau 
homogène dans la zone centrale.`,
        vigilance: `Faire respecter les règles du jeu. Prévoir une source de ballon à 
proximité de l’éducateur. Se démarquer pour les 2 capitaines. In
citer à progresser avec le ballon si aucun adversaire ne s’oppose à 
la progression. Qualité de la prise de balle pour marquer vite dans 
l’un des 2 buts.`,
        variables: `1 défenseur peut rentrer dans la zone protégée pour empêcher le but.`,
        marqueurs: [{ x: 50.1, y: 53.0, type: 'ballon' }, { x: 53.1, y: 36.3, type: 'attaquant' }, { x: 50.8, y: 66.5, type: 'attaquant' }, { x: 44.7, y: 53.9, type: 'attaquant' }, { x: 72.9, y: 38.3, type: 'attaquant' }, { x: 24.9, y: 53.5, type: 'defenseur' }, { x: 56.7, y: 25.1, type: 'defenseur' }, { x: 25.6, y: 33.3, type: 'defenseur' }, { x: 63.1, y: 33.4, type: 'defenseur' }, { x: 58.7, y: 73.8, type: 'defenseur' }, { x: 71.7, y: 73.4, type: 'attaquant' }, { x: 59.3, y: 69.6, type: 'plot' }, { x: 20.3, y: 65.3, type: 'plot' }, { x: 27.0, y: 55.6, type: 'plot' }, { x: 15.6, y: 72.0, type: 'plot' }, { x: 50.1, y: 11.3, type: 'ballon' }],
      },
      {
        id: 2,
        titre: `rivière`,
        surface: `36 x 28`,
        objectif: `Progresser par une passe en direction d’un appui.`,
        consignes: `On commence la 1ère manche avec l’équipe rouge. Le ballon partira 
du gardien de but rouge. Le but de l’équipe rouge est de faire pas
ser la rivière, au ballon sans que les crocodiles l’interceptent. 
La rivière (3m x 28m) est matérialisée au milieu du terrain, zone 
dans laquelle uniquement les 2 crocodiles peuvent se déplacer. 
Quand le ballon a réussi à passer la rivière, les joueurs contrôlent 
et vont marquer après être rentrés dans la zone de relance proté
gée (8m). Si un crocodile récupère le ballon, il part en conduite de 
balle afin lui aussi de marquer un but. Les défenseurs rouges ne 
peuvent pas intervenir. Les points des 2 équipes sont comptés. 
Ensuite, on inverse les rôles. 10 ballons par manche.
Séquence : 15’.`,
        rotations: `Dans la même manche, prévoir les rotations entre les joueurs qui 
sont en zone défensive et en zone offensive mais aussi avec le 
gardien de but. Prévoir les rotations des crocodiles et du gardien 
de l’équipe qui défend.`,
        vigilance: `Demander aux deux « non porteurs » de se démarquer.
La qualité du contrôle pour le réceptionneur afin de se mettre face 
au jeu et avoir un temps de lecture suffisant. 
La qualité de l’enchaînement vers le but.`,
        variables: `Ajouter un 3ème crocodile. Permettre à un crocodile de sortir de sa 
zone pour défendre (avec du retard). Le crocodile à côté du but 
vient en opposition (face aux attaquants). Mettre 2 crocodiles dans 
la rivière et 1 crocodile dans la zone des rouges.
rivière`,
        marqueurs: [{ x: 49.3, y: 50.3, type: 'ballon' }, { x: 33.8, y: 34.5, type: 'attaquant' }, { x: 32.5, y: 66.9, type: 'attaquant' }, { x: 61.3, y: 32.3, type: 'attaquant' }, { x: 48.6, y: 57.5, type: 'defenseur' }, { x: 49.7, y: 76.2, type: 'defenseur' }, { x: 90.0, y: 27.5, type: 'defenseur' }, { x: 8.4, y: 27.5, type: 'defenseur' }, { x: 60.1, y: 69.0, type: 'attaquant' }, { x: 15.8, y: 50.3, type: 'but' }, { x: 83.3, y: 50.3, type: 'but' }, { x: 30.1, y: 65.3, type: 'plot' }, { x: 57.3, y: 69.3, type: 'plot' }, { x: 94.1, y: 28.0, type: 'defenseur' }, { x: 5.4, y: 28.0, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `les rois de la contre-attaque`,
        surface: `36 x 28`,
        consignes: `Les 2 équipes sont disposées selon l’organisation suivante : un 
gardien + le joueur A dans la zone de la relance protégée (8m) + le 
joueur B dans la zone médiane. L’éducateur a un ballon dans ses 
mains. Au signal de l’éducateur, départ simultané des 2 équipes : 
le gardien donne au joueur A, qui sort de la zone par une conduite 
de balle avant de faire une passe au joueur B qui doit franchir la 
surface de réparation adverse pour réaliser son tir dans le but 
adverse. Dès que les tirs sont effectués, l’éducateur injecte un 2ème  
ballon à l’avantage de l’équipe qui a tiré en 1er en criant «Ballon 
magique». Les joueurs se disputent alors ce ballon et tentent de 
marquer dans le but adverse (2 contre 2). La séquence s’arrête en 
cas de but ou de sortie du ballon.
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (passage de 30’’ maximum par binôme).`,
        rotations: `A la fin de la séquence, on recommence avec 2 autres. 
Changer les gardiens de but toutes les 2 séquences.
Aide pour renvoyer les ballons via parents-ballons`,
        vigilance: `Faire respecter et travailler la relance protégée.
La qualité de la conduite de balle et de la passe.
La réaction des joueurs à la transition : nouvelle situation avec le 
«ballon magique».`,
        variables: `Changer le départ des joueurs (à gauche ou à droite du but).
E
A
A
G
G
B
B`,
        marqueurs: [{ x: 49.9, y: 49.0, type: 'ballon' }, { x: 76.7, y: 4.5, type: 'attaquant' }, { x: 26.0, y: 93.0, type: 'defenseur' }, { x: 54.1, y: 93.0, type: 'defenseur' }, { x: 44.7, y: 4.5, type: 'attaquant' }, { x: 76.6, y: 23.3, type: 'plot' }, { x: 64.7, y: 31.4, type: 'plot' }, { x: 43.1, y: 42.7, type: 'plot' }, { x: 44.4, y: 91.0, type: 'ballon' }, { x: 75.5, y: 19.8, type: 'attaquant' }, { x: 25.4, y: 73.9, type: 'defenseur' }, { x: 82.7, y: 48.6, type: 'but' }, { x: 17.1, y: 47.8, type: 'but' }, { x: 60.1, y: 59.3, type: 'defenseur' }, { x: 41.0, y: 43.8, type: 'attaquant' }, { x: 50.9, y: 90.6, type: 'defenseur' }, { x: 58.5, y: 90.6, type: 'defenseur' }, { x: 21.9, y: 90.6, type: 'defenseur' }, { x: 29.5, y: 90.6, type: 'defenseur' }, { x: 72.9, y: 7.3, type: 'attaquant' }, { x: 80.5, y: 7.3, type: 'attaquant' }, { x: 40.7, y: 7.3, type: 'attaquant' }, { x: 48.3, y: 7.3, type: 'attaquant' }, { x: 28.6, y: 40.9, type: 'plot' }, { x: 15.0, y: 42.9, type: 'plot' }, { x: 24.2, y: 69.7, type: 'plot' }, { x: 37.9, y: 71.0, type: 'plot' }, { x: 58.1, y: 61.0, type: 'plot' }, { x: 72.7, y: 56.1, type: 'plot' }, { x: 84.4, y: 58.1, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Eveil au jeu collectif.`,
        consignes: `Pratique 5 contre 5.
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : 
Touche au pied en conduite de balle ou en passe (interdiction de 
marquer directement sur la passe mais possibilité de tirer et mar
quer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coup-franc, les corners et 
les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont remplaçants et 
intègrent la rotation.`,
        vigilance: `Insister sur les corners. 
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.5, y: 49.8, type: 'ballon' }, { x: 25.2, y: 32.2, type: 'attaquant' }, { x: 25.2, y: 69.5, type: 'attaquant' }, { x: 14.5, y: 8.1, type: 'attaquant' }, { x: 26.5, y: 52.6, type: 'defenseur' }, { x: 23.5, y: 40.6, type: 'defenseur' }, { x: 38.7, y: 41.0, type: 'defenseur' }, { x: 23.4, y: 28.8, type: 'plot' }, { x: 46.1, y: 63.8, type: 'defenseur' }, { x: 42.8, y: 32.2, type: 'attaquant' }, { x: 17.2, y: 49.0, type: 'but' }, { x: 83.9, y: 49.8, type: 'but' }],
      },
    ],
  },
  {
    id: 5,
    titre: `J’ATTAQUE EN CONTRÔLANT UN BALLON ET EN LE CONDUISANT VERS LE BUT POUR MARQUER`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `La première chose à effectuer quand on 
arrive à l’entraînement, c’est de saluer les 
différentes personnes rencontrées et de 
connaitre les différents codes de politesse. 
RAPPEL.`,
    vocabulaire: `Le contrôle
La relance protégée
Le but`,
    exercices: [
      {
        id: 1,
        titre: `match 2 contre 2 avec 4 buts`,
        surface: `17 x 28`,
        objectif: `Match 2 contre 2 et 3 contre 3 avec 4 buts.`,
        consignes: `Jeu libre. Chaque équipe a 2 buts à attaquer et à défendre. Il n’y 
a pas de gardien de but. On ne peut marquer qu’en entrant dans 
la zone de 8m (au-delà de la ligne bleue ou rouge, dans le camp 
adverse). À chaque relance ou but, l’équipe adverse recule derrière 
la ligne médiane (relance protégée).
Séquence : 15’ (5 x 3’).`,
        rotations: `Changer les équipes après 2 séquences.`,
        vigilance: `Faire respecter les règles.
Féliciter les enfants sur les buts marqués et les échanges réussis.
Modifier les binômes si la différence de buts entre les 2 équipes 
est supérieure à 3.`,
        variables: `Franchir la ligne pointillée en conduite de balle = 1 point.
Franchir la ligne pointillée et notre équipe marque un but = 3 
points. Intervention après la 1ère passe. Suppression de la zone 
protégée.`,
        marqueurs: [{ x: 50.0, y: 49.5, type: 'ballon' }, { x: 35.7, y: 34.3, type: 'attaquant' }, { x: 43.9, y: 52.5, type: 'attaquant' }, { x: 77.3, y: 67.6, type: 'attaquant' }, { x: 78.0, y: 25.9, type: 'attaquant' }, { x: 22.6, y: 25.9, type: 'defenseur' }, { x: 34.5, y: 69.5, type: 'defenseur' }, { x: 63.5, y: 29.0, type: 'defenseur' }, { x: 65.3, y: 71.3, type: 'defenseur' }, { x: 22.7, y: 59.0, type: 'defenseur' }, { x: 39.4, y: 81.6, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `béret`,
        surface: `36 x 28`,
        objectif: `Attaquer et défendre en 1 contre 1.`,
        consignes: `L’éducateur donne un numéro à chacun des joueurs qui sont sur 
la ligne de touche. À l’appel de son numéro, le joueur se saisit le 
plus rapidement possible du ballon qui se trouve dans le cerceau 
et conduit le ballon vers le but adversaire pour tirer au but. Le tir 
n’est possible qu’après avoir franchi la ligne (8m). Un ballon est 
repositionné dans le cerceau et on enchaîne avec un 2ème numéro. 
À partir du 2ème numéro, le joueur passé précédemment devient 
défenseur et se positionne dans la porte. Il doit toucher le joueur 
appelé pour l’empêcher de marquer, il peut commencer sa course 
uniquement quand son adversaire touche le ballon. 1 point est 
donné à l’équipe qui a franchi la 1ère la ligne. 1 point supplémen
taire est donné quand le but est marqué. 12 ballons joués par 
manche. L’équipe qui a le plus de points remporte la manche.
Séquence : 15’.`,
        rotations: `Dans le cas d’un nombre impair de joueurs, 2 numéros sont donnés 
au même joueur mais ses 2 numéros ne seront pas appelés l’un 
après l’autre. Attention à l’enchaînement des courses. Changer les 
positions des 4 joueurs et le gardien de but. Changer de camp à 
chaque manche.`,
        vigilance: `Bien conduire son ballon pour se rapprocher du but le plus vite 
possible et pour tirer. Gérer la première touche de balle pour sortir 
le ballon du cerceau et aller vers l’avant. Le tir s’effectue après la 
ligne pointillée. Prévoir une réserve de ballons à proximité des cer
ceaux. Donner les mêmes numéros à des joueurs de même niveau.`,
        variables: `Appeler deux numéros en même temps.
G
G
1
3
4
2
1
4
2
3
5m
5m`,
        marqueurs: [{ x: 50.0, y: 49.1, type: 'ballon' }, { x: 84.0, y: 49.2, type: 'but' }, { x: 16.1, y: 48.8, type: 'but' }, { x: 65.0, y: 4.5, type: 'attaquant' }, { x: 43.9, y: 4.7, type: 'attaquant' }, { x: 49.0, y: 4.5, type: 'attaquant' }, { x: 54.4, y: 5.2, type: 'attaquant' }, { x: 36.7, y: 93.5, type: 'defenseur' }, { x: 45.8, y: 93.5, type: 'defenseur' }, { x: 51.8, y: 93.8, type: 'defenseur' }, { x: 55.7, y: 93.3, type: 'defenseur' }, { x: 51.0, y: 27.4, type: 'plot' }, { x: 50.4, y: 68.5, type: 'plot' }, { x: 32.6, y: 36.9, type: 'plot' }, { x: 41.6, y: 9.4, type: 'plot' }, { x: 41.6, y: 30.4, type: 'plot' }, { x: 41.6, y: 67.2, type: 'plot' }, { x: 41.6, y: 88.3, type: 'plot' }, { x: 61.0, y: 94.5, type: 'ballon' }, { x: 68.6, y: 7.5, type: 'attaquant' }, { x: 61.3, y: 7.3, type: 'attaquant' }, { x: 33.4, y: 90.2, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `déménageurs`,
        surface: `36 x 28`,
        objectif: `Enchainer « contrôle et conduite ».`,
        consignes: `Le déménagement consiste à transporter les ballons de sa maison 
vers la maison de l’équipe adverse. Le transport s’effectue par 
une passe puis ensuite une conduite de balle pour immobiliser le 
ballon dans la maison de l’’équipe adverse. Ex : le joueur A rouge 
prend un ballon dans la maison rouge, conduit pour passer la ligne 
puis fait une passe au joueur B rouge. Celui-ci contrôle le ballon 
et le conduit jusqu’à la maison bleue dans laquelle il immobilise 
le ballon avec le pied. Le ballon suivant ne part qu’après le retour 
du joueur à la porte précédente. La manche se termine à la fin du 
temps imparti.
L’équipe qui gagne la manche est l’équipe qui a le moins de ballons 
dans sa maison. Les ballons à l’extérieur des maisons ne sont pas 
comptabilisés. Séquence : 15’ (7 x 2’).`,
        rotations: `Il est nécessaire d’avoir le même nombre de joueurs par équipe. 
Si ce n’est pas le cas, mettre en place une rotation des joueurs. 
À chaque manche, les déménageurs qui effectuent les passes 
prennent la place de ceux qui contrôlent et conduisent le ballon 
et vice-versa (ne garder que 2 joueurs dans sa propre maison). Le 
joueur en attente compte le nombre de ballons avec l’éducateur.`,
        vigilance: `Les enfants touchent un maximum de fois le ballon dans leur conduite 
et regardent devant eux. Les enfants effectuent un contrôle qui leur 
permet d’aller vite vers la maison de l’équipe adverse. Faire respecter 
les espaces de jeu pour pratiquer en toute sécurité. Avoir le même 
nombre de ballons dans chaque maison au départ du jeu.`,
        variables: `Demander un contrôle vers la droite ou vers la gauche.
Rajouter des obstacles à éviter.`,
        marqueurs: [{ x: 50.0, y: 49.1, type: 'ballon' }, { x: 76.7, y: 36.6, type: 'attaquant' }, { x: 47.8, y: 95.0, type: 'attaquant' }, { x: 47.8, y: 4.4, type: 'defenseur' }, { x: 23.5, y: 64.6, type: 'defenseur' }, { x: 23.7, y: 55.3, type: 'defenseur' }, { x: 50.7, y: 27.2, type: 'defenseur' }, { x: 48.3, y: 30.4, type: 'plot' }, { x: 30.8, y: 83.5, type: 'plot' }, { x: 67.1, y: 17.8, type: 'plot' }, { x: 51.6, y: 4.0, type: 'defenseur' }, { x: 51.6, y: 94.8, type: 'attaquant' }, { x: 55.3, y: 5.9, type: 'defenseur' }, { x: 45.0, y: 5.9, type: 'defenseur' }, { x: 44.8, y: 91.7, type: 'attaquant' }, { x: 55.0, y: 91.6, type: 'attaquant' }, { x: 73.0, y: 32.3, type: 'attaquant' }, { x: 51.3, y: 76.8, type: 'attaquant' }, { x: 64.2, y: 3.3, type: 'attaquant' }, { x: 35.9, y: 96.7, type: 'defenseur' }, { x: 53.6, y: 73.3, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but Si vous avez plus de 10 
joueurs, les enfants sont remplaçants et intègrent la rotation.`,
        vigilance: `Insister sur la relance protégée, sur le fait qu’aucun joueur ne peut 
être dans la zone protégée. Dès que le ballon a été donné, la zone 
protégée disparaît et les joueurs de l’équipe adverse peuvent y 
rentrer. 
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu. 
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.5, y: 48.4, type: 'ballon' }, { x: 51.8, y: 35.0, type: 'attaquant' }, { x: 43.6, y: 58.2, type: 'attaquant' }, { x: 71.5, y: 68.8, type: 'attaquant' }, { x: 37.7, y: 59.7, type: 'defenseur' }, { x: 60.9, y: 24.4, type: 'defenseur' }, { x: 35.8, y: 23.6, type: 'defenseur' }, { x: 63.4, y: 56.1, type: 'defenseur' }, { x: 74.0, y: 18.5, type: 'attaquant' }, { x: 74.9, y: 22.9, type: 'plot' }, { x: 67.0, y: 20.5, type: 'plot' }, { x: 15.8, y: 48.2, type: 'but' }, { x: 82.5, y: 50.6, type: 'but' }],
      },
    ],
  },
  {
    id: 6,
    titre: `J’ATTAQUE AVEC MON PARTENAIRE`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Quand on fait du sport, il est très important 
de s’hydrater et donc d’utiliser une gourde 
d’eau individuelle. L’éducateur prévoit des 
pauses hydratation.`,
    vocabulaire: `Le joueur en appui
Le joueur en soutien
Le coup franc
La faute
Le but`,
    exercices: [
      {
        id: 1,
        titre: `balle au capitaine`,
        surface: `36 x 28`,
        objectif: `Rechercher un partenaire situé en appui.`,
        consignes: `Un capitaine de chaque équipe se positionne dans la zone de la re
lance protégée adverse. Les défenseurs ne peuvent pas intervenir 
dans celles-ci, de ce fait le capitaine est inattaquable. La règle du 
jeu sur la touche est identique à celles des rencontres. Si le ballon 
est sorti en corner par le gardien à la suite d’un tir, le ballon est 
redonné à son propre gardien.
Le but du jeu est de trouver le capitaine pour marquer 1 point. À 
la suite de la réception du ballon par le capitaine dans la zone pro
tégée, celui-ci s’oppose au gardien de but pour marquer un but. 
Si le but est marqué, l’équipe marque 1 point supplémentaire. 
L’équipe qui gagne le jeu, est l’équipe qui a gagné le plus de 
manches.
 
Séquence : 15’ (5 x 3’).`,
        rotations: `Rotation sur le poste de gardien de but et sur le capitaine à la fin 
de chaque manche. Si vous avez plus de 10 joueurs, les enfants 
sont en attente et intègrent la rotation. Positionner les joueurs de 
même niveau, capitaine pour équilibrer le jeu.`,
        vigilance: `Faire respecter les règles (délimitation des aires de jeu). Se démar
quer pour les 2 capitaines. Inciter à progresser avec le ballon si 
aucun adversaire ne s’oppose à la progression.`,
        variables: `Dès la maîtrise du ballon dans la zone du capitaine, il a 5 secondes 
pour marquer un but. Un seul défenseur peut rentrer dans la zone 
pour récupérer la balle.`,
        marqueurs: [{ x: 50.0, y: 46.0, type: 'ballon' }, { x: 27.9, y: 26.2, type: 'attaquant' }, { x: 47.5, y: 17.0, type: 'attaquant' }, { x: 58.3, y: 34.3, type: 'attaquant' }, { x: 61.4, y: 59.9, type: 'attaquant' }, { x: 39.4, y: 27.4, type: 'defenseur' }, { x: 38.2, y: 57.3, type: 'defenseur' }, { x: 72.0, y: 28.3, type: 'defenseur' }, { x: 57.1, y: 66.3, type: 'defenseur' }, { x: 69.9, y: 30.7, type: 'plot' }, { x: 77.8, y: 36.9, type: 'plot' }, { x: 48.7, y: 91.1, type: 'ballon' }, { x: 83.8, y: 46.9, type: 'but' }, { x: 16.2, y: 47.4, type: 'but' }, { x: 85.1, y: 38.1, type: 'plot' }],
      },
      {
        id: 2,
        titre: `rivière`,
        surface: `36 x 28`,
        objectif: `Passer le ballon à un partenaire situé en appui en évitant les 
adversaires.`,
        consignes: `On commence la 1ère manche avec l’équipe rouge. Le ballon partira 
du gardien de but rouge. Le but de l’équipe rouge est de faire 
passer la rivière, au ballon sans que les crocodiles l’interceptent. 
La rivière (3m x 28m) est matérialisée au milieu du terrain, zone 
dans laquelle uniquement les 2 crocodiles peuvent se déplacer. un 
crocodile bleu est rajouté sur la ligne rouge et sur la ligne bleue, ils 
se déplacent uniquement sur leur ligne. Quand le ballon a franchi 
la rivière, les joueurs contrôlent et vont marquer après être rentrés 
dans la zone de la relance protégée (8m). Si un crocodile récupère 
le ballon, il part en conduite de balle afin lui aussi de marquer un 
but. Les défenseurs rouges ne peuvent pas intervenir. 1 point pour 
chaque passage de la rivière et 1 point par but marqué. 10 ballons 
par manche. Séquence : 15’.`,
        rotations: `Dans la même manche, prévoir les rotations entre les joueurs qui 
sont en zone défensive et en zone offensive mais aussi avec le 
gardien de but. Prévoir aussi les rotations des crocodiles et du 
gardien de l’équipe qui défend. Inversion des rôles après chaque 
manche (attaquant, crocodile).`,
        vigilance: `Demander aux «non porteurs» de se démarquer. La qualité du contrôle 
pour le réceptionneur afin de se mettre face au jeu et avoir un temps 
de lecture suffisant. La qualité de l’enchaînement vers le but.`,
        variables: `Un crocodile de la rivière peut sortir pour défendre (avec du re
tard). Un crocodile de l’une des 2 lignes peut défendre dans la zone 
devant lui uniquement.
rivière`,
        marqueurs: [{ x: 49.3, y: 50.2, type: 'ballon' }, { x: 33.8, y: 34.4, type: 'attaquant' }, { x: 32.5, y: 66.8, type: 'attaquant' }, { x: 61.3, y: 32.2, type: 'attaquant' }, { x: 48.6, y: 57.4, type: 'defenseur' }, { x: 49.7, y: 76.1, type: 'defenseur' }, { x: 60.1, y: 68.9, type: 'attaquant' }, { x: 15.8, y: 50.2, type: 'but' }, { x: 83.3, y: 50.2, type: 'but' }, { x: 30.1, y: 65.2, type: 'plot' }, { x: 57.3, y: 69.2, type: 'plot' }, { x: 30.0, y: 47.1, type: 'defenseur' }, { x: 69.3, y: 47.4, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `les rois de la contre-attaque`,
        surface: `36 x 28`,
        consignes: `Les 2 équipes sont disposées selon l’organisation suivante : un 
gardien + le joueur A dans la zone de la relance protégée (8m) + 
les joueurs B et C dans la zone médiane. L’éducateur a un ballon 
dans ses mains. Au signal de l’éducateur, départ simultané des 2 
équipes : le gardien donne au joueur A, qui sort de la zone par une 
conduite de balle avant de faire une passe au joueur B qui contrôle 
et donne à C, ce dernier doit franchir la ligne de la zone protégée 
adverse pour réaliser son tir dans le but adverse. 
Dès que les tirs sont effectués, l’éducateur injecte un 2ème ballon à 
l’avantage de l’équipe qui a tiré en 1er en criant «Ballon magique». 
Les joueurs se disputent alors ce ballon et tentent de marquer 
dans le but adverse. La séquence s’arrête en cas de but ou de 
sortie du ballon.
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (passage de 30’’ maximum par binôme).`,
        rotations: `Changer les gardiens de but toutes les 2 séquences.
Aide pour renvoyer les ballons via parents-ballons.`,
        vigilance: `Faire respecter et travailler la relance protégée.
La qualité de la conduite de balle et de la passe.
La réaction des joueurs à la transition : nouvelle situation avec le 
«ballon magique».`,
        variables: `Changer le départ des joueurs (à gauche ou à droite du but).
E
A
A
G
G
B
B
C
C
4m`,
        marqueurs: [{ x: 50.6, y: 48.6, type: 'ballon' }, { x: 77.4, y: 4.1, type: 'attaquant' }, { x: 26.7, y: 92.7, type: 'defenseur' }, { x: 77.3, y: 22.9, type: 'plot' }, { x: 65.4, y: 31.0, type: 'plot' }, { x: 43.8, y: 42.3, type: 'plot' }, { x: 45.2, y: 90.6, type: 'ballon' }, { x: 76.2, y: 19.4, type: 'attaquant' }, { x: 26.1, y: 73.5, type: 'defenseur' }, { x: 83.4, y: 48.3, type: 'but' }, { x: 17.8, y: 47.4, type: 'but' }, { x: 60.9, y: 59.0, type: 'defenseur' }, { x: 41.7, y: 43.5, type: 'attaquant' }, { x: 22.6, y: 90.3, type: 'defenseur' }, { x: 30.2, y: 90.3, type: 'defenseur' }, { x: 73.6, y: 6.9, type: 'attaquant' }, { x: 81.2, y: 6.9, type: 'attaquant' }, { x: 29.4, y: 29.9, type: 'plot' }, { x: 16.2, y: 39.1, type: 'plot' }, { x: 24.9, y: 69.3, type: 'plot' }, { x: 38.6, y: 70.6, type: 'plot' }, { x: 58.8, y: 60.6, type: 'plot' }, { x: 71.2, y: 64.4, type: 'plot' }, { x: 85.0, y: 56.4, type: 'plot' }, { x: 52.4, y: 82.1, type: 'defenseur' }, { x: 49.3, y: 17.1, type: 'attaquant' }, { x: 54.0, y: 78.2, type: 'plot' }, { x: 47.8, y: 21.9, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : 
Touche au pied en conduite de balle ou en passe (interdiction 
de marquer directement sur la passe mais possibilité de tirer et 
marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les 
corners et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont remplaçants et 
intègrent la rotation.`,
        vigilance: `Insister sur la mise à distance à 4m des joueurs de l’équipe ad
verse sur les différentes remises en jeu. 
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu. 
Modifier les équipes si l’écart de buts est supérieur à 3.
notes`,
        marqueurs: [{ x: 50.2, y: 48.4, type: 'ballon' }, { x: 33.8, y: 48.4, type: 'attaquant' }, { x: 47.1, y: 69.3, type: 'attaquant' }, { x: 56.7, y: 35.0, type: 'attaquant' }, { x: 59.1, y: 57.6, type: 'defenseur' }, { x: 48.4, y: 16.9, type: 'defenseur' }, { x: 41.2, y: 42.1, type: 'defenseur' }, { x: 44.2, y: 40.8, type: 'plot' }, { x: 52.6, y: 38.4, type: 'plot' }, { x: 16.9, y: 48.2, type: 'but' }, { x: 83.8, y: 48.4, type: 'but' }, { x: 40.7, y: 25.7, type: 'attaquant' }, { x: 63.7, y: 26.9, type: 'defenseur' }],
      },
    ],
  },
  {
    id: 7,
    titre: `SÉANCE RÉCRÉATIVE`,
    phase: 'recreatif',
    phaseLabel: `SÉANCE RÉCRÉATIVE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `2
atelier pef
surface
36 x 28
1 atelier pef à choisir entre les 2 propositions
PROPOSITION N°1
Objectif de l’atelier : concevoir son sac de foot en fonction de la 
météo.
PROPOSITION N°2
Objectif de l’atelier : responsabiliser sur l’économie d’eau par l’in-
termédiaire d’un atelier technique.
Terrain 1
Terrain 2
4m
4m
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre`,
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren-
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (4 x 3’). 30’’ de récupération entre les séquences.`,
        rotations: `Prévoir les rotations pour les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen-
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et faire 
monter et descendre sur le nombre x de terrains. Obliger les en-
fants à être dans les zones des 4m pour pouvoir marquer. Valoriser 
par 2 points si le but est marqué de la zone des 4m. Empêcher 
l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.5, y: 47.4, type: 'ballon' }, { x: 26.1, y: 66.5, type: 'attaquant' }, { x: 41.9, y: 62.2, type: 'attaquant' }, { x: 80.8, y: 65.6, type: 'attaquant' }, { x: 65.1, y: 66.5, type: 'attaquant' }, { x: 26.1, y: 23.8, type: 'defenseur' }, { x: 43.1, y: 21.7, type: 'defenseur' }, { x: 67.2, y: 25.9, type: 'defenseur' }, { x: 80.8, y: 27.1, type: 'defenseur' }, { x: 53.3, y: 29.1, type: 'defenseur' }, { x: 16.6, y: 17.4, type: 'plot' }, { x: 16.6, y: 7.3, type: 'plot' }, { x: 16.4, y: 86.6, type: 'plot' }, { x: 16.4, y: 76.4, type: 'plot' }, { x: 52.7, y: 55.5, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `atelier pef`,
        surface: `36 x 28`,
        consignes: `PROPOSITION N°1
Objectif de l’atelier : concevoir son sac de foot en fonction de la 
météo.
PROPOSITION N°2
Objectif de l’atelier : responsabiliser sur l’économie d’eau par l’in-
termédiaire d’un atelier technique.
Terrain 1
Terrain 2
4m
4m
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre
séance n°
7
phase de jeu
SÉANCE RÉCRÉATIVE
catégorie
U8-U9
effectif
10
durée
75 min
date`,
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
  {
    id: 8,
    titre: `JE FEINTE ET J’ÉLIMINE UN ADVERSAIRE DE FACE`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mon éducateur 
Je lui dis « Bonjour » et « Au revoir » et 
j’écoute et je garde le silence quand il prend 
la parole.`,
    vocabulaire: `La feinte
Le dribble`,
    exercices: [
      {
        id: 1,
        titre: `4 contre 4 mini but`,
        surface: `27 x 28`,
        objectif: `Éliminer un joueur de face.`,
        consignes: `Jeu libre en 4 contre 4. Les règles sont identiques à celles des 
rencontres. Chaque équipe a 2 petits buts à attaquer et à défendre. 
Il n’y a pas de gardien de but. Possibilité de marquer uniquement 
de la zone de la relance protégée (8m).
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (8 x 1’30’’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence.`,
        vigilance: `Faire respecter les règles du jeu. 
Féliciter les enfants lors des feintes, dribbles et passes tentées ou 
réussies. 
Modifier les équipes ou les adversaires directs si la différence 
de buts entre les 2 équipes est supérieure à 3.`,
        variables: `Cloisonner les joueurs lorsque leur équipe n’a pas le ballon mais 
ils peuvent se déplacer et jouer dans une autre zone lorsque leur 
équipe est en possession du ballon.`,
        marqueurs: [{ x: 51.4, y: 45.6, type: 'ballon' }, { x: 32.0, y: 42.6, type: 'attaquant' }, { x: 51.3, y: 25.3, type: 'attaquant' }, { x: 50.9, y: 69.0, type: 'attaquant' }, { x: 63.7, y: 46.6, type: 'attaquant' }, { x: 24.0, y: 22.0, type: 'defenseur' }, { x: 23.7, y: 67.5, type: 'defenseur' }, { x: 61.2, y: 29.8, type: 'defenseur' }, { x: 41.6, y: 51.1, type: 'defenseur' }, { x: 45.3, y: 90.7, type: 'defenseur' }, { x: 58.1, y: 91.2, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `ballon magique`,
        surface: `27 x 28`,
        objectif: `Attaquer et défendre en 1 contre 1 avec gardien de but.`,
        consignes: `Les enfants se trouvent au point de corner à droite de leur but. 
L’éducateur a deux ballons dans ses mains. Au signal de l’éduca
teur, il transmet le ballon au 1er joueur rouge ou bleu (ballon dosé 
donné à la main dans les pieds du joueur ou devant lui).Le joueur 
ayant le ballon doit aller marquer dans le but adverse en élimi
nant son adversaire. Si l’adversaire récupère le ballon, il tente de 
marquer à son tour. À ce moment-là, le joueur qui vient de perdre 
le ballon peut défendre. Si le ballon est récupéré par le GB, relance 
à son partenaire. Si le ballon sort en touche ou en sortie de but, 
l’éducateur injecte un 2ème ballon en criant « Ballon magique ». Les 
joueurs se disputent alors ce ballon. 
À la fin de la séquence, les enfants quittent le terrain par les portes 
latérales et on recommence avec 2 autres. 
Séquence : 15’ (maximum 30’’ à 40’’ par passage).`,
        rotations: `Lorsque tous les enfants sont passés, on change les joueurs 
gardien de but. Si le nombre de joueurs est impair, faire doubler 
certains enfants.`,
        vigilance: `Ne pas donner le ballon toujours à la même équipe. Donner le 
ballon à un joueur l’ayant eu le moins souvent. Modifier l’ordre des 
passages d’une équipe (= ne pas toujours jouer contre les mêmes 
adversaires).`,
        variables: `À l’issue des 2 séries, les joueurs sont positionnés à gauche de leur 
but. 
E
G
G
notes`,
        marqueurs: [{ x: 53.5, y: 48.5, type: 'ballon' }, { x: 77.3, y: 15.4, type: 'attaquant' }, { x: 74.3, y: 13.4, type: 'attaquant' }, { x: 74.5, y: 9.2, type: 'attaquant' }, { x: 16.0, y: 84.2, type: 'defenseur' }, { x: 12.8, y: 87.0, type: 'defenseur' }, { x: 54.2, y: 82.1, type: 'ballon' }, { x: 29.9, y: 77.9, type: 'plot' }, { x: 32.1, y: 77.4, type: 'plot' }, { x: 48.4, y: 54.6, type: 'plot' }, { x: 71.5, y: 18.5, type: 'attaquant' }, { x: 71.5, y: 6.4, type: 'attaquant' }, { x: 17.6, y: 90.2, type: 'defenseur' }, { x: 17.6, y: 78.1, type: 'defenseur' }, { x: 43.9, y: 60.9, type: 'plot' }, { x: 19.2, y: 48.5, type: 'ballon' }, { x: 69.7, y: 48.5, type: 'ballon' }, { x: 77.3, y: 8.5, type: 'attaquant' }, { x: 11.8, y: 81.3, type: 'defenseur' }, { x: 14.3, y: 80.2, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `épervier`,
        surface: `36 x 28`,
        objectif: `Feinter et éliminer un adversaire de face.`,
        consignes: `Les éperviers (en jaune) lancent le jeu en annonçant « épervier en 
chasse » puis doivent toucher ou récupérer les ballons des oiseaux. 
Les oiseaux deviennent éperviers également s’ils sont touchés ou 
ont perdu leur ballon.
Temps 1 : motricité sans ballon (5 min). Les oiseaux doivent se 
déplacer en passant par une porte sans se faire toucher par l’éper
vier (qui doit rester dans sa zone) 
Temps 2 : avec ballon (10 min). Les oiseaux (bleus) doivent 
conduire leur ballon sans se le faire prendre par l’épervier (qui doit 
rester dans sa zone) et marquer dans l’un des 2 buts.
Comptage des points : 1 point par but marqué et 3 points par 
manche gagné.
Séquence : 15’ (6 x 2’).`,
        rotations: `On change les éperviers à chaque manche, le vainqueur de la par
tie précédente devient épervier.`,
        vigilance: `Conduite de balle proche du joueur. Toucher de nombreuses 
fois le ballon pour le maîtriser. Essayer de dribbler les éperviers 
lorsque ceux-ci tentent de prendre le ballon (élimination).`,
        variables: `Mettre le ballon dans les mains des oiseaux pour la motricité. Les 
éperviers peuvent défendre sur tout le terrain. Agrandir ou dimi
nuer la zone des éperviers. Agrandir ou diminuer les portes.`,
        marqueurs: [{ x: 49.9, y: 49.0, type: 'ballon' }, { x: 50.2, y: 29.7, type: 'plot' }, { x: 21.0, y: 13.3, type: 'defenseur' }, { x: 21.0, y: 22.7, type: 'defenseur' }, { x: 21.0, y: 33.2, type: 'defenseur' }, { x: 21.0, y: 43.2, type: 'defenseur' }, { x: 21.0, y: 53.4, type: 'defenseur' }, { x: 21.0, y: 61.4, type: 'defenseur' }, { x: 21.0, y: 71.8, type: 'defenseur' }, { x: 21.0, y: 82.7, type: 'defenseur' }, { x: 50.2, y: 60.5, type: 'plot' }, { x: 50.0, y: 21.4, type: 'attaquant' }, { x: 50.0, y: 9.3, type: 'attaquant' }, { x: 50.2, y: 45.9, type: 'attaquant' }, { x: 50.2, y: 33.9, type: 'attaquant' }, { x: 49.9, y: 64.4, type: 'defenseur' }, { x: 49.9, y: 52.3, type: 'defenseur' }, { x: 50.1, y: 89.0, type: 'defenseur' }, { x: 50.1, y: 76.9, type: 'defenseur' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.2, y: 48.8, type: 'ballon' }, { x: 61.7, y: 30.8, type: 'attaquant' }, { x: 47.5, y: 69.5, type: 'attaquant' }, { x: 40.3, y: 36.3, type: 'attaquant' }, { x: 34.7, y: 65.3, type: 'defenseur' }, { x: 49.7, y: 23.9, type: 'defenseur' }, { x: 35.7, y: 28.7, type: 'defenseur' }, { x: 55.1, y: 56.9, type: 'defenseur' }, { x: 63.0, y: 60.1, type: 'attaquant' }, { x: 82.8, y: 48.5, type: 'but' }, { x: 15.7, y: 49.7, type: 'but' }],
      },
    ],
  },
  {
    id: 9,
    titre: `JE JOUE AVEC MON PARTENAIRE QUI EST À CÔTÉ DE MOI ET JE ME DÉPLACE POUR RECEVOIR LE BALLON.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE COLLECTIVEMENT`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mon éducateur. 
Je peux l’interpeller à la fin de sa communi
cation en levant la main si j’ai une question 
et j’accepte ses décisions.`,
    vocabulaire: `J’aide mon partenaire
Je me démarque`,
    exercices: [
      {
        id: 1,
        titre: `3 contre 3 avec 2 soutiens`,
        surface: `36 x 28`,
        objectif: `Passer dans l’une des 2 portes (matérialisées par les cônes) en 
conduite de balle pour marquer.`,
        consignes: `Jeu libre. Les 2 joueurs en situation de soutien sont inattaquables : 
on peut leur transmettre le ballon et celui qui a contrôlé peut alors 
participer au jeu. Le joueur qui lui a transmis le ballon prend sa 
place.
Comptage des points : 1 point lorsque la porte est franchie en 
conduite de balle.
Séquence : 15’’ (5 x 3’).`,
        rotations: `Si les joueurs en soutien ne sont pas trop utilisés, effectuer des 
rotations.`,
        vigilance: `Faire respecter les règles (délimitation des aires de jeu).
Occuper tout l’espace du terrain (lorsqu’on attaque surtout)
Inciter à progresser avec le ballon si aucun adversaire ne s’oppose 
à la progression.`,
        variables: `Après avoir franchi la porte, finir l’action en tirant au but (rajouter 
un GB)
Lorsqu’on trouve le soutien, celui-ci peut rentrer et ainsi jouer à 4 
contre 3 (à la fin de l’action, on recommence à 3 contre 3).`,
        marqueurs: [{ x: 49.9, y: 49.0, type: 'ballon' }, { x: 21.8, y: 41.9, type: 'attaquant' }, { x: 51.1, y: 37.7, type: 'attaquant' }, { x: 22.4, y: 60.8, type: 'attaquant' }, { x: 45.3, y: 20.5, type: 'attaquant' }, { x: 76.8, y: 35.6, type: 'defenseur' }, { x: 76.8, y: 60.8, type: 'defenseur' }, { x: 57.4, y: 22.6, type: 'defenseur' }, { x: 58.7, y: 49.0, type: 'defenseur' }, { x: 48.1, y: 62.4, type: 'attaquant' }, { x: 52.0, y: 85.9, type: 'defenseur' }],
      },
      {
        id: 2,
        titre: `2 contre 1 sur les côtés`,
        surface: `36 x 28`,
        objectif: `Aider son partenaire.`,
        consignes: `2 contre 2 en zone axiale. 1 contre 1 dans les zones latérales (pas 
de marquage individuel, chacun restant dans sa moitié de terrain)
Lorsqu’on transmet le ballon dans un couloir, un partenaire peut 
venir l’aider, un 2 contre 1 se joue dans cet espace.
Le GB peut relancer directement dans une des 2 zones latérales.
Comptage des points : 
But = 1 point.
But en étant passé par une zone latérale = 2 points.
Séquence : 15’’ (3 x 5’).`,
        rotations: `Changer régulièrement les positions des joueurs (à chaque sé
quence). Faire tourner les gardiens de but.`,
        vigilance: `Aider le partenaire dans la zone. 
Tenter de déséquilibrer à 2 contre 1.`,
        variables: `Varier les positions des joueurs dans les couloirs.
2 joueurs en zone offensive (rechercher les passes vers l’avant).
Agrandir ou diminuer les zones latérales.
G
G
notes`,
        marqueurs: [{ x: 50.0, y: 48.4, type: 'ballon' }, { x: 40.2, y: 21.6, type: 'attaquant' }, { x: 35.3, y: 57.4, type: 'attaquant' }, { x: 58.8, y: 39.1, type: 'attaquant' }, { x: 42.8, y: 55.4, type: 'defenseur' }, { x: 57.5, y: 84.7, type: 'defenseur' }, { x: 63.0, y: 37.0, type: 'defenseur' }, { x: 41.5, y: 84.7, type: 'attaquant' }, { x: 16.5, y: 48.4, type: 'but' }, { x: 84.1, y: 48.4, type: 'but' }, { x: 32.6, y: 56.5, type: 'plot' }, { x: 40.2, y: 81.2, type: 'plot' }, { x: 60.1, y: 17.4, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `jeu du 1 contre 1`,
        surface: `27 x 28`,
        objectif: `Marquer le but en 1 contre 1 ou 2 contre 1.`,
        consignes: `Le GB transmet à A1, qui conduit et transmet à B1 qui doit aller 
marquer. Lorsque B1 a contrôlé son ballon, le défenseur rouge 
peut défendre. A1, après avoir donné son ballon, peut aider son 
partenaire en se déplaçant dans la partie de terrain opposé. Si le 
défenseur récupère le ballon, il peut aller marquer à son tour. Dans 
ce cas, uniquement le joueur le plus proche peut défendre. Lorsque 
l’action est terminée, on fait de même avec l’équipe rouge.
Comptage des points : 
Si but marqué en 1 contre 1 = 1 point.
Si but marqué avec une passe à son partenaire = 2 points.
Séquence : 15’’ (3 x 5’).`,
        rotations: `À la fin de l’action : A1 et A2 alternent entre eux - B1 et B2 al
ternent entre eux. Idem pour les rouges. Au bout de 4 passages, 
on change les rôles. Prévoir également une rotation avec les 
gardiens`,
        vigilance: `Faire respecter les règles; Insister sur la qualité du déplacement 
de A1 pour aider son partenaire = donner et enchaîner. La qualité 
du contrôle pour le réceptionneur afin de se mettre face au jeu 
et avoir un temps de lecture suffisant (s’orienter vers le but). La 
qualité de l’enchaînement vers le but. Laisser le joueur B libre dans 
ses choix (dribble ou jeu à 2).`,
        variables: `Le joueur C (rouge à l’opposé) peut venir défendre si le joueur 
B1 fait une passe à A1. À la récupération du ballon par le joueur 
rouge, le joueur C (rouge) peut entrer en jeu pour attaquer. Le 
joueur rouge ne peut défendre que quand B1 sort de sa zone.`,
        marqueurs: [{ x: 52.4, y: 47.9, type: 'ballon' }, { x: 37.0, y: 12.8, type: 'attaquant' }, { x: 46.3, y: 14.9, type: 'attaquant' }, { x: 76.1, y: 63.4, type: 'attaquant' }, { x: 30.3, y: 54.8, type: 'defenseur' }, { x: 43.1, y: 85.1, type: 'defenseur' }, { x: 59.8, y: 65.4, type: 'attaquant' }, { x: 18.8, y: 47.9, type: 'ballon' }, { x: 69.9, y: 47.9, type: 'ballon' }, { x: 27.8, y: 53.3, type: 'plot' }, { x: 41.2, y: 81.0, type: 'plot' }, { x: 17.9, y: 8.9, type: 'defenseur' }, { x: 45.1, y: 92.7, type: 'defenseur' }, { x: 51.0, y: 83.9, type: 'plot' }, { x: 46.8, y: 41.4, type: 'plot' }, { x: 49.6, y: 74.1, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 10,
    titre: `JE ME RECONNAIS DÉFENSEUR ET JE REVIENS DANS MON CAMP EN CHASSANT L’ADVERSAIRE.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes partenaires. 
Je les salue en arrivant à l’entraînement 
ou au match et je ne prononce pas de mots 
grossiers à leur égard.`,
    vocabulaire: `Je chasse le porteur de balle.
Je suis acteur à la perte du ballon.`,
    exercices: [
      {
        id: 1,
        titre: `match 3 contre 3`,
        surface: `27 x 28`,
        objectif: `Se reconnaitre défenseur et revenir dans son propre camp.`,
        consignes: `Jeu libre en 3 contre 3. Chaque équipe a 3 petits buts à attaquer 
et à défendre. Autoriser le tir uniquement de la zone de la relance 
protégée. 
Comptage des points : 1 point par but marqué, doublé si un joueur 
adverse n’est pas revenu dans son camp au moment du but.
Séquence : 15’ (5 x 3’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et 
rentrés en jeu). Féliciter les enfants lors des récupérations effec
tuées, des courses de cadrage en avançant sur le porteur de balle 
adverse et des courses de retour dans leur zone concernée à la 
perte du ballon. Modifier les équipes ou les adversaires directs 
si la différence de buts entre les 2 équipes est supérieure à 3.`,
        variables: `Mettre 2 buts à attaquer et 2 buts à défendre.
Faire un match 4 contre 4.
Interdire de marquer 2 fois de suite dans le même but.`,
        marqueurs: [{ x: 51.4, y: 48.5, type: 'ballon' }, { x: 30.4, y: 43.8, type: 'attaquant' }, { x: 47.9, y: 25.1, type: 'attaquant' }, { x: 50.9, y: 71.8, type: 'attaquant' }, { x: 59.0, y: 4.4, type: 'attaquant' }, { x: 44.1, y: 14.6, type: 'defenseur' }, { x: 22.1, y: 45.2, type: 'defenseur' }, { x: 33.0, y: 92.9, type: 'defenseur' }, { x: 24.6, y: 78.3, type: 'defenseur' }, { x: 37.7, y: 92.6, type: 'defenseur' }, { x: 56.5, y: 4.4, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `1 contre 1`,
        surface: `27 x 28`,
        objectif: `Enchaîner une action offensive puis défensive.`,
        consignes: `Le 1er joueur s’élance en conduite et tente de marquer le but. Dès 
le tir effectué, un joueur bleu s’élance à son tour pour marquer 
dans le but adverse, poursuivi par le joueur rouge qui vient de 
tirer au but. Si le joueur rouge marque, le bleu doit passer dans la 
porte avant de filer au but. Si le joueur rouge ne marque pas, le 
joueur bleu s’élance directement vers le but. 
1 point par but marqué. Si le joueur rouge parvient, après son tir, 
à rattraper le joueur bleu et à se retrouver entre lui et le but, il 
marque 1 point supplémentaire.
Si le GB bleu récupère le ballon et transmet à son partenaire qui 
marque à son tour, le but vaut 2 points.
Séquence : 15’’ (3 x 5’).`,
        rotations: `Lorsque tous les enfants sont passés 2 fois, on change les rôles
Faire tourner les enfants sur le poste de gardien de but.`,
        vigilance: `Modifier l’ordre des passages d’une équipe (= ne pas toujours jouer 
contre le même adversaire).`,
        variables: `Varier le positionnement des joueurs bleus, du même côté que les 
joueurs rouges ou faire reculer la porte de départ.
Modifier le positionnement de la porte de pénalité.
Inverser les 2 départs pour modifier les angles des courses et des 
conduites de balle.
E
G
G
notes`,
        marqueurs: [{ x: 51.4, y: 47.8, type: 'ballon' }, { x: 75.2, y: 14.7, type: 'attaquant' }, { x: 71.7, y: 12.4, type: 'attaquant' }, { x: 72.4, y: 8.5, type: 'attaquant' }, { x: 34.6, y: 87.0, type: 'defenseur' }, { x: 23.3, y: 90.5, type: 'defenseur' }, { x: 24.6, y: 77.8, type: 'ballon' }, { x: 17.9, y: 41.0, type: 'plot' }, { x: 55.8, y: 56.9, type: 'plot' }, { x: 69.5, y: 17.7, type: 'attaquant' }, { x: 69.5, y: 5.7, type: 'attaquant' }, { x: 33.3, y: 83.1, type: 'defenseur' }, { x: 39.2, y: 88.8, type: 'defenseur' }, { x: 55.1, y: 65.4, type: 'plot' }, { x: 17.1, y: 47.8, type: 'but' }, { x: 67.6, y: 47.8, type: 'ballon' }, { x: 75.2, y: 7.8, type: 'attaquant' }, { x: 27.3, y: 89.4, type: 'defenseur' }, { x: 31.0, y: 88.4, type: 'defenseur' }, { x: 37.5, y: 29.9, type: 'plot' }],
      },
      {
        id: 3,
        titre: `2 contre 2`,
        surface: `27 x 28`,
        objectif: `Se reconnaitre défenseur et revenir dans mon camp en chassant 
l’adversaire.`,
        consignes: `Pour l’équipe en possession du ballon, marquer dans le but adverse, 
après avoir franchi la médiane (on ne peut pas tirer depuis son 
camp).
Pour l’équipe qui défend, en zone haute (dans le camp adverse), 
on défend en 2 contre 2 et dans son propre camp, 1 des 2 joueurs 
devient GB et doit se positionner dans le but.
Lorsque l’action est terminée, on redémarre avec un autre duo.
Comptage des points : 1 point par but marqué. Si on marque après 
une récupération dans le camp adverse = 2 points.
Séquence : 15’ (5 x 3’).`,
        rotations: `Changer, à chaque séquence, la constitution des binômes (on ne 
joue pas toujours avec le même partenaire et contre le même 
adversaire).`,
        vigilance: `L’activité de tous les enfants.
Réaction au changement de statut (je défends / j’attaque).
Réaction sur le changement de poste (joueur / GB).`,
        variables: `Faire partir les joueurs bleus de positions différentes (1 à côté du 
but, le 2ème sur la ligne de touche, à la ligne de la surface).
Faire partir les défenseurs après la 1ère passe.`,
        marqueurs: [{ x: 52.3, y: 49.7, type: 'ballon' }, { x: 14.2, y: 19.1, type: 'attaquant' }, { x: 39.3, y: 74.7, type: 'attaquant' }, { x: 14.2, y: 32.2, type: 'attaquant' }, { x: 38.0, y: 21.2, type: 'attaquant' }, { x: 75.2, y: 28.8, type: 'defenseur' }, { x: 71.4, y: 78.9, type: 'defenseur' }, { x: 41.4, y: 36.6, type: 'defenseur' }, { x: 40.9, y: 52.8, type: 'defenseur' }, { x: 13.2, y: 70.5, type: 'attaquant' }, { x: 75.2, y: 17.0, type: 'defenseur' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 11,
    titre: `JE ME RECONNAIS DÉFENSEUR ET JE REVIENS DANS MON CAMP EN CHASSANT L’ADVERSAIRE.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes partenaires. 
Je les encourage quelles que soient les 
situations (but contre son camp, passe 
ratée…) et je ne les divertis pas quand 
l’éducateur prend la parole.`,
    vocabulaire: `Je cours vers mon but pour défendre le but 
Je chasse l’adversaire`,
    exercices: [
      {
        id: 1,
        titre: `4 contre 4`,
        surface: `27 x 28`,
        objectif: `Jouer librement en 4 contre 4.`,
        consignes: `Chaque équipe a 1 but à attaquer et à défendre protégé par un 
gardien de but. Chaque camp possède une zone protégée délimitée 
(coupelle blanche ou bleue). Les défenseurs doivent être revenus 
dans leur zone protégée au moment où les attaquants marquent 
un but.
Comptage des points : 1 point pour chaque but marqué, doublé si 
les joueurs adverses ne sont pas revenus dans leur camp. 
Séquence : 15’ (4 x 3’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence et en changeant 
les postes, gardien de but compris.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). 
Féliciter les enfants lors des récupérations effectuées et 
des courses de retour pour venir participer à l’action défensive de 
son équipe.
Modifier les équipes ou les adversaires directs si la différence de 
buts entre les 2 équipes est supérieure à 3.`,
        marqueurs: [{ x: 50.7, y: 47.1, type: 'ballon' }, { x: 55.8, y: 31.0, type: 'attaquant' }, { x: 40.1, y: 70.3, type: 'attaquant' }, { x: 39.1, y: 24.5, type: 'attaquant' }, { x: 54.5, y: 90.8, type: 'defenseur' }, { x: 56.0, y: 44.7, type: 'defenseur' }, { x: 46.4, y: 27.9, type: 'defenseur' }, { x: 47.7, y: 69.0, type: 'defenseur' }, { x: 47.2, y: 91.1, type: 'attaquant' }, { x: 66.7, y: 48.8, type: 'ballon' }, { x: 17.2, y: 48.0, type: 'but' }, { x: 50.7, y: 5.1, type: 'attaquant' }, { x: 50.7, y: 88.4, type: 'attaquant' }, { x: 50.7, y: 69.0, type: 'but' }, { x: 51.3, y: 25.4, type: 'but' }],
      },
      {
        id: 2,
        titre: `1 contre 1`,
        surface: `27 x 28`,
        objectif: `Récupérer le ballon en 1 contre 1 pour enchaîner avec une autre 
action.`,
        consignes: `Le joueur bleu s’élance pour aller marquer dans un des 2 buts.
Lorsqu’il a tiré, l’éducateur montre coupelle rouge ou coupelle 
jaune (cachées dans son dos). Si coupelle jaune = le joueur situé 
porte jaune s’élance pour aller marquer dans le but. Idem pour le 
joueur situé porte rouge.
L’attaquant, après le tir, prend l’information sur la couleur et dé
fend pour essayer de l’empêcher de marquer un but. S’il récupère 
le ballon, il peut de nouveau aller marquer dans un des 2 buts.
Dès l’action terminée, on recommence avec un autre joueur.
But marqué par l’attaquant = 1 point.
But marqué par l’attaquant après avoir récupéré le ballon à son 
adversaire = 2 points.
But marqué par le joueur porte jaune ou rouge = 1 point.
Faire 2 passages pour les joueurs bleus puis changer les rôles
L’équipe qui remporte le plus de points gagne le défi.
Séquence : 15’ (maximum 15’’ à 20’’ par passage).`,
        rotations: `Rotation régulière sur le poste de gardien de but.`,
        vigilance: `Bien conduire son ballon pour se rapprocher du but le plus vite 
possible et pour tirer.
S’informer et réagir rapidement pour défendre son but.`,
        variables: `Attention aux distances : si l’attaquant ne parvient jamais à rattra
per son adversaire, reculer les camps jaune et rouge de quelques 
mètres.
G
G
E
G
notes`,
        marqueurs: [{ x: 52.3, y: 47.4, type: 'ballon' }, { x: 67.6, y: 82.9, type: 'attaquant' }, { x: 68.0, y: 10.1, type: 'attaquant' }, { x: 73.3, y: 8.2, type: 'attaquant' }, { x: 39.5, y: 44.7, type: 'defenseur' }, { x: 24.2, y: 90.2, type: 'defenseur' }, { x: 65.4, y: 46.9, type: 'ballon' }, { x: 61.1, y: 66.0, type: 'plot' }, { x: 44.8, y: 22.9, type: 'plot' }, { x: 64.0, y: 87.8, type: 'attaquant' }, { x: 64.0, y: 80.7, type: 'attaquant' }, { x: 37.9, y: 47.1, type: 'defenseur' }, { x: 34.4, y: 88.3, type: 'defenseur' }, { x: 54.5, y: 53.5, type: 'plot' }, { x: 18.1, y: 47.4, type: 'ballon' }, { x: 76.2, y: 7.5, type: 'attaquant' }, { x: 28.2, y: 89.1, type: 'defenseur' }, { x: 31.9, y: 88.1, type: 'defenseur' }, { x: 44.7, y: 19.9, type: 'plot' }, { x: 64.4, y: 13.1, type: 'plot' }, { x: 64.4, y: 6.0, type: 'plot' }, { x: 71.9, y: 84.5, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `queue du renard`,
        surface: `18 x 28`,
        objectif: `Attraper la queue du renard sans se faire prendre la sienne.`,
        consignes: `Faire 2 équipes de couleurs différentes, chaque équipe ayant une 
2ème chasuble accrochée dans le dos.
Si un joueur attrape la queue d’un adversaire, il amène le joueur 
dans la prison. Pendant ce «trajet», il ne peut pas être attaqué. Un 
joueur en prison peut être délivré par un coéquipier (un joueur dé
livré à la fois). À la fin de chaque séquence, compter les chasubles 
apportées dans les coffres forts (1’ max).
Comptage des points : si une équipe entière est faite prisonnière 
avant la fin de la séquence, l’équipe vainqueur marque 5 points.
S’il reste encore des joueurs à la fin de la séquence, nombre de 
joueurs libres = nombre de points.
Séquences : 15’ (12 x 1’). 6 séquences sans ballon / 6 séquences 
avec ballon.`,
        rotations: `Pas de rotation à prévoir tous les enfants sont en action.`,
        vigilance: `L’activité de tous les enfants. 
Après quelques séquences, interroger les enfants sur une 
organisation qu’ils pourraient mettre en place (« faire un plan »). 
Exemple : soit tout le monde « attaque », soit on met des défen
seurs de la prison.
Protéger son ballon.`,
        variables: `Possibilité de délivrer tous les prisonniers en 1 fois.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.7, y: 48.6, type: 'defenseur' }, { x: 58.5, y: 27.8, type: 'defenseur' }, { x: 53.4, y: 68.3, type: 'defenseur' }, { x: 64.1, y: 74.4, type: 'defenseur' }, { x: 44.7, y: 71.7, type: 'attaquant' }, { x: 39.3, y: 49.6, type: 'attaquant' }, { x: 43.8, y: 19.2, type: 'attaquant' }, { x: 52.4, y: 36.1, type: 'attaquant' }, { x: 41.4, y: 36.4, type: 'attaquant' }, { x: 51.0, y: 46.6, type: 'defenseur' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 12,
    titre: `JE JOUE AVEC MON PARTENAIRE QUI EST À CÔTÉ DE MOI ET JE ME DÉPLACE POUR RECEVOIR LE BALLON.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes adversaires. 
Je les salue à leur arrivée au stade, je suis 
courtois et respectueux quel que soit le ré
sultat et le conteste du match.`,
    vocabulaire: `Mon équipe occupe la largeur du terrain
La relance protégée`,
    exercices: [
      {
        id: 1,
        titre: `5 contre 5`,
        surface: `36 x 28`,
        objectif: `Jouer avec mon partenaire qui est à côté de moi et se déplacer 
pour recevoir le ballon.`,
        consignes: `But : marquer un but.
Consignes : chaque équipe est répartie de la même façon (3 
joueurs en zone défensive et 1 joueur en zone offensive). Le GB 
rouge relance sur un des partenaires (respecter la règle de la 
relance protégée). Les rouges doivent passer la ligne médiane 
et attaquer à 4 contre 3. L’attaquant bleu ne peut pas revenir 
défendre dans son camp. Si les bleus récupèrent, ils relancent sur 
leur attaquant qui tente d’aller marquer. Lorsque le ballon sort des 
limites du terrain (relance du GB, touche), on repart à 3 contre 1 
depuis la moitié défensive. 
Comptage des points : Marquer 1 but = 1 point. Marquer un but 
après une récupération, en moins de 4 secondes = 2 points.
Séquence : 15’ (3 x 4’).`,
        rotations: `Changer le joueur qui se trouve seul en zone offensive.`,
        vigilance: `Respecter et travailler la relance protégée.
Occuper la largeur du terrain.`,
        variables: `Sur la relance du GB, l’équipe adverse peut placer 2 joueurs en 
zone offensive (on joue à 3 contre 2). Un des 2 attaquants pourra 
revenir dans sa moitié défensive.`,
        marqueurs: [{ x: 50.0, y: 49.0, type: 'ballon' }, { x: 80.2, y: 16.3, type: 'attaquant' }, { x: 58.3, y: 50.2, type: 'attaquant' }, { x: 38.5, y: 35.6, type: 'attaquant' }, { x: 41.1, y: 80.7, type: 'defenseur' }, { x: 41.1, y: 20.5, type: 'defenseur' }, { x: 34.2, y: 49.9, type: 'defenseur' }, { x: 65.6, y: 50.2, type: 'defenseur' }, { x: 82.3, y: 79.7, type: 'attaquant' }, { x: 83.6, y: 48.7, type: 'but' }, { x: 16.4, y: 49.9, type: 'but' }, { x: 64.4, y: 17.8, type: 'plot' }, { x: 79.7, y: 20.8, type: 'plot' }, { x: 59.5, y: 75.2, type: 'plot' }],
      },
      {
        id: 2,
        titre: `double rivière`,
        surface: `36 x 28`,
        objectif: `Jouer avec mon partenaire qui est à côté de moi et se déplacer 
pour recevoir le ballon.`,
        consignes: `But : marquer un but en franchissant les 2 rivières. Consignes : le 
GB transmet à l’un de ses partenaires. Lorsque le ballon est touché 
par un des joueurs, le défenseur bleu de la rivière 1 peut entrer 
dans la zone pour essayer de le récupérer. Dès la rivière franchie, 
le défenseur bleu R1 ne peut plus défendre.
Lorsque les rouges sont sur la berge, ils sont inattaquables.
Il faut ensuite traverser la 2ème rivière pour pouvoir marquer. Le 
défenseur bleu R2 ne défend que dans sa rivière. Si le joueur bleu 
R1 (bleu) récupère et marque = 1 point. Si le défenseur bleu R2 
récupère le ballon, il peut le transmettre à l’autre joueur bleu ou 
un de ses partenaires situés sur le côté qui rentre dans le jeu et va 
marquer avec le joueur bleu R1. Les rouges, à la perte du ballon, 
doivent défendre. Comptage des points : 1 but = 1 point. But 
marqué en moins de 4 secondes à la suite d’une récupération = 2 
points. Séquence : 15’ (maximum 20’’ par passage).`,
        rotations: `Lorsque les 2 binômes rouges sont passés, changer les positions 
des bleus. Puis refaire 2 passages des rouges puis rotation entre 
les bleus et les rouges.`,
        vigilance: `Respecter et travailler la relance protégée. Occuper la largeur du 
terrain. Former un triangle (en intégrant le gardien).`,
        variables: `Mettre 2 attaquants bleus dans la rivière 1. Dans ce cas, positionner un 
joueur rouge sur la berge (apprendre à sortir en 3 contre 2). Autoriser 
le joueur bleu R1 à défendre uniquement dans sa rivière ou pouvoir 
défendre sur la berge. Autoriser le joueur bleu R2 à défendre sur la 
berge ou à défendre avec du retard quand la rivière 2 a été franchie. 
G
G
Rivière 2
G
G
Rivière 1
Berge
notes`,
        marqueurs: [{ x: 49.4, y: 48.8, type: 'ballon' }, { x: 76.0, y: 19.6, type: 'attaquant' }, { x: 88.3, y: 86.1, type: 'attaquant' }, { x: 87.3, y: 17.5, type: 'attaquant' }, { x: 48.8, y: 5.3, type: 'defenseur' }, { x: 49.2, y: 92.7, type: 'defenseur' }, { x: 79.2, y: 77.7, type: 'attaquant' }, { x: 15.9, y: 48.8, type: 'but' }, { x: 83.4, y: 48.8, type: 'but' }, { x: 77.0, y: 23.8, type: 'plot' }, { x: 68.0, y: 59.5, type: 'plot' }, { x: 33.6, y: 47.6, type: 'defenseur' }, { x: 30.0, y: 6.4, type: 'defenseur' }, { x: 36.5, y: 6.1, type: 'defenseur' }, { x: 62.7, y: 6.9, type: 'defenseur' }, { x: 69.6, y: 6.4, type: 'defenseur' }, { x: 29.9, y: 89.9, type: 'defenseur' }, { x: 36.4, y: 89.6, type: 'defenseur' }, { x: 62.6, y: 90.4, type: 'defenseur' }, { x: 69.6, y: 89.9, type: 'defenseur' }, { x: 66.8, y: 46.4, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `défi technique`,
        surface: `36 x 28`,
        objectif: `Transmettre le ballon à son partenaire pour aller marquer le plus 
rapidement possible.`,
        consignes: `Le GB relance sur son partenaire dans la zone puis transmission aux 
joueurs selon le schéma (1 – 2 – 3 puis tir au but). Les 2 équipes 
démarrent en même temps au signal. Les joueurs peuvent conduire 
le ballon puis passer ou passer directement. Les ballons doivent 
toujours être au sol.
Comptage des points : but = 1 point. L’équipe qui termine en 1er a 
un point supplémentaire.
NB : si l’attaquant bleu est sur la même ligne que les joueurs 1 et 2 
rouges: ce n’est pas un problème: cette consigne est faite pour forcer 
les enfants à « proposer une ligne de passe » au porteur du ballon.
Séquence : 15’ (3 x 4’). Faire x passages puis inverser le parcours 
(on relance à gauche au lieu de relancer à droite).`,
        rotations: `On suit son ballon (on prend la place de celui à qui on a donné). Le 
tireur récupère son ballon et revient se placer dans la file.
Le gardien de but suit également son ballon, le joueur en attente 
devient gardien de but.`,
        vigilance: `Sécuriser le jeu (ATTENTION : ballon au sol)
La communication et la relation entre les partenaires (donner au 
bon moment et à un équipier qui nous regarde, prêt à recevoir).`,
        variables: `Le joueur situé en 2 doit remettre à 1, qui transmettra au joueur 3.
Le joueur 3 remise au joueur 2 qui tire. On fait le parcours que 
l’on veut le plus vite possible, mais tout le monde doit toucher le 
ballon.`,
        marqueurs: [{ x: 50.2, y: 47.5, type: 'ballon' }, { x: 73.9, y: 20.1, type: 'attaquant' }, { x: 54.0, y: 79.8, type: 'attaquant' }, { x: 36.9, y: 41.6, type: 'attaquant' }, { x: 12.1, y: 64.0, type: 'defenseur' }, { x: 49.0, y: 19.3, type: 'defenseur' }, { x: 23.3, y: 77.1, type: 'defenseur' }, { x: 65.8, y: 47.5, type: 'defenseur' }, { x: 88.4, y: 28.4, type: 'attaquant' }, { x: 83.8, y: 47.2, type: 'but' }, { x: 16.7, y: 48.4, type: 'but' }, { x: 75.7, y: 23.5, type: 'plot' }, { x: 55.9, y: 75.8, type: 'plot' }, { x: 38.8, y: 45.0, type: 'plot' }, { x: 16.2, y: 39.3, type: 'plot' }, { x: 22.3, y: 73.1, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 13,
    titre: `JE FEINTE ET J’ÉLIMINE UN ADVERSAIRE DE FACE`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes adversaires. 
J’échange une poignée de main à la fin du 
match et à la suite d’une faute, j’incite mes 
coéquipiers à sortir le ballon quand un 
joueur est blessé.`,
    vocabulaire: `Je fais semblant
Je feinte`,
    exercices: [
      {
        id: 1,
        titre: `2 buts 1 gardien`,
        surface: `27 x 28`,
        objectif: `Marquer des buts en éliminant mon ou mes adversaires directs.`,
        consignes: `Terrain divisée en 2 zones dans la longueur. 2 contre 2 dans 
chaque zone. Possibilité d’apporter un surnombre (3 contre 2) si 
le joueur va dans l’autre zone en conduite de balle. Si changement 
de zone via une passe, les joueurs restent dans leur zone.
Pour marquer il faut rentrer dans la surface, avec possibilité de 
marquer dans l’un des 2 buts, gardés par 1 seul gardien.
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (4 x 3’30’’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence et en changeant 
les binômes adversaires.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). 
Féliciter les enfants lors des buts marqués et des dribbles réus
sis dans le jeu et pour tirer au but. 
Modifier les équipes ou les adversaires directs si la différence de 
buts entre les 2 équipes est supérieure à 3.`,
        variables: `Les buts inscrits après un dribble comptent double.`,
        marqueurs: [{ x: 51.4, y: 49.3, type: 'ballon' }, { x: 38.9, y: 10.8, type: 'attaquant' }, { x: 46.6, y: 57.4, type: 'attaquant' }, { x: 26.1, y: 80.2, type: 'attaquant' }, { x: 48.3, y: 33.8, type: 'attaquant' }, { x: 28.6, y: 55.9, type: 'defenseur' }, { x: 37.6, y: 86.4, type: 'defenseur' }, { x: 32.0, y: 42.6, type: 'defenseur' }, { x: 35.1, y: 14.3, type: 'defenseur' }, { x: 18.0, y: 49.3, type: 'ballon' }, { x: 68.2, y: 49.0, type: 'ballon' }, { x: 34.8, y: 46.3, type: 'plot' }, { x: 28.6, y: 77.1, type: 'plot' }, { x: 17.8, y: 62.6, type: 'plot' }, { x: 17.9, y: 35.9, type: 'plot' }, { x: 68.2, y: 62.4, type: 'plot' }, { x: 68.2, y: 35.7, type: 'plot' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Feinter et éliminer un adversaire de face.`,
        consignes: `Les joueurs sont disposés comme dans le schéma. L’éducateur 
donne le ballon à l’un des joueurs (bleus ou rouges), qui tente d’éli
miner pour marquer ou passer à son partenaire.
Ex : l’éducateur donne au joueur rouge. Il affronte le joueur bleu 
qui vient face à lui en 1 contre 1. Le joueur rouge peut donner le 
ballon à son partenaire uniquement s’il a réussi à franchir la ligne 
médiane (forcer à prendre de la vitesse sur la prise de balle et 
jouer le 1 contre 1).
Si le joueur bleu récupère, il peut éliminer ou transmettre à son 
partenaire (après avoir franchi la ligne médiane)
Dès l’action effectuée, on peut jouer avec l’autre binôme.
Lorsque les 2 groupes sont passés, rotation des joueurs.
Comptage des points : 1 point par but marqué. + 1 pt si but sans 
avoir joueur avec mon partenaire
Séquence : 15’ (maximum 20’’ par passage).`,
        rotations: `Rotation lorsque les 2 groupes sont passés.
Rotation du gardien de but.`,
        vigilance: `Être prêt à recevoir le ballon (incertitude donnée par l’éducateur)
Prendre de la vitesse sur la prise de balle et éliminer son adver
saire.
G
G
G
G
E
notes`,
        marqueurs: [{ x: 50.0, y: 45.4, type: 'ballon' }, { x: 46.4, y: 3.7, type: 'attaquant' }, { x: 66.1, y: 70.9, type: 'attaquant' }, { x: 52.0, y: 88.9, type: 'attaquant' }, { x: 32.6, y: 19.9, type: 'attaquant' }, { x: 32.2, y: 69.3, type: 'defenseur' }, { x: 43.8, y: 89.2, type: 'defenseur' }, { x: 67.4, y: 20.6, type: 'defenseur' }, { x: 51.8, y: 3.7, type: 'defenseur' }, { x: 16.5, y: 45.4, type: 'but' }, { x: 84.0, y: 44.5, type: 'but' }, { x: 54.1, y: 67.7, type: 'plot' }, { x: 64.1, y: 67.7, type: 'plot' }, { x: 47.7, y: 45.1, type: 'ballon' }, { x: 43.7, y: 63.7, type: 'plot' }],
      },
      {
        id: 3,
        titre: `1 contre 1`,
        surface: `18 x 28`,
        objectif: `Marquer un point en entrant dans le château adverse (matérialisé 
par le plot).`,
        consignes: `3 terrains réduits dans la largeur (18m x 9m). Le but est d’éliminer 
son adversaire et d’entrer dans le château en passant la ligne à 
droite ou à gauche du plot. 
Si le défenseur récupère, il tente d’aller marquer à son tour.
Si un joueur entre dans le château, il marque un point, donne le 
ballon à son adversaire et vient se positionner dans son camp.
1 point par entrée dans le château. 
À la fin de la séquence, 1 point est donné au joueur qui est entré le 
plus de fois dans le château. 
Séquence : 15’ (maximum 30’’ par manche).`,
        rotations: `Rotation des joueurs rouges dans un sens et des joueurs bleus 
dans l’autre sens. Laisser le temps entre 2 passages successifs.`,
        vigilance: `« Faire croire », « faire semblant » pour tromper l’adversaire.
Toucher le ballon régulièrement pour pouvoir faire son dribble au 
bon moment (rester maître du ballon).
Pour le défenseur : ne pas se faire éliminer, récupérer et contrer.`,
        variables: `Possibilité de le faire sans ballon.
Pour la rotation des groupes, possibilité de faire en « mon
tante-descendante ».
Addition des points de l’équipe.`,
        marqueurs: [{ x: 48.3, y: 49.0, type: 'ballon' }, { x: 46.6, y: 16.7, type: 'attaquant' }, { x: 48.2, y: 71.3, type: 'attaquant' }, { x: 45.4, y: 46.6, type: 'attaquant' }, { x: 38.5, y: 5.2, type: 'attaquant' }, { x: 22.4, y: 49.5, type: 'defenseur' }, { x: 22.4, y: 78.7, type: 'defenseur' }, { x: 19.0, y: 5.2, type: 'defenseur' }, { x: 23.0, y: 21.4, type: 'defenseur' }, { x: 35.6, y: 71.1, type: 'plot' }, { x: 48.6, y: 91.0, type: 'ballon' }, { x: 32.8, y: 72.7, type: 'plot' }, { x: 40.0, y: 92.5, type: 'attaquant' }, { x: 20.5, y: 92.5, type: 'defenseur' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 14,
    titre: `SÉANCE RÉCRÉATIVE`,
    phase: 'recreatif',
    phaseLabel: `SÉANCE RÉCRÉATIVE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Terrain 1
Terrain 2
4m
4m
notes
3
match
surface
36 x 28
OBJECTIF
Match 5 contre 5.
BUT(S)- CONSIGNES
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).
GESTION DES ROTATIONS
Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.
VEILLER À
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
4
match
surface
36 x 28
OBJECTIF
Match 5 contre 5.
BUT(S)- CONSIGNES
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).
GESTION DES ROTATIONS
Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.
VEILLER À
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre`,
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren-
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (4 x 3’). 30’’ de récupération entre les séquences.`,
        rotations: `Prévoir les rotations pour les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen-
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et faire 
monter et descendre sur le nombre x de terrains. Obliger les en-
fants à être dans les zones des 4m pour pouvoir marquer. Valoriser 
par 2 points si le but est marqué de la zone des 4m. Empêcher 
l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.5, y: 49.1, type: 'ballon' }, { x: 26.1, y: 68.2, type: 'attaquant' }, { x: 41.9, y: 63.9, type: 'attaquant' }, { x: 80.8, y: 67.3, type: 'attaquant' }, { x: 65.1, y: 68.2, type: 'attaquant' }, { x: 26.1, y: 25.5, type: 'defenseur' }, { x: 43.1, y: 23.4, type: 'defenseur' }, { x: 67.2, y: 27.6, type: 'defenseur' }, { x: 80.8, y: 28.8, type: 'defenseur' }, { x: 53.3, y: 30.8, type: 'defenseur' }, { x: 16.6, y: 19.1, type: 'plot' }, { x: 16.6, y: 8.9, type: 'plot' }, { x: 16.4, y: 88.3, type: 'plot' }, { x: 16.4, y: 78.1, type: 'plot' }, { x: 52.7, y: 57.2, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `atelier pef`,
        surface: `36 x 28`,
        consignes: `PROPOSITION N°1
Objectif de l’atelier : sensibiliser sur les formes de discriminations 
par l’intermédiaire d’un atelier basé sur l’orientation spatiale.
PROPOSITION N°2
Objectif de l’atelier : sensibiliser sur les « bons » comportements 
par l’intermédiaire d’un atelier technique.
thème
SÉANCE RÉCRÉATIVE
message éducatif
JEU PROGRAMME ÉDUCATIF FÉDÉRAL (PEF)
Terrain 1
Terrain 2
4m
4m
notes`,
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre
séance n°
14
phase de jeu
SÉANCE RÉCRÉATIVE
catégorie
U8-U9
effectif
10
durée
75 min
date`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
  {
    id: 15,
    titre: `JE FEINTE ET J’ÉLIMINE UN ADVERSAIRE QUI ARRIVE SUR LE CÔTÉ.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Lorsque je pratique un sport, je dois 
connaître ses règles du jeu afin de pouvoir le 
pratiquer dans les meilleures conditions. 
Je dois apprendre à reconnaître l’espace de 
jeu et ses limites, le sens du jeu et dans quel 
but je marque.`,
    vocabulaire: `Je fais semblant
Je feinte`,
    exercices: [
      {
        id: 1,
        titre: `2 buts 1 gardien`,
        surface: `27 x 28`,
        objectif: `Marquer dans l’un des 2 buts, en 5 contre 5.`,
        consignes: `Chaque équipe doit marquer dans l’un des 2 buts, défendus pas un 
seul gardien de but. Pour que le but soit valable, il faut que le tir 
soit effectué de la surface.
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (5 x 3’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence et en changeant 
les adversaires.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). 
Féliciter les enfants lors des buts marqués et des dribbles réus
sis dans le jeu et pour tirer au but. 
Modifier les équipes ou les adversaires directs si la différence de 
buts entre les 2 équipes est supérieure à 3.`,
        variables: `Les attaquants peuvent attaquer à 3 dans le camp adverse si le 
porteur a franchi la ligne médiane en conduite/dribble balle au 
pied.
Les buts inscrits alors sur conduite/dribble puis tir 
comptent doublent. 
Uniquement, le joueur qui a franchi la ligne de la surface peut tirer, 
un défenseur en plus du gardien peut venir défendre.`,
        marqueurs: [{ x: 50.7, y: 49.0, type: 'ballon' }, { x: 48.1, y: 62.6, type: 'attaquant' }, { x: 44.6, y: 82.0, type: 'attaquant' }, { x: 34.4, y: 38.4, type: 'attaquant' }, { x: 48.9, y: 33.1, type: 'attaquant' }, { x: 27.9, y: 54.3, type: 'defenseur' }, { x: 37.4, y: 84.1, type: 'defenseur' }, { x: 46.2, y: 12.6, type: 'defenseur' }, { x: 34.4, y: 14.0, type: 'defenseur' }, { x: 18.2, y: 68.5, type: 'ballon' }, { x: 67.5, y: 48.7, type: 'ballon' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Feinter et éliminer un adversaire qui arrive sur le côté.`,
        consignes: `Les joueurs sont disposés comme sur le schéma. L’éducateur donne 
le ballon à l’un des 2 joueurs rouges, qui tente d’éliminer pour 
marquer ou passer à son partenaire. Dès la passe (ou la réception 
selon le niveau), le défenseur bleu sur le côté intervient. Le porteur 
rouge peut aller au but ou passer à son partenaire (2) uniquement 
s’il a réussi à franchir la ligne médiane (forcer à prendre de la 
vitesse sur la prise de balle et jouer le 1 contre 1).
Si le joueur bleu récupère, il peut tenter d’aller marquer le but à 
son tour.
Dès l’action effectuée, on peut jouer avec l’autre binôme. Lorsque 
les 2 groupes sont passés, rotation des joueurs. Faire 2 passages 
chacun pour les rouges puis inverser.
Comptage des points : 1 point par but marqué.
Séquence : 15’ (30’’ maximum par passage).`,
        rotations: `Rotation lorsque les 2 groupes sont passés (rôle et gardien de but).`,
        vigilance: `Être prêt à recevoir le ballon (incertitude donnée par l’éducateur).
Prendre de la vitesse sur la prise de balle et éliminer son adver
saire. Se déplacer pour offrir une possibilité de passe.`,
        variables: `Si le joueur rouge transmet à son partenaire, le 2ème défenseur bleu 
peut intervenir (en retard). Interdire la possibilité de donner le 
ballon à son partenaire (1 contre 1 uniquement).
G
G
G
G
E
1
2
2
1
notes`,
        marqueurs: [{ x: 49.1, y: 49.0, type: 'ballon' }, { x: 45.5, y: 7.3, type: 'attaquant' }, { x: 66.0, y: 61.0, type: 'attaquant' }, { x: 51.0, y: 92.5, type: 'attaquant' }, { x: 31.7, y: 23.5, type: 'attaquant' }, { x: 42.3, y: 85.7, type: 'defenseur' }, { x: 42.9, y: 92.8, type: 'defenseur' }, { x: 57.0, y: 5.2, type: 'defenseur' }, { x: 52.4, y: 7.3, type: 'defenseur' }, { x: 15.6, y: 49.0, type: 'but' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 52.1, y: 63.6, type: 'plot' }, { x: 64.0, y: 58.8, type: 'plot' }, { x: 46.7, y: 48.7, type: 'ballon' }, { x: 45.8, y: 64.9, type: 'plot' }],
      },
      {
        id: 3,
        titre: `1 contre 1`,
        surface: `18 x 28`,
        objectif: `Marquer un point en entrant dans le château adverse (matérialiser 
par le plot).`,
        consignes: `3 terrains réduits dans la largeur (18m x 9m). Le but est d’éliminer 
son adversaire qui arrive sur le côté et d’entrer dans le château 
soit passer la ligne à droite ou à gauche du plot. Si le défenseur ré
cupère, il tente d’aller marquer à son tour. Si un joueur entre dans 
le château, il marque un point, donne le ballon à son adversaire et 
vient se positionner sur la ligne du terrain.
1 point par entrée dans le château. À la fin de la séquence, 1 point 
est donné au joueur qui est entré le plus de fois dans le château. 
Séquence : 15’ (30’’ maximum par manche).`,
        rotations: `Rotation des joueurs rouges dans un sens et des joueurs bleus 
dans l’autre sens. Laisser le temps entre 2 passages successifs.`,
        vigilance: `« Faire croire », « faire semblant » pour tromper l’adversaire
Toucher le ballon régulièrement pour pouvoir faire son dribble au 
bon moment (rester maître du ballon).
Pour le défenseur : ne pas se faire éliminer, récupérer et contrer.`,
        variables: `Possibilité de le faire sans ballon. Pour la rotation des groupes, 
possibilité de faire en « montante - descendante ». Addition des 
points de l’équipe.`,
        marqueurs: [{ x: 48.3, y: 48.5, type: 'ballon' }, { x: 46.6, y: 16.3, type: 'attaquant' }, { x: 48.2, y: 70.9, type: 'attaquant' }, { x: 45.4, y: 46.1, type: 'attaquant' }, { x: 38.5, y: 4.7, type: 'attaquant' }, { x: 28.9, y: 89.9, type: 'defenseur' }, { x: 19.0, y: 4.7, type: 'defenseur' }, { x: 28.8, y: 33.6, type: 'defenseur' }, { x: 35.6, y: 70.7, type: 'plot' }, { x: 48.6, y: 90.5, type: 'ballon' }, { x: 32.3, y: 73.1, type: 'plot' }, { x: 40.0, y: 92.0, type: 'attaquant' }, { x: 20.5, y: 92.0, type: 'defenseur' }, { x: 28.9, y: 62.8, type: 'defenseur' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 16,
    titre: `JE JOUE AVEC MON PARTENAIRE QUI EST À CÔTÉ DE MOI ET JE ME DÉPLACE POUR RECEVOIR LE BALLON.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Lorsque je pratique un sport, je dois 
connaître ses règles du jeu afin de pouvoir 
le pratiquer dans les meilleures conditions. 
J’identifie les différentes surfaces du corps 
autorisées pour jouer (joueur et gardien de 
but).`,
    vocabulaire: `Je donne et je me déplace`,
    exercices: [
      {
        id: 1,
        titre: `jeu avec soutien`,
        surface: `36 x 28`,
        objectif: `Je joue avec mon partenaire qui est à côté de moi et je me déplace 
pour recevoir le ballon.`,
        consignes: `3 contre 3 dans la bande axiale + 1 joueur en soutien .
Pour marquer, je rentre dans la zone offensive en conduisant le 
ballon ou par une passe dans celle-ci pour ensuite joueur le 2 
contre 1 avec le joueur qui se trouvait en soutien de l’autre équipe.
Le joueur soutien est inattaquable et on peut jouer avec lui pour 
conserver le ballon. 
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (3 x 4’).`,
        rotations: `Mettre en place une rotation avec le joueur en soutien et les 
joueurs remplaçants.`,
        vigilance: `Faire respecter les règles.
Compter les points et valoriser les bonnes attitudes.
Équilibrer les équipes.
Occuper l’espace de jeu dans la largeur et la profondeur.
Insister sur la qualité des contrôles et des enchaînements vers 
l’avant (efficacité offensive).`,
        variables: `Possibilité de presser le joueur soutien. 
Ajouter 1 attaquant dans les deux zones soutien.
Mettre un seul but avec GB.`,
        marqueurs: [{ x: 50.0, y: 50.7, type: 'ballon' }, { x: 63.1, y: 46.2, type: 'attaquant' }, { x: 37.2, y: 45.3, type: 'attaquant' }, { x: 25.5, y: 48.3, type: 'attaquant' }, { x: 45.9, y: 6.7, type: 'attaquant' }, { x: 50.0, y: 6.7, type: 'defenseur' }, { x: 50.6, y: 24.2, type: 'defenseur' }, { x: 77.2, y: 52.5, type: 'defenseur' }, { x: 63.1, y: 61.7, type: 'defenseur' }, { x: 17.4, y: 70.2, type: 'but' }, { x: 41.4, y: 52.5, type: 'defenseur' }, { x: 65.6, y: 79.2, type: 'attaquant' }, { x: 73.5, y: 51.8, type: 'plot' }, { x: 76.8, y: 70.2, type: 'plot' }, { x: 76.4, y: 73.4, type: 'plot' }],
      },
      {
        id: 2,
        titre: `jeu des zones`,
        surface: `36 x 14`,
        objectif: `Rechercher son partenaire pour marquer un but.`,
        consignes: `2 contre 1 dans la zone 2, 1  joueur en soutien zone 1 + 1 atta
quant et 1 défenseur en position de retard zone 3. 
Rechercher mon partenaire en zone 3 pour aller marquer en 2 
contre 1 soit par la passe ou la conduite. Le défenseur peut rentrer 
dans la zone 3 dès lors que le ballon se trouve dans celle-ci. Si 
le défenseur récupère en zone 2, il cherche à aller marquer dans 
le mini-but dans la zone 1 en 1 contre 1. Les bleus défendent 
uniquement dans leur zone. Si le défenseur de la zone 3 récupère, 
il chercher à aller marquer dans le mini but dans la zone 1 avec 
l’aide de son partenaire. 
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (4 x 3’).`,
        rotations: `À chaque séquence : changer la position de tous les joueurs en 
intégrant les joueurs remplaçants (gardien compris).`,
        vigilance: `Faire respecter les règles. Compter les points et valoriser les 
bonnes attitudes. Équilibrer les équipes. Occuper l’espace de 
jeu dans la largeur et la profondeur. Insister sur la qualité des 
contrôles et des enchaînements vers l’avant (efficacité offensive).`,
        variables: `Mettre le défenseur directement dans la zone 3 ou sur la ligne de 
la surface (obliger l’attaquant à ouvrir une ligne de passe). Ajouter 
un 2ème défenseur dans zone axiale. Ajouter un troisième attaquant 
dans la zone axiale. Ne pas mettre de gardien de but. Dédoubler 
les ateliers si beaucoup de joueurs.
G
G
Zone 3
Zone 2
Zone 1
notes`,
        marqueurs: [{ x: 50.0, y: 51.6, type: 'ballon' }, { x: 51.8, y: 29.4, type: 'attaquant' }, { x: 58.1, y: 7.6, type: 'attaquant' }, { x: 33.4, y: 5.8, type: 'attaquant' }, { x: 30.3, y: 9.9, type: 'attaquant' }, { x: 52.0, y: 14.1, type: 'defenseur' }, { x: 61.8, y: 8.5, type: 'defenseur' }, { x: 78.4, y: 25.0, type: 'defenseur' }, { x: 50.7, y: 39.9, type: 'defenseur' }, { x: 17.5, y: 31.3, type: 'but' }, { x: 24.5, y: 29.2, type: 'defenseur' }, { x: 27.8, y: 30.7, type: 'plot' }, { x: 25.3, y: 17.0, type: 'plot' }, { x: 26.0, y: 14.8, type: 'plot' }, { x: 30.6, y: 51.3, type: 'attaquant' }, { x: 14.3, y: 51.3, type: 'attaquant' }, { x: 70.0, y: 51.3, type: 'attaquant' }, { x: 85.7, y: 50.5, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `jeu 2 contre 1`,
        surface: `27 x 28`,
        objectif: `Éliminer ou jouer en 2 contre 1 pour marquer.`,
        consignes: `Le rouge 1 conduit le ballon rapidement vers son but jusqu’à la 
surface. Arrivé à la ligne, il se retourne et transmet au bleu 1 (en 
mouvement) qui a 2 solutions :
- soit éliminer et aller au but ou centrer.
- soit transmettre à son partenaire bleu 2. On joue alors à 2 contre 
1. Si le rouge 1 récupère le ballon, il peut aller marquer dans l’un 
des 2 buts ou arrêter le ballon sur la ligne médiane, avec possibili
té de jouer avec le rouge 2 en attente.
Dès l’action terminée, on recommence avec les joueurs en attente.
Si récupération par le GB, relance sur un des 2 rouges, on joue le 2 
contre 2 pour aller marquer.
Comptage des points : but = 1 point.
Séquence :  15’ (3 x 4’).`,
        rotations: `Changer régulièrement les positions des joueurs (à chaque sé
quence). Après 4 à 6 passages des bleus, les rouges attaquent.`,
        vigilance: `Aider le partenaire dans la zone. Tenter de déséquilibrer à 2 contre 
1. Donner le ballon et se déplacer pour aider mon partenaire.`,
        variables: `Si le défenseur rouge ne récupère le ballon, l’éducateur peut 
renvoyer un 2ème ballon (type ballon magique) pour permettre au 
rouge 2 de jouer.
Limiter le temps pour les rouges pour marquer (4’’).`,
        marqueurs: [{ x: 50.0, y: 49.0, type: 'ballon' }, { x: 53.5, y: 5.5, type: 'attaquant' }, { x: 54.6, y: 48.7, type: 'attaquant' }, { x: 43.8, y: 92.8, type: 'defenseur' }, { x: 62.4, y: 4.9, type: 'defenseur' }, { x: 16.5, y: 49.0, type: 'but' }, { x: 31.9, y: 18.8, type: 'plot' }, { x: 48.6, y: 19.3, type: 'plot' }, { x: 48.2, y: 9.7, type: 'attaquant' }, { x: 42.6, y: 73.2, type: 'defenseur' }, { x: 52.0, y: 11.9, type: 'defenseur' }, { x: 64.9, y: 5.5, type: 'defenseur' }, { x: 56.3, y: 5.5, type: 'attaquant' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 17,
    titre: `JE M’OPPOSE POUR PROTÉGER MON BUT, JE FAIS RALENTIR LE JOUEUR ADVERSE.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`],
    messageEducatif: `Lorsque je pratique un sport, je dois 
connaître ses règles du jeu afin de pouvoir le 
pratiquer dans les meilleures conditions.
Je connais les différentes reprises du jeu 
(engagement, rentrée de touche, coup de 
pied de coin et coup de pied de but).`,
    vocabulaire: `Je défends l’axe ballon-but`,
    exercices: [
      {
        id: 1,
        titre: `match 4 contre 4`,
        surface: `36 x 28`,
        objectif: `Inciter les défenseurs à récupérer le ballon rapidement à la perte 
de balle en empêchant les adversaires de progresser.`,
        consignes: `Jeu libre en 4 contre 4. Chaque équipe a 2 petits buts à attaquer 
et à défendre sans gardien de but. Chaque camp est délimité ainsi 
que les zones protégées. L’objectif est de récupérer le ballon dans 
le camp adverse.
Comptage des points : 1 point pour chaque but marqué, 1 point 
supplémentaire si la récupération du ballon a été effectuée dans le 
camp adverse.
Séquence : 15’ (4 x 3’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence et en changeant 
les adversaires.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). Féliciter les enfants lors des récupérations effec
tuées, des courses de cadrage en avançant sur le porteur de balle 
adverse et des courses de retour dans leur zone concernée à 
la perte du ballon. Modifier les équipes ou les adversaires di
rects si la différence de buts entre les 2 équipes est supérieure à 3.`,
        variables: `Si la récupération est effectuée en zone protégée suivie d’un but, 
alors le but compte double.`,
        marqueurs: [{ x: 51.1, y: 47.8, type: 'ballon' }, { x: 31.7, y: 44.8, type: 'attaquant' }, { x: 67.2, y: 25.4, type: 'attaquant' }, { x: 50.4, y: 53.6, type: 'attaquant' }, { x: 66.0, y: 67.8, type: 'attaquant' }, { x: 23.7, y: 24.2, type: 'defenseur' }, { x: 34.2, y: 69.1, type: 'defenseur' }, { x: 63.4, y: 31.7, type: 'defenseur' }, { x: 64.7, y: 82.5, type: 'defenseur' }, { x: 59.0, y: 92.9, type: 'defenseur' }, { x: 46.7, y: 92.9, type: 'attaquant' }, { x: 50.8, y: 89.5, type: 'attaquant' }, { x: 51.0, y: 6.1, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `1 contre 1`,
        surface: `21 x 20`,
        objectif: `Défendre son but et récupérer le ballon pour attaquer.`,
        consignes: `Les enfants se trouvent au niveau des portes de couleur à droite ou 
à gauche de leur but. L’éducateur a deux ballons dans les mains. 
Au signal de l’éducateur, il transmet le ballon au 1er joueur rouge 
ou bleu (ballon dosé donné à la main dans les pieds du joueur ou 
devant lui). Le joueur ayant le ballon doit aller marquer dans le but 
adverse en éliminant son adversaire. Si l’adversaire récupère le 
ballon, il tente de marquer à son tour. À ce moment-là, le joueur qui 
vient de perdre le ballon défend. Si le ballon est récupéré par le GB 
ou si le ballon sort en touche ou en sortie de but, l’éducateur injecte 
un 2ème ballon en criant «Ballon magique» pour l’attaquant concerné.
1 point si but dans le jeu. 
2 points si but après une récupération.
À la fin de la séquence, les enfants quittent le terrain par les portes 
latérales et on recommence avec 2 autres.
Séquence : 15’ (maximum 30’’ par passage) - 1 à 2 ballons.`,
        rotations: `Lorsque tous les enfants sont passés, on change les joueurs 
gardien de but et on inverse les rôles, la 1ère passe sera donnée 
à l’autre équipe. Si le nombre de joueurs est supérieur à 10, faire 
doubler certains enfants.`,
        vigilance: `Ne pas donner le ballon magique, toujours à la même équipe. 
Donner le ballon à un joueur l’ayant eu le moins souvent. Modifier 
l’ordre des passages d’une équipe (= ne pas toujours jouer contre 
les mêmes adversaires). Défendre l’axe ballon-but.`,
        variables: `À l’issue des 2 séries, les joueurs sont positionnés à gauche de leur 
but. 
E
G
G
notes`,
        marqueurs: [{ x: 53.6, y: 48.1, type: 'ballon' }, { x: 56.1, y: 23.0, type: 'attaquant' }, { x: 56.2, y: 18.8, type: 'attaquant' }, { x: 16.1, y: 77.4, type: 'defenseur' }, { x: 12.9, y: 80.2, type: 'defenseur' }, { x: 54.3, y: 81.7, type: 'ballon' }, { x: 30.0, y: 77.5, type: 'plot' }, { x: 32.2, y: 77.0, type: 'plot' }, { x: 39.0, y: 48.9, type: 'plot' }, { x: 53.3, y: 28.1, type: 'attaquant' }, { x: 53.3, y: 16.0, type: 'attaquant' }, { x: 17.7, y: 83.4, type: 'defenseur' }, { x: 17.7, y: 71.3, type: 'defenseur' }, { x: 44.0, y: 60.5, type: 'plot' }, { x: 19.3, y: 48.1, type: 'ballon' }, { x: 51.2, y: 48.3, type: 'ballon' }, { x: 59.1, y: 18.1, type: 'attaquant' }, { x: 14.4, y: 73.4, type: 'defenseur' }, { x: 11.7, y: 75.7, type: 'defenseur' }, { x: 59.2, y: 23.7, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `ballon magique 2 contre 2`,
        surface: `27 x 28`,
        objectif: `Attaquer et défendre en 2 contre 2.`,
        consignes: `Les enfants se trouvent au point de corner à droite et à gauche de 
leur but. L’éducateur a 2 ballons dans ses mains. Au signal de 
l’éducateur, 2 joueurs (1 à droite et 1 à gauche de leur but) de 
chaque équipe rentrent dans le terrain. L’éducateur choisit de faire 
une passe à l’un ou l’autre des joueurs. Les joueurs de l’équipe 
ayant le ballon doivent aller marquer dans le but  Si les adver
saires récupèrent le ballon, ils tentent de marquer à leur tour. Si le 
ballon est récupéré par le GB, il relance à l’un de ses partenaires. 
Si le ballon sort en touche ou en sortie de but, l’éducateur injecte 
un 2ème ballon en criant «Ballon magique». Les joueurs se dis
putent alors ce ballon. À la fin de la séquence, les enfants quittent 
le terrain par les portes latérales en effectuant des appuis dans 
l’échelle de rythme et en recul frein.
Comptage des points : nombre de but.
Séquence : 15’ (maximum 45’’ par passage) - 1 à 2 ballons.`,
        rotations: `Lorsque tous les enfants sont passés 2 fois, on change les gardiens 
de but. Si le nombre de joueurs est supérieur à 10, faire doubler 
certains enfants.`,
        vigilance: `Ne pas donner le ballon toujours à la même équipe. Donner le 
ballon à un joueur l’ayant eu le moins souvent. Modifier l’ordre des 
passages d’une équipe (= ne pas toujours jouer contre les mêmes 
adversaires).`,
        variables: `L’éducateur donne le ballon en faisant une passe au pied. Varier 
les appuis dans l’échelle en fonction de leur niveau. Sous forme de 
course dans les échelles et pour le recul frein.`,
        marqueurs: [{ x: 53.5, y: 48.2, type: 'ballon' }, { x: 75.1, y: 82.9, type: 'attaquant' }, { x: 74.3, y: 13.2, type: 'attaquant' }, { x: 72.2, y: 84.6, type: 'attaquant' }, { x: 74.5, y: 9.0, type: 'attaquant' }, { x: 16.0, y: 83.9, type: 'defenseur' }, { x: 12.8, y: 86.8, type: 'defenseur' }, { x: 54.2, y: 81.8, type: 'ballon' }, { x: 29.9, y: 77.6, type: 'plot' }, { x: 32.1, y: 77.2, type: 'plot' }, { x: 48.4, y: 54.3, type: 'plot' }, { x: 71.5, y: 18.2, type: 'attaquant' }, { x: 71.5, y: 6.1, type: 'attaquant' }, { x: 17.6, y: 90.0, type: 'defenseur' }, { x: 17.6, y: 77.9, type: 'defenseur' }, { x: 43.9, y: 60.6, type: 'plot' }, { x: 19.2, y: 48.2, type: 'ballon' }, { x: 69.7, y: 48.2, type: 'ballon' }, { x: 17.6, y: 18.5, type: 'defenseur' }, { x: 17.6, y: 6.4, type: 'defenseur' }, { x: 71.3, y: 90.0, type: 'attaquant' }, { x: 71.3, y: 77.9, type: 'attaquant' }, { x: 26.9, y: 20.7, type: 'plot' }, { x: 61.8, y: 77.6, type: 'plot' }, { x: 16.2, y: 12.1, type: 'defenseur' }, { x: 13.7, y: 15.5, type: 'defenseur' }, { x: 14.5, y: 92.0, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 18,
    titre: `JE FEINTE ET J’ÉLIMINE UN ADVERSAIRE QUI ARRIVE SUR LE CÔTÉ.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Lorsque je pratique un sport, je dois 
connaître ses règles du jeu afin de pouvoir 
le pratiquer dans les meilleures conditions. 
Je veille à ne pas blesser mon adversaire, 
les tacles sont tolérés et mon éducateur 
m’explique systématiquement la faute 
quand elle est grossière.`,
    vocabulaire: `Je fais semblant
Je feinte
Je dribble`,
    exercices: [
      {
        id: 1,
        titre: `funino`,
        surface: `27 x 28`,
        objectif: `Éliminer un joueur.`,
        consignes: `Jeu libre en 4 contre 4. Les règles sont identiques à celles des 
rencontres. Chaque équipe a 2 petits buts à attaquer et à défendre. 
Il n’y a pas de gardien de but. 
Possibilité de marquer uniquement de la zone de la relance proté
gée (8m).
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (8 x 1’30’’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence.`,
        vigilance: `Faire respecter les règles du jeu 
Féliciter les enfants lors des feintes, dribbles et passes tentées ou 
réussies. 
Modifier les équipes ou les adversaires directs si la différence 
de buts entre les 2 équipes est supérieure à 3.`,
        variables: `Cloisonner les joueurs lorsque leur équipe n’a pas le ballon mais 
ils peuvent se déplacer et jouer dans une autre zone lorsque leur 
équipe est en possession du ballon.`,
        marqueurs: [{ x: 50.7, y: 46.5, type: 'ballon' }, { x: 36.0, y: 46.5, type: 'attaquant' }, { x: 43.3, y: 22.9, type: 'attaquant' }, { x: 52.0, y: 40.7, type: 'attaquant' }, { x: 42.1, y: 72.7, type: 'attaquant' }, { x: 28.1, y: 46.5, type: 'defenseur' }, { x: 35.2, y: 66.6, type: 'defenseur' }, { x: 45.8, y: 48.3, type: 'defenseur' }, { x: 39.6, y: 17.7, type: 'defenseur' }, { x: 37.2, y: 92.1, type: 'defenseur' }, { x: 42.1, y: 92.1, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `le béret`,
        surface: `36 x 28`,
        objectif: `Attaquer et défendre en 1 contre 1.`,
        consignes: `Les joueurs partent en simultané à l’appel du numéro. Le joueur 
se saisit le plus rapidement possible du ballon qui se trouve dans 
le cerceau et conduit le ballon vers le but adversaire pour tirer au 
but. Le tir n’est possible qu’après avoir franchi la ligne (8m). Le 
défenseur peut partir dès que l’attaquant a touché le ballon. Un 
ballon est repositionné dans le cerceau et on enchaîne avec un 2ème 
numéro.  
1 point est donné au joueur ayant tiré en 1er. 
1 point supplémentaire est donné quand le but est marqué. 
12 ballons joués par manche.
L’équipe qui a le plus de points remporte la manche.
Séquence :  15’ (maximum 30’’ par passage).`,
        rotations: `Changer les positions des 4 joueurs et le gardien de but. Changer 
les numéros des joueurs en fonction des manches et des résultats. 
Changer de camp à chaque manche. Changer les défenseurs au 
bout de 3 passages.`,
        vigilance: `Gérer l’enchaînement des courses. Bien conduire son ballon pour 
se rapprocher du but le plus vite possible et pour tirer. Gérer la 
première touche de balle pour sortir le ballon du cerceau et aller 
vers l’avant. Tirer après la ligne pointillée. Prévoir une réserve de 
ballons à proximité des cerceaux. Donner les mêmes numéros à 
des joueurs de même niveau.`,
        variables: `Rapprocher le départ du défenseur.
Enchaîner avec un deuxième ballon.
G
G
1
3
4
2
1
4
2
3
5m
5m
E
notes`,
        marqueurs: [{ x: 50.0, y: 49.2, type: 'ballon' }, { x: 84.0, y: 49.3, type: 'but' }, { x: 16.1, y: 48.9, type: 'but' }, { x: 49.8, y: 5.1, type: 'attaquant' }, { x: 55.8, y: 5.4, type: 'attaquant' }, { x: 58.0, y: 92.5, type: 'attaquant' }, { x: 52.8, y: 5.3, type: 'attaquant' }, { x: 41.9, y: 93.4, type: 'defenseur' }, { x: 40.7, y: 4.4, type: 'defenseur' }, { x: 45.2, y: 93.0, type: 'defenseur' }, { x: 48.2, y: 92.7, type: 'defenseur' }, { x: 51.0, y: 27.5, type: 'plot' }, { x: 50.1, y: 68.6, type: 'plot' }, { x: 32.6, y: 37.0, type: 'plot' }, { x: 62.3, y: 9.9, type: 'plot' }, { x: 62.3, y: 30.9, type: 'plot' }, { x: 62.3, y: 67.8, type: 'plot' }, { x: 62.3, y: 88.8, type: 'plot' }, { x: 46.6, y: 52.6, type: 'ballon' }, { x: 55.0, y: 90.6, type: 'attaquant' }, { x: 62.7, y: 90.9, type: 'attaquant' }, { x: 37.5, y: 7.1, type: 'defenseur' }, { x: 45.2, y: 7.4, type: 'defenseur' }, { x: 38.4, y: 28.1, type: 'plot' }],
      },
      {
        id: 3,
        titre: `l’épervier`,
        surface: `36 x 28`,
        objectif: `Feinter et éliminer un adversaire venant de côté.`,
        consignes: `Les éperviers (en jaune) lancent le jeu en annonçant « épervier en 
chasse » puis doivent toucher ou récupérer les ballons des oiseaux. 
Les oiseaux deviennent éperviers également s’ils sont touchés ou 
ont perdu leur ballon.
Temps 1 : motricité sans ballon. Les oiseaux (bleus) doivent se 
déplacer en passant par une porte sans se faire toucher par l’éper
vier (qui démarre sur le côté du terrain) .
Temps 2 : avec ballon. Les oiseaux (bleus) doivent conduire leur 
ballon sans se le faire prendre par l’épervier (départ coté) et mar
quer dans le but
Comptage des points : 1 point par manche gagné.
Séquence : 15’ (5’ de motricité sans ballon et 10’ avec ballon).`,
        rotations: `On change les éperviers à chaque manche, le vainqueur de la par
tie précédente devient épervier.`,
        vigilance: `Conduire le ballon proche du joueur. Toucher de nombreuses 
fois le ballon pour le maîtriser. Essayer d’éviter les éperviers 
lorsque ceux-ci viennent lui prendre le ballon (dribble).`,
        variables: `Mettre le ballon dans les mains des oiseaux pour la motricité
Les éperviers courent avec le ballon dans les mains.`,
        marqueurs: [{ x: 49.9, y: 50.0, type: 'ballon' }, { x: 51.2, y: 7.7, type: 'plot' }, { x: 21.0, y: 14.4, type: 'defenseur' }, { x: 21.0, y: 23.7, type: 'defenseur' }, { x: 21.0, y: 34.2, type: 'defenseur' }, { x: 21.0, y: 44.3, type: 'defenseur' }, { x: 21.0, y: 54.5, type: 'defenseur' }, { x: 21.0, y: 62.4, type: 'defenseur' }, { x: 21.0, y: 72.8, type: 'defenseur' }, { x: 21.0, y: 83.7, type: 'defenseur' }, { x: 50.6, y: 91.8, type: 'plot' }, { x: 30.9, y: 31.8, type: 'attaquant' }, { x: 30.9, y: 19.7, type: 'attaquant' }, { x: 30.9, y: 80.6, type: 'attaquant' }, { x: 30.9, y: 68.5, type: 'attaquant' }, { x: 69.4, y: 31.9, type: 'attaquant' }, { x: 69.4, y: 19.8, type: 'attaquant' }, { x: 69.4, y: 80.7, type: 'attaquant' }, { x: 69.4, y: 68.6, type: 'attaquant' }, { x: 46.3, y: 30.5, type: 'plot' }, { x: 42.3, y: 72.2, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 19,
    titre: `JE JOUE AVEC MON PARTENAIRE QUI EST À CÔTÉ DE MOI ET JE ME DÉPLACE POUR RECEVOIR LE BALLON.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE COLLECTIVEMENT`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Lorsque je pratique un sport, je dois 
connaître ses règles du jeu afin de pouvoir 
le pratiquer dans les meilleures conditions. 
Je connais les droits du gardien de but, la 
zone dans laquelle le gardien peut prendre 
le ballon à la main et le fait que le gardien 
peut évoluer sur l’ensemble du terrain avec 
les pieds comme tout autre joueur.`,
    vocabulaire: `J’accompagne mon partenaire
Je suis disponible`,
    exercices: [
      {
        id: 1,
        titre: `la grande traversée`,
        surface: `36 x 28`,
        objectif: `Traverser plusieurs rivières pour aller marquer.`,
        consignes: `Le GB passe à l’un de ses partenaires. Dès le contrôle effectué, 
l’attaquant adverse, placé sur la ligne de surface, peut défendre.
Le défenseur rouge 1 ne défend que dans sa moitié offensive.
Les autres joueurs rouges sont placés sur les lignes et peuvent dé
fendre dès que le ballon franchit celle-ci. Si les rouges récupèrent, 
ils peuvent marquer dans le but adverse.
Comptage des points : but marqué = 1 point. But marqué avec 
présence de 3 bleus en zone offensive = 3 points
Séquence : 15’ (4 x 3’).`,
        rotations: `Lorsque les bleus ont terminé l’action, au tour des rouges.
Changer les positions à chaque séquence.`,
        vigilance: `Occuper l’espace en largeur et profondeur pour pouvoir se donner 
du temps pour contrôler efficacement.
Accompagner le porteur du ballon = importance de la continuité de 
l’action.`,
        variables: `Varier les départs des défenseurs rouges (rapprocher ou éloigner 
des 2 attaquants selon le niveau).`,
        marqueurs: [{ x: 50.5, y: 48.4, type: 'ballon' }, { x: 50.4, y: 24.9, type: 'attaquant' }, { x: 50.4, y: 72.6, type: 'attaquant' }, { x: 70.5, y: 48.6, type: 'attaquant' }, { x: 25.0, y: 18.7, type: 'defenseur' }, { x: 24.8, y: 78.8, type: 'defenseur' }, { x: 65.6, y: 17.6, type: 'defenseur' }, { x: 67.4, y: 80.9, type: 'defenseur' }, { x: 17.1, y: 48.4, type: 'but' }, { x: 84.5, y: 47.4, type: 'but' }, { x: 23.5, y: 22.0, type: 'plot' }, { x: 31.1, y: 47.4, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Aider son partenaire.`,
        consignes: `2 contre 2 en zone axiale – 1 contre 1 dans les zones latérales (pas 
de marquage individuel, chacun restant dans sa moitié de terrain 
comme indiqué sur le schéma). Lorsqu’on transmet le ballon dans 
un couloir, un partenaire peut aider, on peut alors joue à 2 contre 
1 (exemple sur le schéma : J1 rouge transmet à J2 qui essaie d’al
ler marquer).
Possibilités de défense de J1 bleu (à moduler selon le niveau) : sur 
le temps de la passe / sur la prise de balle de J2 rouge.
Jouer dans le couloir n’est pas une obligation, les 2 joueurs dans 
l’axe peuvent jouer le 2 contre 2.
Comptage des points : but = 1 point. But en étant passé par un 
couloir = 2 points.
Séquence : 15’ (4 x 3’).`,
        rotations: `Changer régulièrement les positions des joueurs (à chaque sé
quence).`,
        vigilance: `Aider le partenaire dans la zone. Tenter de déséquilibrer à 2 contre 1.`,
        variables: `Changer les postes des joueurs.
Rapprocher J1 bleu de J2 rouge (à partir de la médiane).
Faire rentrer le joueur à l’opposé.
G
G
1
G
G
1
1
2
notes`,
        marqueurs: [{ x: 50.0, y: 48.4, type: 'ballon' }, { x: 57.3, y: 19.5, type: 'attaquant' }, { x: 60.0, y: 54.1, type: 'defenseur' }, { x: 60.0, y: 39.7, type: 'defenseur' }, { x: 41.0, y: 39.7, type: 'attaquant' }, { x: 16.5, y: 48.4, type: 'but' }, { x: 84.1, y: 48.4, type: 'but' }, { x: 38.9, y: 53.2, type: 'plot' }, { x: 56.6, y: 75.8, type: 'plot' }, { x: 43.5, y: 15.7, type: 'defenseur' }, { x: 41.5, y: 53.8, type: 'attaquant' }, { x: 41.5, y: 82.6, type: 'defenseur' }, { x: 58.6, y: 79.1, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `2 contre 1`,
        surface: `36 x 28`,
        objectif: `Franchir la zone en 2 contre 1 pour marquer.`,
        consignes: `Le GB transmet au joueur 1 qui doit aller marquer dans le but 
adverse. Il peut éliminer ou jouer avec son partenaire, qui peut 
rejouer avec lui ou chercher à marquer le but. Le défenseur peut 
rentrer dans la zone lorsque le ballon est transmis. Si le défenseur 
récupère, il peut marquer dans le mini but (1 point).
Comptage des points : tir cadré = 1 point. But = 2 points.
Séquence : 15’ (4 x 3’).`,
        rotations: `L’attaquant qui a démarré l’action passe ensuite dans la zone 
d’appui.
Changer les défenseurs toutes les 3’.`,
        vigilance: `Ne pas obliger la passe au partenaire. Laisser les joueurs s’adapter
Fixer le défenseur avant de donner ou dribbler.
Faire démarrer les 2 côtés en même temps pour que les gardiens 
de but soient disponibles pour arrêter le tir.`,
        variables: `Agrandir la zone d’appui (= agrandir la zone d’intervention du 
défenseur).
L’équipe qui marque en 1er = 2 points / but marqué = + 1 pt.
Débuter l’action par une passe dans la zone.
Doubler le nombre de points quand les 2 joueurs sont dans la zone 
protégée ou moitié de terrain offensive.`,
        marqueurs: [{ x: 50.0, y: 48.9, type: 'ballon' }, { x: 49.3, y: 30.4, type: 'attaquant' }, { x: 51.5, y: 65.4, type: 'defenseur' }, { x: 70.0, y: 4.0, type: 'defenseur' }, { x: 50.0, y: 85.9, type: 'attaquant' }, { x: 16.5, y: 21.0, type: 'but' }, { x: 83.0, y: 75.4, type: 'but' }, { x: 27.1, y: 62.0, type: 'plot' }, { x: 76.8, y: 30.7, type: 'plot' }, { x: 50.0, y: 14.2, type: 'defenseur' }, { x: 28.5, y: 66.8, type: 'attaquant' }, { x: 75.9, y: 26.2, type: 'defenseur' }, { x: 26.7, y: 92.7, type: 'attaquant' }, { x: 57.2, y: 28.4, type: 'plot' }, { x: 51.9, y: 17.6, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 20,
    titre: `SÉANCE RÉCRÉATIVE`,
    phase: 'recreatif',
    phaseLabel: `SÉANCE RÉCRÉATIVE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Terrain 1
Terrain 2
4m
4m
notes
3
match
surface
36 x 28
OBJECTIF
Match 5 contre 5.
BUT(S)- CONSIGNES
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).
GESTION DES ROTATIONS
Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.
VEILLER À
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
4
match
surface
36 x 28
OBJECTIF
Match 5 contre 5.
BUT(S)- CONSIGNES
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).
GESTION DES ROTATIONS
Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.
VEILLER À
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre`,
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren-
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (4 x 3’). 30’’ de récupération entre les séquences.`,
        rotations: `Prévoir les rotations pour les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen-
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et faire 
monter et descendre sur le nombre x de terrains. Obliger les en-
fants à être dans les zones des 4m pour pouvoir marquer. Valoriser 
par 2 points si le but est marqué de la zone des 4m. Empêcher 
l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.9, y: 48.7, type: 'ballon' }, { x: 26.5, y: 67.8, type: 'attaquant' }, { x: 42.3, y: 63.4, type: 'attaquant' }, { x: 81.2, y: 66.8, type: 'attaquant' }, { x: 65.5, y: 67.8, type: 'attaquant' }, { x: 26.5, y: 25.1, type: 'defenseur' }, { x: 43.4, y: 23.0, type: 'defenseur' }, { x: 67.5, y: 27.1, type: 'defenseur' }, { x: 81.2, y: 28.4, type: 'defenseur' }, { x: 53.7, y: 30.4, type: 'defenseur' }, { x: 17.0, y: 18.7, type: 'plot' }, { x: 17.0, y: 8.5, type: 'plot' }, { x: 16.7, y: 87.9, type: 'plot' }, { x: 16.7, y: 77.7, type: 'plot' }, { x: 53.0, y: 56.8, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `atelier pef`,
        surface: `36 x 28`,
        consignes: `PROPOSITION N°1
Objectif de l’atelier : sensibiliser sur les règles du jeu par l’intermé-
diaire d’un atelier de questions/réponses.
PROPOSITION N°2
Objectif de l’atelier : sensibiliser sur les fautes à ne pas commettre 
par l’intermédiaire d’un atelier de signalisation.
thème
SÉANCE RÉCRÉATIVE
message éducatif
JEU PROGRAMME ÉDUCATIF FÉDÉRAL (PEF)
Terrain 1
Terrain 2
4m
4m
notes`,
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre
séance n°
20
phase de jeu
SÉANCE RÉCRÉATIVE
catégorie
U8-U9
effectif
10
durée
75 min
date`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
  {
    id: 21,
    titre: `JE FEINTE ET J’ÉLIMINE UN ADVERSAIRE QUI A DU RETARD.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `La quantité de déchets est une menace 
pour l’environnement, il est donc indispen
sable de les réduire et de les trier pour les 
recycler. Je viens à l’entraînement avec ma 
gourde individuelle et non une bouteille 
d’eau en plastique.`,
    vocabulaire: `Je feinte
Je dribble`,
    exercices: [
      {
        id: 1,
        titre: `2 contre 2 stop-ball`,
        surface: `18 x 28`,
        objectif: `S’opposer en 2 contre 2 pour marquer un point.`,
        consignes: `Chaque équipe marque en stop-ball derrière la ligne adverse, en 
ayant traversé obligatoirement en conduite de balle la zone déli
mitée devant la ligne de stop-ball. Les défenseurs ne peuvent en
trer dans cette zone pour intervenir qu’après que l’attaquant 
en possession du ballon soit entré. Il ne peut y être installé et 
attendre dans cette zone.
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (8 x 1’30’’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). 
Féliciter les enfants lors des buts marqués et des conduites et 
dribbles réussis. 
Modifier les équipes si la différence de buts entre les 2 équipes est 
supérieure à 3.`,
        variables: `Agrandir la zone limitée pour les défenseurs dans le sens de la 
longueur.
Les points marqués en stop-ball sans passer par la zone délimitée 
comptent 1 point, en passant par la zone 2 points.`,
        marqueurs: [{ x: 49.5, y: 48.4, type: 'ballon' }, { x: 60.1, y: 27.4, type: 'attaquant' }, { x: 79.0, y: 66.5, type: 'defenseur' }, { x: 76.4, y: 34.9, type: 'defenseur' }, { x: 39.7, y: 33.6, type: 'attaquant' }, { x: 24.0, y: 32.3, type: 'defenseur' }, { x: 31.6, y: 61.7, type: 'attaquant' }, { x: 62.6, y: 54.5, type: 'attaquant' }, { x: 47.0, y: 92.1, type: 'attaquant' }, { x: 35.9, y: 66.5, type: 'defenseur' }, { x: 52.8, y: 91.9, type: 'defenseur' }],
      },
      {
        id: 2,
        titre: `1 contre 1 avec retard`,
        surface: `27 x 28`,
        objectif: `Feinter et éliminer un joueur qui a du retard.`,
        consignes: `Les enfants sont répartis aux 4 points de corner (couleur à l’op
posé). L’éducateur a deux ballons dans ses mains. Au signal de 
l’éducateur, il transmet le ballon au 1er joueur rouge ou bleu (ballon 
dosé donné à la main dans les pieds du joueur ou devant lui).
Le joueur ayant le ballon doit aller marquer dans le but adverse en 
gérant le défenseur qui arrive dans son dos, qui a le droit de partir 
dès que l’attaquant touche le ballon. 
Si l’adversaire récupère le ballon, il tente de marquer à son tour. 
À ce moment-là, le joueur qui vient de perdre le ballon peut dé
fendre. 
Si le ballon est récupéré par le GB, il relance à son partenaire. Sur 
la séquence suivante, ce sont les joueurs côté droit qui partent.
À la fin de la séquence, les enfants quittent le terrain par les portes 
latérales et on recommence avec 2 autres. 
Séquence : 15’ (maximum 20’’ par passage).`,
        rotations: `Lorsque tous les enfants sont passés, on change les joueurs 
gardien de but. Si le nombre de joueurs est supérieur à 8, faire 
doubler certains enfants.`,
        vigilance: `Ne pas donner le ballon toujours à la même équipe.
Donner le ballon à un joueur l’ayant eu le moins souvent. 
Modifier l’ordre des passages d’une équipe (= ne pas toujours jouer 
contre les mêmes adversaires).`,
        variables: `Permettre au défenseur de venir défendre dès la passe effectuée.
E
G
G
notes`,
        marqueurs: [{ x: 53.5, y: 49.2, type: 'ballon' }, { x: 77.6, y: 86.3, type: 'attaquant' }, { x: 73.2, y: 85.6, type: 'attaquant' }, { x: 11.8, y: 13.6, type: 'attaquant' }, { x: 16.0, y: 84.9, type: 'defenseur' }, { x: 12.8, y: 87.7, type: 'defenseur' }, { x: 54.2, y: 82.8, type: 'ballon' }, { x: 29.9, y: 78.6, type: 'plot' }, { x: 32.1, y: 78.1, type: 'plot' }, { x: 71.5, y: 19.2, type: 'defenseur' }, { x: 71.5, y: 7.1, type: 'defenseur' }, { x: 17.6, y: 90.9, type: 'defenseur' }, { x: 17.6, y: 78.8, type: 'defenseur' }, { x: 43.9, y: 61.6, type: 'plot' }, { x: 19.2, y: 49.2, type: 'ballon' }, { x: 69.7, y: 49.2, type: 'ballon' }, { x: 17.6, y: 19.5, type: 'attaquant' }, { x: 17.6, y: 7.4, type: 'attaquant' }, { x: 71.3, y: 90.9, type: 'attaquant' }, { x: 71.3, y: 78.8, type: 'attaquant' }, { x: 45.5, y: 41.8, type: 'plot' }, { x: 75.1, y: 11.0, type: 'defenseur' }, { x: 73.2, y: 15.2, type: 'defenseur' }, { x: 15.3, y: 13.1, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `jeu spécial retard`,
        surface: `27 x 28`,
        objectif: `Feinter et éliminer un adversaire qui a du retard.
Conduire sous pression.`,
        consignes: `L’éducateur transmet le ballon au joueur bleu 1 qui tente de mar
quer dans l’un des 2 buts. Au moment de la passe (ou du contrôle 
en fonction du niveau), le joueur rouge 1 s’élance pour empêcher le 
joueur bleu 1 de marquer.
Dès l’action terminée, l’éducateur transmet un ballon au joueur 
rouge 2 qui tente d’aller marquer dans un des 2 buts, pourchassé 
par le bleu 1
Dès cette 2ème action terminée, le bleu 2 s’élance à son tour pour 
aller marquer et c’est le rouge 2 qui défend. 
1 manche correspond à l’enchaînement des 3 courses.
Comptage des points : 1 point par manche gagnée + 1 point par 
but marqué.
Séquence : 15’ (maximum 30’’ par enfant).`,
        rotations: `Rotation après 4 passages par équipe.`,
        vigilance: `Adapter la conduite selon la course de l’adversaire.
Prendre l’information.`,
        variables: `Finir sur un grand but avec GB.
Rapprocher ou éloigner le départ des adversaires selon le niveau 
des enfants.
Rester sur du 1 contre 1 ou permettre le 2 contre 1 puis le 2 contre 2.`,
        marqueurs: [{ x: 51.4, y: 48.5, type: 'ballon' }, { x: 72.1, y: 51.3, type: 'attaquant' }, { x: 71.3, y: 45.1, type: 'attaquant' }, { x: 17.6, y: 93.2, type: 'attaquant' }, { x: 59.8, y: 6.8, type: 'defenseur' }, { x: 39.2, y: 85.4, type: 'ballon' }, { x: 47.0, y: 63.2, type: 'plot' }, { x: 67.1, y: 47.2, type: 'attaquant' }, { x: 20.1, y: 90.2, type: 'attaquant' }, { x: 67.3, y: 6.8, type: 'defenseur' }, { x: 67.4, y: 89.9, type: 'defenseur' }, { x: 67.3, y: 78.6, type: 'defenseur' }, { x: 15.7, y: 89.9, type: 'attaquant' }, { x: 24.5, y: 90.2, type: 'attaquant' }, { x: 67.3, y: 40.5, type: 'attaquant' }, { x: 67.3, y: 55.2, type: 'attaquant' }, { x: 63.5, y: 6.5, type: 'defenseur' }, { x: 56.9, y: 75.6, type: 'defenseur' }, { x: 70.8, y: 84.0, type: 'defenseur' }, { x: 67.7, y: 83.3, type: 'defenseur' }, { x: 66.0, y: 4.4, type: 'defenseur' }, { x: 54.8, y: 76.8, type: 'plot' }, { x: 41.2, y: 72.4, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 22,
    titre: `JE M’ORGANISE AVEC MON PARTENAIRE POUR PRO TÉGER LE BUT ET RÉCUPÉRER LE BALLON.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `La quantité de déchets est une menace pour 
l’environnement, il est donc indispensable de 
les réduire et de les trier pour les recycler. 
J’identifie les différents types de déchets 
existants (les déchets organiques, les déchets 
recyclables et les déchets toxiques) et les 
couleurs associées des poubelles présentes 
autour du terrain et dans les vestiaires.`,
    vocabulaire: `Je cadre le porteur du ballon`,
    exercices: [
      {
        id: 1,
        titre: `2 contre 2 avec gardien`,
        surface: `18 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupérer 
le ballon.`,
        consignes: `But : empêcher l’adversaire de tirer.
Consignes : gestion d’un 2 contre 2 + gardien de but. Mise en place 
de la relance protégée. Les tirs ne peuvent se faire qu’en zone 
adverse. Pas de touche, ni corner, ni 6 mètres. L’éducateur injecte 
le ballon selon le principe «ballon magique» en orientant ses choix 
prioritairement vers le gardien (on repart du gardien).
Comptage des points : but = 1 point. Récupérer en zone adverse = 
1 point.
Séquence : 15’ (12 x 1’).`,
        rotations: `Changer les joueurs à chaque séquence (gardien compris).`,
        vigilance: `Défendre à 2 en étant proche l’un de l’autre.
Aller vite vers le joueur adverse qui a le ballon («CADRER»).`,
        variables: `Quand l’équipe marque, elle conserve le ballon (qui repart de leur 
gardien).
Permettre à un défenseur d’intervenir dans la zone adverse lors de 
la relance protégée.`,
        marqueurs: [{ x: 50.0, y: 46.0, type: 'ballon' }, { x: 62.3, y: 25.5, type: 'attaquant' }, { x: 62.3, y: 72.4, type: 'attaquant' }, { x: 57.8, y: 89.5, type: 'attaquant' }, { x: 38.0, y: 90.1, type: 'defenseur' }, { x: 33.1, y: 90.1, type: 'defenseur' }, { x: 42.2, y: 20.4, type: 'defenseur' }, { x: 43.5, y: 70.3, type: 'defenseur' }, { x: 33.1, y: 46.9, type: 'ballon' }, { x: 68.1, y: 46.5, type: 'ballon' }, { x: 49.9, y: 85.9, type: 'ballon' }, { x: 62.3, y: 89.5, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `béret 2-2 ou 3-3`,
        surface: `18 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupérer 
le ballon.`,
        consignes: `But : empêcher l’adversaire de tirer.
Consignes : alternance de 2 contre 2 et 3 contre 3. Opposition 
définie selon la méthode «Béret» (on appelle 2 ou 3 numéros - at
tribués préalablement aux joueurs de chaque équipe). Au signal 
l’éducateur donne un ballon au sol à un joueur au choix. Quand un 
but est marqué ou si le ballon est sorti, l’éducateur injecte un 2ème 
ballon selon le principe «ballon magique». Les tirs ne peuvent se 
faire qu’en zone adverse. Faire des manches de 5 répétitions.
Comptage des points : but = 1 point.
Séquence : 15’ (5 x 2’30’’).`,
        rotations: `Changer les gardiens et numéros de joueurs à chaque manche.`,
        vigilance: `Si mon équipe défend, vite se positionner entre notre but et le 
ballon.
Aller vite vers le joueur adverse qui a le ballon («CADRER»).`,
        variables: `Départ des joueurs en position assise, couché, dos au jeu, etc.
Tester la vitesse de réaction.
Utilisation du ballon magique.
G
G
E
G
G
E
1
2
2
1
3
4
3
4
notes`,
        marqueurs: [{ x: 49.3, y: 47.7, type: 'ballon' }, { x: 32.4, y: 48.6, type: 'ballon' }, { x: 67.5, y: 48.2, type: 'ballon' }, { x: 49.2, y: 87.5, type: 'ballon' }, { x: 55.4, y: 33.8, type: 'plot' }, { x: 28.2, y: 29.3, type: 'attaquant' }, { x: 71.5, y: 69.9, type: 'attaquant' }, { x: 27.1, y: 72.9, type: 'defenseur' }, { x: 70.9, y: 20.4, type: 'defenseur' }, { x: 38.8, y: 64.7, type: 'plot' }, { x: 69.3, y: 25.1, type: 'defenseur' }, { x: 29.8, y: 71.9, type: 'defenseur' }, { x: 69.3, y: 71.9, type: 'attaquant' }, { x: 29.8, y: 25.1, type: 'attaquant' }, { x: 24.6, y: 24.2, type: 'attaquant' }, { x: 74.0, y: 74.1, type: 'attaquant' }, { x: 72.7, y: 16.2, type: 'defenseur' }, { x: 24.9, y: 77.1, type: 'defenseur' }, { x: 41.6, y: 38.8, type: 'plot' }, { x: 58.9, y: 56.3, type: 'plot' }, { x: 36.8, y: 64.3, type: 'plot' }],
      },
      {
        id: 3,
        titre: `jeu de la brochette`,
        surface: `18 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupérer 
le ballon.`,
        consignes: `But : réaliser un parcours de motricité et marquer.
Consignes : exercice de vivacité. Le joueur A court jusqu’au piquet, 
le contourne et revient au départ, prend la main du joueur B pour 
faire le même parcours en duo (main dans la main). Dès la fin du 
parcours, l’éducateur transmet le ballon à l’équipe la plus rapide 
pour un 2 contre 2.
Comptage des points : but = 1 point.
Séquence : 15’ (maximum 1’ par passage).`,
        rotations: `À chaque passage, un des joueurs qui vient de passer remplace le 
gardien.`,
        vigilance: `Bien réaliser le parcours (changement de direction).
Réagir à la transition (je termine le parcours et je me projette en 
tant qu’attaquant ou défenseur).
L’ordre des joueurs différents (celui qui part en 1er fera plus de 
tours de parcours...).`,
        variables: `Varier la position du parcours (notamment la sortie pour entrer 
dans le terrain).
Faire du 3 contre 3.
Doubler l’atelier pour plus de répétitions (départ en décalage puis 
simultané).`,
        marqueurs: [{ x: 47.7, y: 47.9, type: 'ballon' }, { x: 51.7, y: 5.4, type: 'attaquant' }, { x: 50.9, y: 47.6, type: 'ballon' }, { x: 81.7, y: 47.9, type: 'ballon' }, { x: 44.7, y: 32.9, type: 'ballon' }, { x: 56.4, y: 6.0, type: 'attaquant' }, { x: 67.9, y: 21.3, type: 'plot' }, { x: 64.5, y: 5.0, type: 'attaquant' }, { x: 72.3, y: 92.5, type: 'defenseur' }, { x: 69.4, y: 91.5, type: 'defenseur' }, { x: 59.5, y: 21.1, type: 'plot' }, { x: 67.8, y: 89.4, type: 'defenseur' }, { x: 47.6, y: 89.0, type: 'defenseur' }, { x: 67.8, y: 5.9, type: 'attaquant' }, { x: 47.7, y: 6.5, type: 'attaquant' }, { x: 60.3, y: 5.4, type: 'attaquant' }, { x: 78.3, y: 93.6, type: 'defenseur' }, { x: 64.3, y: 62.6, type: 'plot' }, { x: 83.3, y: 5.9, type: 'attaquant' }, { x: 82.0, y: 93.6, type: 'defenseur' }, { x: 68.7, y: 16.1, type: 'plot' }, { x: 70.2, y: 6.0, type: 'plot' }, { x: 65.5, y: 59.7, type: 'plot' }, { x: 65.0, y: 89.9, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 23,
    titre: `JE CHOISIS D’ÉLIMINER OU PASSER POUR MARQUER UN BUT`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `L’eau est précieuse, je ferme le robinet et 
vérifie qu’il ne goutte pas, je prends une 
douche rapide, c’est plus écologique.`,
    vocabulaire: `Je conduis dans un espace libre
Je conduis pour dribbler un adversaire`,
    exercices: [
      {
        id: 1,
        titre: `4 contre 4`,
        surface: `27 x 28`,
        objectif: `Jouer librement pour marquer des buts.`,
        consignes: `Jeu en 3 contre 3 avec un gardien de but.
Les règles du jeu sont les mêmes que celles des rencontres.
Comptage des points : 1 point par but marqué. 
Séquence : 15’ (5 x 2’).`,
        rotations: `Faire tourner les joueurs sur les différents postes (gardien de but 
compris) à la fin de chaque séquence. 
Donner un numéro à chaque joueur pour faciliter les rotations.`,
        vigilance: `Valoriser les prises de risque pour marquer le but.
Laisser faire les joueurs (prise de décisions et déplacement).`,
        marqueurs: [{ x: 50.7, y: 46.5, type: 'ballon' }, { x: 31.3, y: 46.2, type: 'attaquant' }, { x: 35.1, y: 19.8, type: 'attaquant' }, { x: 37.1, y: 67.3, type: 'attaquant' }, { x: 48.6, y: 41.2, type: 'defenseur' }, { x: 46.1, y: 90.6, type: 'defenseur' }, { x: 60.5, y: 21.1, type: 'defenseur' }, { x: 59.7, y: 64.0, type: 'defenseur' }, { x: 16.8, y: 45.4, type: 'but' }, { x: 68.9, y: 47.0, type: 'ballon' }, { x: 42.1, y: 90.6, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Attaquer un des buts au choix en 2 contre 1.`,
        consignes: `Les joueurs bleus s’échangent le ballon sans se le faire prendre par 
les rouges dans l’espace délimité central. Lorsqu’ils le veulent, 2 
joueurs bleus tentent d’aller marquer dans un des buts (au choix), 
un défenseur rouge peut aller sortir de la zone (2 contre 1).
Le 2ème défenseur et les 2 autres bleus ne participent pas à l’action.
À tout moment, on peut changer de but selon la situation.
Si le défenseur rouge récupère le ballon, il peut le transmettre à 
son partenaire qui va marquer.
Comptage des points : 1 point par but marqué.
Séquence : 15’ (3 x 4’).`,
        rotations: `Intégrer les remplaçants au bout de 2 passages. 
Changer les équipes.`,
        vigilance: `Occuper l’espace pour se donner du temps.
Attaquer à 2 contre 1 dès que possible.
Fixer-dribbler ou fixer-donner.`,
        variables: `Mettre un défenseur fixe sur la ligne rouge ou bleue qui intervient 
dès que le ballon est sorti de la zone centrale. A la récupération, il 
peut jouer avec un de ses partenaires pour aller marquer. 
Permettre le retour d’un défenseur supplémentaire (2 contre 1 + 
1 joueur en retard). Si trop difficile, faire 2 ateliers et faire un 2 
contre 1 au départ dans la zone. Obliger à faire un minimum de 
passes dans la zone. 
G
G
G
G
notes`,
        marqueurs: [{ x: 50.0, y: 47.1, type: 'ballon' }, { x: 55.2, y: 58.4, type: 'attaquant' }, { x: 44.3, y: 74.0, type: 'defenseur' }, { x: 56.4, y: 33.7, type: 'defenseur' }, { x: 46.8, y: 43.0, type: 'attaquant' }, { x: 16.5, y: 47.1, type: 'but' }, { x: 84.1, y: 47.1, type: 'but' }, { x: 42.7, y: 26.2, type: 'defenseur' }, { x: 46.0, y: 90.6, type: 'attaquant' }, { x: 49.3, y: 90.6, type: 'attaquant' }, { x: 58.9, y: 71.9, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `2 contre 1`,
        surface: `36 x 28`,
        objectif: `Marquer le but en 2 contre 1.`,
        consignes: `Le joueur bleu reçoit un ballon de son gardien de but. Il a le choix 
d’éliminer et tirer ou jouer avec son partenaire situé dans la zone 
opposée. Si le défenseur (1) récupère le ballon, il peut relancer 
sur son partenaire (2) qui tente de marquer le but en 1 contre 1 
ou 2 contre 1 si son partenaire l’a accompagné (dans ce cas, les 2 
joueurs bleus ne défendent pas).
Comptage des points : 1 but = 2 points. Récupération + but = 1 
point.
Faire des manches de 8 passages par équipe. 
Séquence : 15’ (maximum 30’’ par passage).`,
        rotations: `Alterner passage bleu, puis rouge à chaque rotation en intégrant 
les joueurs sur le côté. 
Ne pas hésiter à faire s’opposer des joueurs de même niveau.`,
        vigilance: `Laisser le choix au porteur du ballon.
Positionnement du partenaire libre (capacité à adapter sa position 
selon la situation).`,
        variables: `Permettre le retour du 2ème défenseur rouge au signal ou lorsque le 
ballon le dépasse. 
Positionner le partenaire bleu dans la même zone au départ. 
Modifier les positionnements de départ.`,
        marqueurs: [{ x: 50.0, y: 51.8, type: 'ballon' }, { x: 16.6, y: 52.3, type: 'but' }, { x: 84.0, y: 51.5, type: 'but' }, { x: 53.6, y: 28.7, type: 'plot' }, { x: 30.1, y: 51.5, type: 'attaquant' }, { x: 54.1, y: 51.5, type: 'attaquant' }, { x: 63.9, y: 9.9, type: 'defenseur' }, { x: 56.6, y: 69.7, type: 'defenseur' }, { x: 54.1, y: 32.8, type: 'plot' }, { x: 41.3, y: 7.8, type: 'attaquant' }, { x: 59.1, y: 91.7, type: 'defenseur' }, { x: 58.8, y: 20.4, type: 'defenseur' }, { x: 46.5, y: 58.8, type: 'plot' }, { x: 44.5, y: 8.1, type: 'attaquant' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 24,
    titre: `JE M’ORGANISE AVEC MON PARTENAIRE POUR PRO TÉGER LE BUT ET RÉCUPÉRER LE BALLON.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `On vous demande d’avoir de bons réflexes 
sur le terrain, il faut faire la même chose en 
matière d’économie d’énergie. 
La dernière personne à quitter le vestiaire 
éteindra la lumière et fermera la porte du 
vestiaire chauffé.`,
    vocabulaire: `J’identifie le but
Je contrôle
Je tire au but`,
    exercices: [
      {
        id: 1,
        titre: `4 contre 4 - 3 zones`,
        surface: `36 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupé
rer le ballon.`,
        consignes: `L’équipe qui défend doit se trouver sur 2 zones soit Zone 1 et Zone 
2 ou Zone 2 et Zone3. 
L’équipe qui attaque est libre. 
Comptage des points : 
Marquer dans le but central = 2 points. 
Marquer dans les mini-buts  = 1 point. 
Les mini-buts peuvent être défendus par le GB.
Séquence : 15’ (4 x 3’).`,
        rotations: `À chaque séquence, changer les gardiens et les postes.`,
        vigilance: `Créer de la densité entre le ballon et le but. 
Agir sur le porteur.
Cadrer et orienter le porteur. 
Couvrir son partenaire proche.`,
        variables: `Lorsque le ballon franchit la ligne médiane, les défenseurs n’étant 
plus dans leur moitié de terrain ne peuvent plus défendre. 
Garder que le but central.`,
        marqueurs: [{ x: 50.2, y: 49.4, type: 'ballon' }, { x: 49.9, y: 70.0, type: 'attaquant' }, { x: 50.5, y: 31.6, type: 'attaquant' }, { x: 60.5, y: 41.2, type: 'defenseur' }, { x: 39.5, y: 68.6, type: 'defenseur' }, { x: 66.0, y: 48.5, type: 'attaquant' }, { x: 16.6, y: 49.4, type: 'but' }, { x: 84.2, y: 49.4, type: 'but' }, { x: 38.2, y: 29.5, type: 'defenseur' }, { x: 50.2, y: 7.9, type: 'plot' }, { x: 60.5, y: 58.3, type: 'defenseur' }, { x: 49.9, y: 62.9, type: 'plot' }, { x: 50.2, y: 35.3, type: 'plot' }, { x: 49.9, y: 91.0, type: 'plot' }, { x: 70.1, y: 35.3, type: 'plot' }, { x: 86.1, y: 35.6, type: 'plot' }, { x: 30.4, y: 35.3, type: 'plot' }, { x: 14.2, y: 35.3, type: 'plot' }, { x: 70.5, y: 62.7, type: 'plot' }, { x: 86.5, y: 62.9, type: 'plot' }, { x: 30.9, y: 62.7, type: 'plot' }, { x: 14.6, y: 62.7, type: 'plot' }, { x: 30.7, y: 47.0, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Marquer le but en 2 contre 2.`,
        consignes: `2 attaquants dans chaque bande de terrain contre 2 défenseurs. 
La situation débute quand l’attaquant fait une passe ou rentre en 
conduite dans une bande pour jouer le 2 contre 2 et marquer dans 
le but. Si les défenseurs récupèrent, ils doivent aller marquer dans 
un mini but.
Comptage des points : 
Attaquants : marquer dans le grand but = 2 points
Défenseurs :  récupérer = 1 point.
But marqué dans un mini but après récupération = 2 points.
Séquence : 15’ (4 x 3’).`,
        rotations: `À chaque séquence, changer les postes GB, DEF et ATT. 
Fonctionnement par vague, les rouges attaquent pendant une 
séquence complète et ensuite c’est l’inverse.`,
        vigilance: `Créer de la densité entre le ballon et le but.
Agir sur le porteur.
Cadrer et orienter le porteur. 
Couvrir son partenaire proche.`,
        variables: `Sous forme jouée avec le gardien neutre. 
Zone 1
G
G
Zone 2
Zone 3
Bande 1 : 2 contre 2 + 1 GB
G
G
Bande 2 : 2 contre 2 + 1 GB
notes`,
        marqueurs: [{ x: 50.1, y: 48.6, type: 'ballon' }, { x: 51.9, y: 57.3, type: 'attaquant' }, { x: 47.3, y: 37.5, type: 'attaquant' }, { x: 42.1, y: 39.6, type: 'defenseur' }, { x: 44.6, y: 82.7, type: 'defenseur' }, { x: 59.2, y: 25.5, type: 'defenseur' }, { x: 70.0, y: 68.6, type: 'defenseur' }, { x: 70.0, y: 47.7, type: 'attaquant' }, { x: 86.0, y: 48.0, type: 'attaquant' }, { x: 30.4, y: 47.7, type: 'attaquant' }, { x: 14.1, y: 47.7, type: 'attaquant' }, { x: 38.5, y: 71.7, type: 'attaquant' }, { x: 15.7, y: 68.6, type: 'but' }, { x: 83.6, y: 28.6, type: 'but' }, { x: 28.8, y: 24.1, type: 'attaquant' }, { x: 43.8, y: 24.2, type: 'plot' }, { x: 45.0, y: 35.0, type: 'plot' }],
      },
      {
        id: 3,
        titre: `chasse au trésor`,
        surface: `27 x 28`,
        objectif: `Conduire le ballon en le maîtrisant.`,
        consignes: `Pour les pirates (attaquants rouges), l’objectif est d’entrer dans le 
château (dans le carré délimité par les plots) sans se faire toucher 
pour prendre un trésor (ballon). Ramener le trésor en allant mar
quer dans un des deux petits buts. Les chevaliers (joueurs bleus) 
tentent de le récupérer ou de le faire sortir des limites du terrain. 
Si un chevalier stoppe le ballon derrière la ligne rouge zone pro
tégée, il fait prisonnier le pirate dans la zone «prisonnier». Si un 
chevalier touche un pirate sans ballon, il est fait prisonnier. Les 
prisonniers peuvent être libérés en leur tapant dans la main. 
Comptage des points : 
Défenseurs : ballon stoppé = 1 point. 
Attaquants : but marqué = 1 point.
Séquence : 15’ (6 x 2’).`,
        rotations: `À chaque séquence, changer les 4 défenseurs (bleus).`,
        vigilance: `Vérifier le rythme et l’activité de tous les joueurs. 
Compter les points et valoriser les réussites. 
Organiser la rotation sur les différents postes. 
Démultiplier les ateliers.`,
        variables: `Diminuer le nombre de chevaliers. 
Possibilité de faire la chasse au trésor avec le ballon dans les 
mains, puis au pied. 
Agrandir ou diminuer le château.`,
        marqueurs: [{ x: 52.3, y: 47.5, type: 'ballon' }, { x: 43.6, y: 25.7, type: 'attaquant' }, { x: 64.6, y: 12.0, type: 'attaquant' }, { x: 65.9, y: 67.8, type: 'attaquant' }, { x: 67.1, y: 29.9, type: 'attaquant' }, { x: 39.2, y: 47.2, type: 'defenseur' }, { x: 52.9, y: 17.4, type: 'defenseur' }, { x: 63.3, y: 47.2, type: 'defenseur' }, { x: 55.3, y: 50.8, type: 'attaquant' }, { x: 52.9, y: 70.9, type: 'defenseur' }, { x: 58.4, y: 80.3, type: 'attaquant' }, { x: 30.5, y: 54.7, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 25,
    titre: `JE FEINTE ET J’ÉLIMINE UN ADVERSAIRE QUI A DU RETARD.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `J’ai plaisir à utiliser des installations et du 
matériel propres et en bon état. 
Au club et dans la vie en général, je quitte les 
locaux que j’ai utilisé dans l’état où j’aime les 
trouver.`,
    vocabulaire: `J’identifie mon partenaire
Je fais une passe à mon partenaire`,
    exercices: [
      {
        id: 1,
        titre: `2 contre 2 mini buts`,
        surface: `18 x 28`,
        objectif: `Éliminer mon adversaire direct.`,
        consignes: `Jeu libre en 2 contre 2. Les règles sont identiques à celles des 
rencontres. Chaque équipe a 2 mini buts à attaquer et à défendre. 
Il n’y a pas de gardien de but. On ne peut marquer qu’après être 
rentré dans la zone délimitée devant le but. Les défenseurs ne 
peuvent entrer dans cette zone pour intervenir qu’après que l’atta
quant en possession du ballon y soit entré. Il ne peut être installé 
et attendre dans cette zone.
Comptage des points : 1 point pour chaque but marqué.
Séquence : 15’ (4 x 3’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). 
Féliciter les enfants lors des buts marqués et des conduites et 
dribbles réussis. 
Modifier les équipes si la différence de buts entre les 2 équipes est 
supérieure à 3.`,
        variables: `Agrandir les zones limitées pour les défenseurs dans le sens de la 
longueur.
Faire s’opposer les joueurs de même niveau.`,
        marqueurs: [{ x: 50.0, y: 46.5, type: 'ballon' }, { x: 35.7, y: 31.4, type: 'attaquant' }, { x: 34.5, y: 67.0, type: 'attaquant' }, { x: 79.3, y: 49.9, type: 'attaquant' }, { x: 74.8, y: 29.9, type: 'attaquant' }, { x: 25.6, y: 68.4, type: 'defenseur' }, { x: 26.4, y: 31.4, type: 'defenseur' }, { x: 68.0, y: 27.8, type: 'defenseur' }, { x: 74.8, y: 74.0, type: 'defenseur' }, { x: 39.5, y: 91.6, type: 'defenseur' }, { x: 60.5, y: 92.1, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `2 contre 1 / 2 contre 2`,
        surface: `36 x 28`,
        objectif: `Tirer avantage du 2 contre 1 puis gérer le retour du 2ème défenseur 
avec du retard.`,
        consignes: `Les joueurs sont disposés selon le schéma. L’éducateur donne le 
ballon à l’un des joueurs (les 4 joueurs doivent se tenir prêts, sur 
leurs appuis).
Se débrouiller pour donner un ballon de manière à avoir une 
supériorité numérique «momentanée». A et B affrontent C avant le 
retour de D.
Dès l’action terminée, injection d’un 2ème ballon sur le type ballon 
magique (tout en veillant, là aussi, à créer une supériorité nu
mérique momentanée). Dès le 2ème ballon terminé, les 4 joueurs 
sortent du jeu puis on recommence avec les 4 autres joueurs 
suivants.
Comptage des points : but = 1 point.
Séquence : 15’ (4 x 3’).`,
        rotations: `Changer régulièrement les positions des joueurs (à chaque sé
quence).`,
        vigilance: `Aider le partenaire. 
Tenter de déséquilibrer à 2 contre 1.
Faire le choix entre la passe ou le dribble.`,
        variables: `Varier les positions des joueurs dans les couloirs.
C défend derrière B (laisser 1 ou 2 mètres).
G
G
E
C
D
B
A
notes`,
        marqueurs: [{ x: 49.3, y: 49.0, type: 'ballon' }, { x: 14.5, y: 49.0, type: 'but' }, { x: 82.1, y: 49.0, type: 'but' }, { x: 45.8, y: 13.4, type: 'ballon' }, { x: 68.0, y: 16.0, type: 'plot' }, { x: 27.4, y: 17.6, type: 'attaquant' }, { x: 71.4, y: 90.0, type: 'attaquant' }, { x: 26.9, y: 83.3, type: 'defenseur' }, { x: 70.6, y: 16.1, type: 'defenseur' }, { x: 28.6, y: 5.2, type: 'attaquant' }, { x: 75.2, y: 91.4, type: 'attaquant' }, { x: 74.0, y: 5.2, type: 'defenseur' }, { x: 22.7, y: 92.1, type: 'defenseur' }, { x: 50.6, y: 64.7, type: 'plot' }, { x: 33.0, y: 68.4, type: 'plot' }, { x: 37.5, y: 27.9, type: 'plot' }, { x: 46.2, y: 29.4, type: 'plot' }],
      },
      {
        id: 3,
        titre: `du 1 contre 1 au 2 contre 2`,
        surface: `27 x 28`,
        objectif: `Feinter et éliminer un adversaire qui a du retard.
Conduire sous pression.`,
        consignes: `L’éducateur transmet le ballon au bleu 1 qui tente de marquer 
dans l’un des 2 buts. Au moment de la passe (ou du contrôle en 
fonction du niveau), le rouge 1 s’élance pour empêcher le bleu 1 de 
marquer. Dès l’action terminée, l’éducateur transmet à rouge 2 qui 
tente d’aller marquer dans un des 2 buts, pourchassé par le bleu 1 
(situation possible de 2 contre 1). Dès cette 2ème action terminée, le 
bleu 2 s’élance à son tour pour aller marquer et c’est le rouge 2 qui 
défend (situation possible de 2 contre 2).
1 manche correspond à l’enchaînement des 3 courses.
Comptage des points : 1 point par manche gagnée + 1 point par 
but marqué.
Séquence : 15’ (maximum 1’ par manche)..`,
        rotations: `Rotation après 4 passages par équipe.`,
        vigilance: `Adapter la conduite selon la course de l’adversaire.
Prendre l’information.`,
        variables: `Finir sur un grand but avec GB. Rapprocher ou éloigner le départ 
des adversaires selon le niveau des enfants. Rester sur du 1 contre 
1 ou permettre le 2 contre 1 puis le 2 contre 2.`,
        marqueurs: [{ x: 51.4, y: 48.0, type: 'ballon' }, { x: 72.1, y: 50.9, type: 'attaquant' }, { x: 71.3, y: 44.7, type: 'attaquant' }, { x: 17.6, y: 92.8, type: 'attaquant' }, { x: 59.8, y: 6.3, type: 'defenseur' }, { x: 39.2, y: 85.0, type: 'ballon' }, { x: 47.0, y: 62.7, type: 'plot' }, { x: 67.1, y: 46.8, type: 'attaquant' }, { x: 20.1, y: 89.7, type: 'attaquant' }, { x: 67.3, y: 6.3, type: 'defenseur' }, { x: 67.4, y: 89.5, type: 'defenseur' }, { x: 67.3, y: 78.2, type: 'defenseur' }, { x: 15.7, y: 89.4, type: 'attaquant' }, { x: 24.5, y: 89.7, type: 'attaquant' }, { x: 67.3, y: 40.0, type: 'attaquant' }, { x: 67.3, y: 54.8, type: 'attaquant' }, { x: 63.5, y: 6.1, type: 'defenseur' }, { x: 56.9, y: 75.1, type: 'defenseur' }, { x: 70.8, y: 83.5, type: 'defenseur' }, { x: 67.7, y: 82.9, type: 'defenseur' }, { x: 66.0, y: 4.0, type: 'defenseur' }, { x: 54.8, y: 76.3, type: 'plot' }, { x: 41.2, y: 72.0, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 26,
    titre: `SÉANCE RÉCRÉATIVE`,
    phase: 'recreatif',
    phaseLabel: `SÉANCE RÉCRÉATIVE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Terrain 1
Terrain 2
4m
4m
notes
3
match
surface
36 x 28
OBJECTIF
Match 5 contre 5.
BUT(S)- CONSIGNES
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).
GESTION DES ROTATIONS
Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.
VEILLER À
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
4
match
surface
36 x 28
OBJECTIF
Match 5 contre 5.
BUT(S)- CONSIGNES
Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).
GESTION DES ROTATIONS
Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.
VEILLER À
Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre`,
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren-
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (4 x 3’). 30’’ de récupération entre les séquences.`,
        rotations: `Prévoir les rotations pour les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen-
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et faire 
monter et descendre sur le nombre x de terrains. Obliger les en-
fants à être dans les zones des 4m pour pouvoir marquer. Valoriser 
par 2 points si le but est marqué de la zone des 4m. Empêcher 
l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.9, y: 48.6, type: 'ballon' }, { x: 26.5, y: 67.7, type: 'attaquant' }, { x: 42.3, y: 63.4, type: 'attaquant' }, { x: 81.2, y: 66.8, type: 'attaquant' }, { x: 65.5, y: 67.7, type: 'attaquant' }, { x: 26.5, y: 25.0, type: 'defenseur' }, { x: 43.4, y: 22.9, type: 'defenseur' }, { x: 67.5, y: 27.1, type: 'defenseur' }, { x: 81.2, y: 28.3, type: 'defenseur' }, { x: 53.7, y: 30.3, type: 'defenseur' }, { x: 17.0, y: 18.6, type: 'plot' }, { x: 17.0, y: 8.4, type: 'plot' }, { x: 16.7, y: 87.8, type: 'plot' }, { x: 16.7, y: 77.6, type: 'plot' }, { x: 53.0, y: 56.7, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `atelier pef`,
        surface: `36 x 28`,
        consignes: `PROPOSITION N°1
Objectif de l’atelier : responsabiliser sur l’économie de l’eau par 
l’intermédiaire d’un atelier technique.
PROPOSITION N°2
Objectif de l’atelier : sensibiliser sur le tri des déchets par l’inter-
médiaire d’un atelier technique.
thème
SÉANCE RÉCRÉATIVE
message éducatif
JEU PROGRAMME ÉDUCATIF FÉDÉRAL (PEF)
Terrain 1
Terrain 2
4m
4m
notes`,
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic-
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G
déplacement
conduite / dribble
passe / tir
passe aérienne
kit arbitre
séance n°
26
phase de jeu
SÉANCE RÉCRÉATIVE
catégorie
U8-U9
effectif
10
durée
75 min
date`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
  {
    id: 27,
    titre: `JE CHOISIS D’ÉLIMINER OU PASSER POUR MARQUER UN BUT.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FF . 
Au club, je dois respecter mon éducateur.
Je lui dis « Bonjour » et « Au revoir ». 
J’écoute et je garde le silence quand il prend 
la parole.`,
    vocabulaire: `J’identifie mon partenaire, mon adversaire 
et je choisis de passer ou dribbler`,
    exercices: [
      {
        id: 1,
        titre: `5 contre 5`,
        surface: `36 x 28`,
        objectif: `Entrer dans la zone de finition en 1 contre 1 ou 2 contre 1.`,
        consignes: `3 contre 3 en zone axiale. On peut entrer dans la zone de fini
tion par la conduite ou la passe. 1 seul défenseur est autorisé à 
défendre dans la zone. 2 attaquants maximum autorisés à entrer 
dans la zone (l’autre joueur offensif reste dans la zone médiane 
pour «équilibrer»). Le défenseur peut être utilisé par son équipe 
mais il ne peut pas rentrer dans la zone centrale.
Comptage des points : but = 1 point. But marqué avec 2 joueurs 
offensifs dans la zone de finition = 2 points.
Séquence : 15’ (5 x 2’30’’).`,
        rotations: `Changer le défenseur et le gardien de but à chaque rotation. Don
ner des numéros pour simplifier les rotations.`,
        vigilance: `Agrandir l’espace de jeu pour se donner du temps.
Chercher à rentrer dans la zone de finition dès que possible (drib
bler ou passer).
Accompagner le joueur qui rentre en conduite = proposer une 
solution de 2 contre 1.`,
        variables: `Autoriser le retour d’un 2ème défenseur.`,
        marqueurs: [{ x: 50.4, y: 48.4, type: 'ballon' }, { x: 40.6, y: 23.2, type: 'attaquant' }, { x: 72.8, y: 48.1, type: 'defenseur' }, { x: 59.3, y: 23.2, type: 'defenseur' }, { x: 26.3, y: 48.1, type: 'attaquant' }, { x: 16.9, y: 48.4, type: 'but' }, { x: 84.5, y: 48.4, type: 'but' }, { x: 47.2, y: 44.2, type: 'defenseur' }, { x: 41.8, y: 51.4, type: 'attaquant' }, { x: 47.2, y: 77.4, type: 'attaquant' }, { x: 59.3, y: 64.6, type: 'defenseur' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Attaquer un des buts au choix, en 2 contre 1.`,
        consignes: `2 contre 1 dans chaque zone. Les joueurs ne changent pas de zone 
mais le ballon peut transiter d’une zone à l’autre. Les joueurs bleus 
s’échangent le ballon sans se le faire prendre par les rouges.
Lorsqu’ils le veulent, 2 joueurs bleus tentent d’aller marquer dans 
un des buts (au choix) en 2 contre 1. 
Les 2 défenseurs rouges et les 2 autres bleus ne participent pas à 
l’action. À tout moment, on peut changer de but selon la situation.
Si un des défenseurs de la zone récupère, il transmet à l’attaquant 
de son choix qui va marquer. Si un défenseur sur la ligne récupère, 
il peut transmettre à ses partenaires qui tentent de marquer.
L’éducateur remet un ballon en jeu à la fin de chaque action.
Comptage des points : but = 1 point.
Séquence : 15’ (4 x 3’).`,
        rotations: `Changer les défenseurs, les gardiens de but à chaque séquence. 
Modifier les équipes si besoin.`,
        vigilance: `Occuper l’espace pour se donner du temps.
Attaquer à 2 contre 1 dès que possible.
Fixer-dribbler ou fixer-donner. 
Compter les buts.`,
        variables: `Permettre le retour d’un défenseur supplémentaire (2 contre 1 + 1 
joueur en retard).
Demander un nombre minimal de passes dans la zone centrale.
G
G
G
G
E
notes`,
        marqueurs: [{ x: 50.0, y: 48.4, type: 'ballon' }, { x: 55.2, y: 59.6, type: 'attaquant' }, { x: 42.2, y: 69.0, type: 'defenseur' }, { x: 56.4, y: 32.6, type: 'defenseur' }, { x: 47.3, y: 41.9, type: 'attaquant' }, { x: 16.5, y: 48.4, type: 'but' }, { x: 84.1, y: 48.4, type: 'but' }, { x: 44.7, y: 25.1, type: 'defenseur' }, { x: 30.6, y: 47.5, type: 'attaquant' }, { x: 69.5, y: 46.0, type: 'attaquant' }, { x: 58.9, y: 73.2, type: 'defenseur' }, { x: 49.5, y: 83.3, type: 'ballon' }],
      },
      {
        id: 3,
        titre: `jeu d’éveil technique`,
        surface: `36 x 28`,
        objectif: `Feinter pour créer de l’incertitude et utiliser le temps d’avance.`,
        consignes: `Le porteur transmet le ballon à son partenaire en face de lui, 
qui contrôle et sort du carré par sa droite ou sa gauche (il peut 
feinter). Dès la sortie du carré à droite ou à gauche, cela déclenche 
l’attaque en 2 contre 1 sur le but correspondant.
Si le défenseur récupère, il transmet à son partenaire qui peut aller 
marquer. Dans ce cas, les 2 rouges défendent et le 2ème défenseur 
bleu participe également.
Comptage des points : but valable si les 2 joueurs participent à 
l’action (sans obliger de jouer à 2).
Séquence : 15’ (maximum 30’’ par passage).`,
        rotations: `Changer les rôles après 8 passages (attaquant /défenseur).
Changer les défenseurs, les gardiens de but à chaque passage.`,
        vigilance: `Feinter pour surprendre l’adversaire.
Accompagner le porteur pour l’aider (s’écarter ou s’éloigner selon 
la situation).
Valoriser les buts en dehors de la surface.
Comptabiliser les buts.`,
        variables: `Autoriser le retour du 2ème défenseur.
Agrandir la zone de feinte pour créer encore plus d’incertitudes. 
Possibilité de redonner à son partenaire qui fait le choix de la 
droite ou de la gauche.`,
        marqueurs: [{ x: 50.3, y: 82.4, type: 'plot' }, { x: 50.0, y: 52.0, type: 'ballon' }, { x: 49.8, y: 91.3, type: 'attaquant' }, { x: 30.3, y: 51.7, type: 'defenseur' }, { x: 84.1, y: 15.9, type: 'defenseur' }, { x: 16.5, y: 52.0, type: 'but' }, { x: 84.1, y: 52.0, type: 'but' }, { x: 14.0, y: 20.1, type: 'defenseur' }, { x: 48.9, y: 7.6, type: 'attaquant' }, { x: 48.1, y: 16.9, type: 'attaquant' }, { x: 69.5, y: 49.0, type: 'defenseur' }, { x: 62.8, y: 30.7, type: 'plot' }, { x: 64.0, y: 79.4, type: 'plot' }, { x: 49.9, y: 77.2, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 28,
    titre: `J’INTERVIENS POUR RÉCUPÉRER LE BALLON ET RELANCER.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mon éducateur. 
Je peux l’interpeller à la fin de sa 
communication en levant la main, si j’ai une 
question et j’accepte ses décisions.`,
    vocabulaire: `Je cadre le porteur de balle
J’interviens pour relancer`,
    exercices: [
      {
        id: 1,
        titre: `2 contre 2 avec gardien`,
        surface: `18 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupérer 
le ballon.`,
        consignes: `But : empêcher l’adversaire de tirer.
Consignes : gestion d’un 2 contre 2 + gardien de but. Mise en place 
de la relance protégée. Les tirs ne peuvent se faire qu’en zone 
adverse. Pas de touche, ni corner, ni 6 mètres. L’éducateur injecte 
le ballon selon le principe «ballon magique» en orientant ses choix 
prioritairement vers le gardien (on repart du gardien).
Comptage des points : but = 1 point. Récupérer en zone adverse = 
1 point.
Séquence : 15’ (12 x 1’).`,
        rotations: `Changer les joueurs à chaque séquence (gardien compris).`,
        vigilance: `Défendre à 2 en étant proche l’un de l’autre.
Aller vite vers le joueur adverse qui a le ballon («CADRER»).`,
        variables: `Quand l’équipe marque, elle conserve le ballon (qui repart de leur 
gardien).
Permettre à un défenseur d’intervenir dans la zone adverse lors de 
la relance protégée.
G
G
E
E
G
G
notes`,
        marqueurs: [{ x: 50.0, y: 46.0, type: 'ballon' }, { x: 62.3, y: 25.5, type: 'attaquant' }, { x: 62.3, y: 72.4, type: 'attaquant' }, { x: 57.8, y: 89.5, type: 'attaquant' }, { x: 38.0, y: 90.1, type: 'defenseur' }, { x: 33.1, y: 90.1, type: 'defenseur' }, { x: 42.2, y: 20.4, type: 'defenseur' }, { x: 43.5, y: 70.3, type: 'defenseur' }, { x: 33.1, y: 46.9, type: 'ballon' }, { x: 68.1, y: 46.5, type: 'ballon' }, { x: 49.9, y: 85.9, type: 'ballon' }, { x: 62.3, y: 89.5, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `1 contre 1`,
        surface: `18 x 25`,
        objectif: `Intervenir pour récupérer le ballon et relancer.`,
        consignes: `Les enfants se trouvent au niveau des portes de couleur, à droite 
ou à gauche de leur but. L’éducateur a deux ballons dans ses 
mains. Au signal de l’éducateur, il transmet le ballon au 1er joueur 
rouge ou bleu (ballon dosé donné à la main dans les pieds du 
joueur ou devant lui). Le joueur ayant le ballon doit aller marquer 
dans le but adverse en éliminant son adversaire. Si l’adversaire ré
cupère le ballon, il tente de marquer à son tour. À ce moment-là, le 
joueur qui vient de perdre le ballon défend et un 2ème joueur rentre 
sur le terrain pour l’aider à récupérer le ballon. Si le ballon est ré
cupéré par le GB ou si le ballon sort en touche ou en sortie de but, 
l’éducateur injecte un 2ème ballon en criant «Ballon magique» pour 
l’attaquant concerné.
À la fin de la séquence, les enfants quittent le terrain par les portes 
latérales et on recommence avec 2 autres.
Séquence : 15’ (maximum 30’’ par passage) - 1 à 2 ballons.`,
        rotations: `Lorsque tous les enfants sont passés, on change les joueurs 
gardien de but et on inverse les rôles, la 1ère passe sera donnée 
à l’autre équipe. Si le nombre de joueurs est supérieur à 10, faire 
doubler certains enfants.`,
        vigilance: `Ne pas donner le ballon magique, toujours à la même équipe.
Donner le ballon à un joueur l’ayant eu le moins souvent. 
Modifier l’ordre des passages d’une équipe .
(= ne pas toujours jouer contre les mêmes adversaires).`,
        variables: `À l’issue des 2 séries, les joueurs sont positionnés à gauche de leur 
but.`,
        marqueurs: [{ x: 54.2, y: 48.1, type: 'ballon' }, { x: 59.8, y: 20.6, type: 'attaquant' }, { x: 57.9, y: 14.0, type: 'attaquant' }, { x: 16.8, y: 77.5, type: 'defenseur' }, { x: 14.2, y: 81.1, type: 'defenseur' }, { x: 54.9, y: 81.7, type: 'ballon' }, { x: 30.6, y: 77.5, type: 'plot' }, { x: 32.8, y: 77.1, type: 'plot' }, { x: 18.4, y: 83.0, type: 'defenseur' }, { x: 18.4, y: 70.9, type: 'defenseur' }, { x: 44.6, y: 60.5, type: 'plot' }, { x: 20.0, y: 48.1, type: 'ballon' }, { x: 51.9, y: 48.1, type: 'ballon' }, { x: 54.2, y: 25.1, type: 'attaquant' }, { x: 54.2, y: 13.0, type: 'attaquant' }, { x: 40.2, y: 46.6, type: 'plot' }, { x: 56.4, y: 19.1, type: 'attaquant' }, { x: 13.6, y: 74.4, type: 'defenseur' }, { x: 11.0, y: 79.3, type: 'defenseur' }, { x: 61.1, y: 15.3, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `les éperviers`,
        surface: `36 x 28`,
        objectif: `Intervenir pour récupérer le ballon et relancer.`,
        consignes: `Le GB relance sur l’un de ses 2 partenaires (bleu 1 en exemple)
le bleu 1 essaie de transmettre au bleu 2 qui va marquer dans le 
but. Si le rouge 1 récupère et transmet à son partenaire (rouge 2), 
il marque 1 point. Si but marqué = +1 point.
Le rouge 1 peut accompagner pour jouer le 2 contre 2.
Lorsque les bleus sont passés, on commence avec les rouges de
puis le but opposé
Comptage des points : but marqué = 1 point. But marqué après 
avoir récupéré et relancé = +1 point.
Séquence : 15’ (maximum 20’’ par passage).`,
        rotations: `Il est nécessaire d’avoir le même nombre de joueurs par équipe. 
Si ce n’est pas le cas, mettre en place une rotation des joueurs 
(gardien de but compris).`,
        vigilance: `Qualité du contrôle pour pouvoir relancer.
Sur la récupération, chercher à relancer le plus vite possible.
Positionnement, cadrage du porteur de balle.`,
        variables: `Imposer aux joueurs de rester dans leurs zones (excepté pour le 
rouge 1 lors de la récupération du ballon).
Ajouter un défenseur rouge supplémentaire dans la dernière zone.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 15.8, y: 49.7, type: 'but' }, { x: 82.7, y: 49.7, type: 'but' }, { x: 76.7, y: 28.2, type: 'plot' }, { x: 64.0, y: 72.0, type: 'attaquant' }, { x: 55.2, y: 22.5, type: 'attaquant' }, { x: 75.9, y: 23.4, type: 'defenseur' }, { x: 37.5, y: 16.6, type: 'defenseur' }, { x: 11.8, y: 19.0, type: 'attaquant' }, { x: 38.7, y: 74.9, type: 'defenseur' }, { x: 75.9, y: 67.8, type: 'defenseur' }, { x: 11.8, y: 74.7, type: 'attaquant' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 29,
    titre: `JE M’ORGANISE AVEC MON PARTENAIRE POUR EMPÊCHER L’ADVERSAIRE DE S’APPROCHER DE MON BUT.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS COLLECTIVEMENT`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF.
 Au club, je dois respecter mes partenaires. 
Je les salue en arrivant à l’entraînement 
ou au match et je ne prononce pas de mots 
grossiers à leur égard.`,
    vocabulaire: `J’identifie mon adversaire/porteur de balle, 
je cadre l’adversaire et j’interviens sur l’ad
versaire pour lui prendre le ballon.`,
    exercices: [
      {
        id: 1,
        titre: `jeu multi-buts`,
        surface: `36 x 28`,
        objectif: `S’organiser défensivement pour récupérer le ballon et marquer.`,
        consignes: `3 contre 3 dans la zone axiale. Sur la récupération, un joueur sup
plémentaire de l’équipe qui a récupéré le ballon peut rentrer. On 
joue alors à 4 contre 3.
On peut marquer dans un des 2 buts, gardé par un GB.
Comptage des points : but marqué = 1 point. But marqué après 
récupération = 2 points (temps limité à 6-8 secondes).
Séquence : 15’ (4 x 3’).`,
        rotations: `Changer les joueurs sur le côté régulièrement (à chaque change
ment de statut).`,
        vigilance: `S’organiser ensemble pour récupérer le ballon.
Occuper le terrain.
Ne pas défendre à 2 sur le porteur adverse.
Le fait de pouvoir marquer dans les 2 buts incitera les défenseurs 
à défendre ensemble en occupant le terrain.`,
        variables: `Faire rentrer un défenseur supplémentaire.
Faire rentrer un défenseur supplémentaire après 3 secondes pour 
rétablir l’égalité numérique.`,
        marqueurs: [{ x: 50.0, y: 48.5, type: 'ballon' }, { x: 41.2, y: 23.8, type: 'attaquant' }, { x: 39.9, y: 52.6, type: 'attaquant' }, { x: 42.4, y: 79.0, type: 'attaquant' }, { x: 54.1, y: 56.7, type: 'defenseur' }, { x: 56.6, y: 24.0, type: 'defenseur' }, { x: 56.6, y: 79.0, type: 'defenseur' }, { x: 39.9, y: 92.5, type: 'defenseur' }, { x: 59.1, y: 4.4, type: 'attaquant' }, { x: 16.2, y: 29.0, type: 'but' }, { x: 84.5, y: 31.1, type: 'but' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Défendre collectivement.`,
        consignes: `Les bleus attaquent à partir du milieu du terrain et sont libres 
dans leurs déplacements. Lorsque le ballon est sur l’un des 2 
ailiers, les 2 défenseurs doivent se retrouver dans la même zone.
Comptage des points : 
Si récupération = 1 point.
Si récupération, ils peuvent transmettre à l’un des 2 joueurs sur 
le côté qui attaquent en 2 contre 1 + le retour d’un joueur bleu (le 
milieu avec du retard). Si but = 3 points.
Séquence : 15’ (maximum 30’’ par passage).`,
        rotations: `Changer les rôles régulièrement. 5 passages pour les rouges puis 5 
passages bleus. Si les bleus marquent, l’éducateur injecte un ballon 
pour les rouges à l’opposé (pour jouer le 2 contre 1 +1) et ainsi 
garder un dynamisme dans l’activité.`,
        vigilance: `En 3 contre 2, défendre proche de son partenaire, en défendant 
l’accès au but.
En 2 contre 1, ne pas se jeter, retarder les adversaires afin de favo
riser le retour d’un partenaire.`,
        variables: `Démarrer sur le côté par un ailier.
Enlever des points quand les 2 défenseurs ne sont pas dans la 
même zone quand le ballon est sur l’ailier.
G
G
G
G
notes`,
        marqueurs: [{ x: 50.0, y: 48.6, type: 'ballon' }, { x: 15.8, y: 48.6, type: 'but' }, { x: 82.7, y: 48.6, type: 'but' }, { x: 38.2, y: 16.1, type: 'plot' }, { x: 56.7, y: 90.3, type: 'attaquant' }, { x: 55.5, y: 6.6, type: 'attaquant' }, { x: 36.4, y: 12.7, type: 'defenseur' }, { x: 48.9, y: 45.8, type: 'defenseur' }, { x: 31.7, y: 17.7, type: 'attaquant' }, { x: 36.4, y: 87.9, type: 'defenseur' }, { x: 70.2, y: 58.9, type: 'defenseur' }, { x: 31.8, y: 46.3, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `1 contre 1 au 3 contre 2`,
        surface: `27 x 28`,
        objectif: `Gérer différentes situations défensives (1 contre 1 au 3 contre 2).`,
        consignes: `Le rouge 1 s’élance contre le bleu 1 et tente de marquer. Si le bleu 
1 récupère le ballon, il tente de marquer dans le but adverse. Dès 
l’action terminée, l’éducateur injecte un 1er ballon (au choix sur 
le rouge 2 ou le bleu 2). On joue à 2 contre 2. Dès cette seconde 
action terminée, l’éducateur injecte un 2ème ballon, soit sur le rouge 
3 soit sur le bleu 3 on joue à 3 contre 2 (exemple : sur la dernière 
séquence, l’éducateur appelle le joueur rouge, dans ce cas, le joueur 
bleu n’entre pas dans le jeu).
Comptage des points : but marqué = 1 point. But marqué à la suite 
d’une récupération = 2 points.
Séquence : 15’ (12 x 1’).`,
        rotations: `Sur le départ du 1er ballon, alterner rouge et bleu.
Modifier les postes des joueurs.`,
        vigilance: `Défendre ensemble pour récupérer le ballon.
Ne pas se faire éliminer. 
Chercher à prendre le ballon à l’adversaire.`,
        variables: `Varier les départs des joueurs.
Sur la dernière séquence, proposer un 3 contre 3, avec retour d’un 
défenseur «en retard» (exemple, si le ballon est donné aux rouges, 
placer le bleu 3 derrière le but des rouges).`,
        marqueurs: [{ x: 47.6, y: 48.4, type: 'ballon' }, { x: 24.9, y: 91.0, type: 'attaquant' }, { x: 49.4, y: 89.2, type: 'ballon' }, { x: 36.6, y: 61.8, type: 'attaquant' }, { x: 28.0, y: 5.7, type: 'attaquant' }, { x: 63.5, y: 6.8, type: 'defenseur' }, { x: 60.6, y: 58.9, type: 'defenseur' }, { x: 68.3, y: 91.9, type: 'defenseur' }, { x: 51.1, y: 63.6, type: 'plot' }, { x: 28.2, y: 89.2, type: 'attaquant' }, { x: 63.9, y: 90.1, type: 'defenseur' }, { x: 30.6, y: 48.8, type: 'ballon' }, { x: 80.3, y: 49.6, type: 'ballon' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 30,
    titre: `JE CONTRÔLE ET JE PASSE POUR AVANCER VERS LE BUT.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes partenaires. 
Je les encourage quelles que soient les 
situations (but contre son camp, passe 
ratée…) et je ne les divertis pas quand 
l’éducateur prend la parole.`,
    vocabulaire: `J’identifie mon partenaire, mon adversaire 
et je choisis de passer ou dribbler.`,
    exercices: [
      {
        id: 1,
        titre: `5 contre 5`,
        surface: `36 x 28`,
        objectif: `Progresser par la passe.`,
        consignes: `Jeu libre en 5 contre 5. Chaque équipe a 1 but à attaquer et à dé
fendre avec un gardien de but. Le terrain est délimité en 4 zones. 
Le ballon ne peut circuler dans une autre zone que par la passe à 
un partenaire.
Objectif pour les attaquants : trouver un joueur démarqué dans 
une autre zone pour progresser au but.
Comptage des points : 1 point pour chaque but marqué. 1 point 
pour chaque passe réussie en changeant de zone. 
Séquence : 15’ (3 x 4’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence et en changeant 
les adversaires, et les joueurs de postes, gardien de but compris à 
chaque rotation.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). 
Féliciter les enfants lors des buts marqués et des enchaînements 
de passes entre partenaires réussis.
Modifier les équipes ou les adversaires directs si la différence de 
buts entre les 2 équipes est supérieure à 3.`,
        variables: `Le ballon peut circuler entre les zones par la passe mais aussi par 
la conduite. 
Si une ou plusieurs passes sont réussies en changeant de zone 
avant de marquer, alors le but compte double.`,
        marqueurs: [{ x: 50.4, y: 47.9, type: 'ballon' }, { x: 63.3, y: 23.1, type: 'attaquant' }, { x: 56.7, y: 79.7, type: 'attaquant' }, { x: 39.2, y: 60.8, type: 'attaquant' }, { x: 43.0, y: 25.2, type: 'attaquant' }, { x: 43.2, y: 75.5, type: 'defenseur' }, { x: 64.5, y: 56.8, type: 'defenseur' }, { x: 55.4, y: 17.2, type: 'defenseur' }, { x: 36.7, y: 35.7, type: 'defenseur' }, { x: 16.9, y: 47.9, type: 'but' }, { x: 84.4, y: 47.0, type: 'but' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `27 x 28`,
        objectif: `Faire le bon choix entre la passe ou le dribble en fonction de l’ad
versaire.`,
        consignes: `L’éducateur fait une passe au bleu 1 (voir schéma), qui contrôle et 
transmet à son partenaire bleu 2 qui conduit et va marquer.
Au moment de la passe du bleu 1 au bleu 2, les 2 rouges dé
marrent pour aller marquer dans le but adverse, défendu par le 
bleu 1 et le 2ème joueur bleu qui vient de tirer au but. Si les bleus 
récupèrent le ballon, ils peuvent marquer dans le but rouge.
Chaque but marqué = 1 pt
Faire 4 à 6 passages pour les bleus puis inverser les équipes.
L’équipe qui remporte le plus de points gagne le défi. 
Séquence : 15’ (maximum 30’’ par passage).`,
        rotations: `Rotation sur le poste de gardien de but. 
Faire des équipes avec le même nombre de joueurs ou alors effec
tuer le même nombre de passages par équipe (1 joueur effectue 2 
passages). 
Des parents peuvent aider pour renvoyer les ballons (parents-bal
lons).`,
        vigilance: `Bien conduire son ballon pour faire une bonne passe au partenaire, 
et lui faire gagner du temps (= dans sa course). Sur le 2 contre 1, 
faire le choix entre le dribble et la passe (dans la course, pour évi
ter le retour du 2ème joueur). Valoriser et encourager les réussites 
et échecs (liens socio-affectifs).`,
        variables: `Varier les départs (rapprocher ou éloigner selon le niveau).
G
G
G
G
E
1
2
notes`,
        marqueurs: [{ x: 53.3, y: 48.0, type: 'ballon' }, { x: 19.9, y: 48.5, type: 'ballon' }, { x: 70.6, y: 47.3, type: 'ballon' }, { x: 54.6, y: 18.9, type: 'attaquant' }, { x: 58.5, y: 64.8, type: 'plot' }, { x: 70.5, y: 7.2, type: 'attaquant' }, { x: 35.9, y: 6.3, type: 'defenseur' }, { x: 23.4, y: 90.0, type: 'defenseur' }, { x: 66.2, y: 9.1, type: 'attaquant' }, { x: 47.9, y: 89.7, type: 'defenseur' }, { x: 52.7, y: 87.9, type: 'ballon' }, { x: 56.9, y: 89.7, type: 'defenseur' }, { x: 27.3, y: 72.0, type: 'defenseur' }, { x: 38.7, y: 17.5, type: 'defenseur' }, { x: 73.2, y: 64.7, type: 'attaquant' }, { x: 73.4, y: 76.8, type: 'attaquant' }, { x: 63.3, y: 6.0, type: 'attaquant' }, { x: 68.8, y: 14.5, type: 'attaquant' }, { x: 74.9, y: 70.9, type: 'attaquant' }, { x: 78.3, y: 73.0, type: 'attaquant' }, { x: 48.5, y: 34.0, type: 'attaquant' }, { x: 29.8, y: 73.6, type: 'defenseur' }, { x: 38.0, y: 21.2, type: 'defenseur' }, { x: 57.7, y: 30.0, type: 'plot' }, { x: 72.0, y: 42.2, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `jeu d’éveil technique`,
        surface: `36 x 28`,
        objectif: `Contrôler et passer pour avancer vers le but.`,
        consignes: `Les 2 équipes démarrent en même temps leur parcours. Tous les 
joueurs doivent toucher le ballon (GDB + 2 joueurs).
Dès l’action terminée, l’éducateur injecte un 2ème ballon à l’équipe 
ayant tiré en 1er (choix du joueur).
On attaque alors à 2 contre 2.
Une fois l’action finie, on recommence avec les 4 autres joueurs.
Comptage des points : 1 but = 1 point. + 1 pt pour l’équipe qui tire 
en premier.
Séquence : 15’ (maximum 40’’ par passage).`,
        rotations: `Changer les postes tous les 2 passages.
Lorsque tout le monde est passé 2 fois, changer de sens (pour mo
difier les angles de passes) : le GB transmettra sur sa gauche.`,
        vigilance: `Valoriser la passe précise et dosée, qui ne fait pas perdre de temps 
au partenaire.
Le joueur qui a fait la passe accompagne son partenaire.`,
        variables: `Demander à redoubler les passes.
Rajouter un 3ème joueur sur le terrain.`,
        marqueurs: [{ x: 50.0, y: 47.9, type: 'ballon' }, { x: 16.6, y: 48.4, type: 'but' }, { x: 83.4, y: 46.3, type: 'but' }, { x: 25.8, y: 67.9, type: 'plot' }, { x: 27.7, y: 71.2, type: 'attaquant' }, { x: 43.3, y: 5.9, type: 'defenseur' }, { x: 33.6, y: 45.5, type: 'defenseur' }, { x: 23.8, y: 92.7, type: 'attaquant' }, { x: 50.0, y: 6.9, type: 'ballon' }, { x: 65.5, y: 90.6, type: 'attaquant' }, { x: 67.4, y: 46.7, type: 'attaquant' }, { x: 73.8, y: 25.3, type: 'defenseur' }, { x: 88.2, y: 25.3, type: 'defenseur' }, { x: 64.4, y: 48.8, type: 'plot' }, { x: 83.9, y: 53.7, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 31,
    titre: `JE CHOISIS D’ÉLIMINER OU PASSER POUR MARQUER UN BUT.`,
    phase: 'attaque',
    phaseLabel: `J’ATTAQUE`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes adversaires.
Je les salue à leur arrivée au stade, je suis 
courtois et respectueux quel que soit le 
résultat et le contexte du match.`,
    vocabulaire: `Je fixe et donne.
Je fixe et dribble.`,
    exercices: [
      {
        id: 1,
        titre: `5 contre 5`,
        surface: `36 x 28`,
        objectif: `Entrer dans la zone de finition en 1 contre 1 ou 2 contre 1.`,
        consignes: `3 contre 3 en zone axiale. On peut entrer dans la zone de fini
tion par la conduite ou la passe. 1 seul défenseur est autorisé à 
défendre dans la zone. 2 attaquants maximum autorisés à entrer 
dans la zone.
Comptage des points : but = 1 point. But marqué avec 2 joueurs 
offensifs dans la zone de finition = 2 points.
Séquence : 15’ (5 x 2’30’’).`,
        rotations: `Changer les défenseurs à chaque rotation.
Changer le gardien de but après chaque séquence.`,
        vigilance: `Agrandir l’espace de jeu pour se donner du temps.
Chercher à rentrer dans la zone de finition dès que possible (drib
bler ou passer).
Accompagner le joueur qui rentre en conduite = proposer une 
solution de 2 contre 1.`,
        variables: `Autoriser le retour d’un 2ème défenseur.`,
        marqueurs: [{ x: 49.6, y: 48.4, type: 'ballon' }, { x: 45.0, y: 76.1, type: 'attaquant' }, { x: 46.2, y: 40.1, type: 'defenseur' }, { x: 71.7, y: 45.2, type: 'defenseur' }, { x: 42.0, y: 51.5, type: 'attaquant' }, { x: 16.1, y: 48.4, type: 'but' }, { x: 83.7, y: 48.4, type: 'but' }, { x: 57.0, y: 19.4, type: 'defenseur' }, { x: 27.5, y: 47.3, type: 'attaquant' }, { x: 42.0, y: 14.4, type: 'attaquant' }, { x: 56.4, y: 65.7, type: 'defenseur' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Attaquer un des buts au choix, en 2 contre 1.`,
        consignes: `2 contre 1 dans chaque zone. Les joueurs ne changent pas de zone 
mais le ballon peut transiter d’une zone à l’autre. Les joueurs bleus 
s’échangent le ballon sans se le faire prendre par les rouges.
Lorsqu’ils le veulent, 2 joueurs bleus tentent d’aller marquer dans 
un des buts (au choix) en 2 contre 1 : on ne peut sortir de la zone 
que sur un appel d’un partenaire (dans ce cas, le porteur fait la 
passe). Le 2ème défenseur et les 2 autres bleus ne participent pas à 
l’action. À tout moment, on peut changer de but selon la situation. 
Si un des défenseurs de la zone récupère, il transmet à l’attaquant 
de son choix qui va marquer. Si un défenseur sur la ligne récupère, 
il peut transmettre à ses partenaires qui tentent de marquer.
Comptage des points : but = 1 point.
Séquence : 15’ (4 x 3’).`,
        rotations: `Changer les équipes de rôle. 
Faire tourner les gardiens de but.`,
        vigilance: `Occuper l’espace pour se donner du temps.
Attaquer à 2 contre 1 dès que possible.
Fixer-dribbler ou fixer-donner.`,
        variables: `Permettre le retour d’un défenseur supplémentaire (2 contre 1 + 1 
joueur en retard).
Demander un nombre minimal de 3 passes avant de sortir de la 
zone pour attaquer.
G
G
G
G
OU
notes`,
        marqueurs: [{ x: 50.0, y: 48.4, type: 'ballon' }, { x: 55.2, y: 59.7, type: 'attaquant' }, { x: 42.2, y: 69.0, type: 'defenseur' }, { x: 56.4, y: 32.6, type: 'defenseur' }, { x: 47.3, y: 41.9, type: 'attaquant' }, { x: 16.5, y: 48.4, type: 'but' }, { x: 84.1, y: 48.4, type: 'but' }, { x: 44.7, y: 25.2, type: 'defenseur' }, { x: 30.6, y: 47.5, type: 'attaquant' }, { x: 69.5, y: 46.0, type: 'attaquant' }, { x: 58.9, y: 73.2, type: 'defenseur' }, { x: 34.0, y: 28.6, type: 'plot' }, { x: 34.4, y: 33.9, type: 'plot' }, { x: 63.2, y: 62.3, type: 'plot' }, { x: 65.8, y: 64.1, type: 'plot' }],
      },
      {
        id: 3,
        titre: `jeu de la feinte`,
        surface: `36 x 28`,
        objectif: `Jouer en 2 contre 1 avec feintes.`,
        consignes: `Le porteur transmet à son partenaire. Au moment de la passe, 1 
des 2 défenseurs défend sur lui (laisser au choix ou indiquer par 
l’éducateur). Le porteur doit s’informer et s’adapter au déplace
ment de l’adversaire. On peut alors attaquer le but de son choix.
Dans un 1er temps, le 2ème défenseur à l’opposé ne défend pas.
Si le défenseur récupère, il transmet à son partenaire qui peut aller 
marquer. Dans ce cas, les 2 rouges défendent et le 2ème défenseur 
bleu participe également.
Comptage des points : but valable si les 2 joueurs participent à 
l’action (sans obliger de jouer à 2).
Séquence : 15’ (maximum 30’’ par passage).`,
        rotations: `Changer les équipes de rôle après 8 passages, les joueurs effec
tuent un passage sur 2.
Faire tourner les gardiens de but.`,
        vigilance: `Bien se positionner pour s’informer (s’orienter). Choisir le but 
à attaquer selon la course du défenseur (notamment utiliser le 
contre-pied individuel ou à 2). Feinter pour surprendre l’adversaire
Accompagner le porteur pour l’aider (s’écarter ou s’éloigner selon 
le contexte). Insister sur la course du partenaire pour aider et faire 
le bon déplacement pour marquer au plus vite (être disponible et 
accessible vers le but). Valoriser les buts en dehors de la surface.`,
        variables: `Autoriser le 2ème défenseur à défendre.
Donner plus de points pour le but marqué si feinte ou contre-pied.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 16.6, y: 50.2, type: 'but' }, { x: 83.4, y: 48.1, type: 'but' }, { x: 64.9, y: 75.2, type: 'plot' }, { x: 50.7, y: 91.7, type: 'attaquant' }, { x: 13.3, y: 21.2, type: 'defenseur' }, { x: 33.6, y: 47.3, type: 'defenseur' }, { x: 50.2, y: 74.5, type: 'attaquant' }, { x: 50.0, y: 24.1, type: 'attaquant' }, { x: 50.2, y: 6.9, type: 'attaquant' }, { x: 68.0, y: 46.5, type: 'defenseur' }, { x: 88.2, y: 17.0, type: 'defenseur' }, { x: 50.2, y: 71.2, type: 'plot' }, { x: 64.9, y: 39.6, type: 'plot' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.3, type: 'ballon' }, { x: 62.4, y: 31.3, type: 'attaquant' }, { x: 48.2, y: 70.0, type: 'attaquant' }, { x: 41.1, y: 36.8, type: 'attaquant' }, { x: 35.4, y: 65.9, type: 'defenseur' }, { x: 50.4, y: 24.4, type: 'defenseur' }, { x: 36.4, y: 29.2, type: 'defenseur' }, { x: 55.8, y: 57.4, type: 'defenseur' }, { x: 63.7, y: 60.6, type: 'attaquant' }, { x: 83.6, y: 49.0, type: 'but' }, { x: 16.4, y: 50.2, type: 'but' }],
      },
    ],
  },
  {
    id: 32,
    titre: `J’INTERVIENS POUR RÉCUPÉRER LE BALLON ET RELANCER.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Le respect est une des 5 valeurs de la FFF. 
Au club, je dois respecter mes adversaires. 
J’échange une poignée de main à la fin du 
match et à la suite d’une faute, j’incite mes 
coéquipiers à sortir le ballon quand un 
joueur est blessé.`,
    vocabulaire: `Je cadre le porteur du ballon, je récupère 
et je fais une passe`,
    exercices: [
      {
        id: 1,
        titre: `match 3 contre 3`,
        surface: `18 x 28`,
        objectif: `Récupérer le ballon et faire une passe à mon partenaire.`,
        consignes: `Jeu libre en 3 contre 3. Chaque équipe a 1 petit but à attaquer et à 
défendre sans gardien de but. Chaque camp est délimité. L’objectif 
est de récupérer le ballon et de jouer avec un partenaire à la récu
pération pour marquer rapidement.
Comptage des points : 1 point pour chaque but marqué, 1 point 
supplémentaire si la récupération du ballon a été suivie par une 
passe à un partenaire. 
Séquence : 15’ (4 x 3’).`,
        rotations: `Faire participer tous les joueurs en organisant les rotations des 
remplaçants (s’il y en a) entre chaque séquence et en changeant 
les adversaires.`,
        vigilance: `Faire respecter les règles (délimitation des surfaces de jeu et ren
trées en jeu). Féliciter les enfants lors des récupérations effec
tuées suivies de passes aux partenaires lors de ces moments. 
Modifier les équipes ou les adversaires directs si la différence de 
buts entre les 2 équipes est supérieure à 3.`,
        variables: `Si la récupération est effectuée dans son propre camp suivie 
d’une passe à un partenaire avant de marquer, alors le but compte 
double.`,
        marqueurs: [{ x: 52.3, y: 46.5, type: 'ballon' }, { x: 47.9, y: 27.4, type: 'attaquant' }, { x: 25.9, y: 42.6, type: 'attaquant' }, { x: 40.9, y: 90.3, type: 'attaquant' }, { x: 28.3, y: 90.6, type: 'defenseur' }, { x: 23.4, y: 90.6, type: 'defenseur' }, { x: 23.4, y: 25.4, type: 'defenseur' }, { x: 26.7, y: 66.3, type: 'defenseur' }, { x: 45.4, y: 90.3, type: 'attaquant' }, { x: 44.5, y: 37.0, type: 'defenseur' }, { x: 42.0, y: 63.8, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `ballon magique`,
        surface: `27 x 28`,
        objectif: `Récupérer le ballon et relancer.`,
        consignes: `Les enfants se trouvent dans les portes de couleur à droite et à 
gauche de leur but. L’éducateur a deux ballons dans ses mains. Au 
signal de l’éducateur, 2 joueurs (1 à droite et 1 à gauche de leur 
but) de chaque équipe rentrent dans le terrain. L’éducateur choisit 
de faire une passe à l’un ou l’autre des joueurs (ballon dosé donné 
à la main dans les pieds du joueur ou devant lui).Le joueur ayant 
le ballon doit aller marquer dans le but adverse en éliminant son 
adversaire ou en passant le ballon à son partenaire. Si les adver
saires récupèrent le ballon, ils tentent de marquer à leur tour mais 
le duo de l’équipe qui vient de perdre le ballon est remplacé par 2 
nouveaux joueurs.
Comptage des points : 1 point pour chaque but marqué, 1 point 
supplémentaire si la récupération du ballon a été suivie par une 
passe à un partenaire. 
À la fin de la séquence de 30’’, si aucun but n’a été marqué, les 2 
joueurs présents sur le terrain depuis le plus longtemps sortent.
Séquence : 15’ (maximum 30’’ par passage) - 1 à 2 ballons.`,
        rotations: `Lorsque tous les enfants sont passés 2 fois, on change les joueurs 
gardien de but. Si le nombre de joueurs est supérieur à 10, faire 
doubler certains enfants.`,
        vigilance: `Ne pas donner le ballon toujours à la même équipe. Donner le 
ballon à un joueur l’ayant eu le moins souvent. Modifier l’ordre des 
passages (= ne pas toujours jouer contre les mêmes adversaires).`,
        variables: `L’éducateur change de côté. 
L’éducateur donne le ballon en faisant une passe au pied. 
E
G
G
notes`,
        marqueurs: [{ x: 52.3, y: 48.7, type: 'ballon' }, { x: 73.9, y: 83.4, type: 'attaquant' }, { x: 73.2, y: 13.6, type: 'attaquant' }, { x: 71.0, y: 85.0, type: 'attaquant' }, { x: 73.3, y: 9.4, type: 'attaquant' }, { x: 14.8, y: 84.4, type: 'defenseur' }, { x: 11.6, y: 87.2, type: 'defenseur' }, { x: 53.0, y: 82.3, type: 'ballon' }, { x: 28.7, y: 78.1, type: 'plot' }, { x: 30.9, y: 77.6, type: 'plot' }, { x: 47.2, y: 54.8, type: 'plot' }, { x: 70.4, y: 18.7, type: 'attaquant' }, { x: 70.4, y: 6.6, type: 'attaquant' }, { x: 16.4, y: 90.4, type: 'defenseur' }, { x: 16.4, y: 78.3, type: 'defenseur' }, { x: 42.7, y: 61.1, type: 'plot' }, { x: 18.0, y: 48.7, type: 'ballon' }, { x: 68.5, y: 48.7, type: 'ballon' }, { x: 16.4, y: 19.0, type: 'defenseur' }, { x: 16.4, y: 6.9, type: 'defenseur' }, { x: 70.1, y: 90.4, type: 'attaquant' }, { x: 70.1, y: 78.3, type: 'attaquant' }, { x: 25.7, y: 21.2, type: 'plot' }, { x: 60.6, y: 78.0, type: 'plot' }, { x: 15.1, y: 12.6, type: 'defenseur' }, { x: 12.6, y: 15.9, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `jeu d’éveil technique`,
        surface: `36 x 28`,
        objectif: `Intervenir pour récupérer le ballon et relancer.`,
        consignes: `Le GB rouge relance sur le rouge 1, qui rentre dans la zone du 
bleu 1, tente d’éliminer et marquer. Si le bleu 1 récupère le ballon, 
il peut relancer sur le bleu 2 qui va marquer. (le bleu 1 accompagne 
l’attaque). À la perte de balle, le rouge 1 défend.
Lorsque l’action est terminée, on enchaîne avec 4 autres joueurs.
4 passages chacun puis inversion des rôles.
Comptage des points : but marqué = 1 point. But marqué après 
avoir récupéré et relancé = 2 points.
Séquence : 15’ (6 x 2’).`,
        rotations: `Il est nécessaire d’avoir le même nombre de joueurs par équipe. 
Si ce n’est pas le cas, mettre en place une rotation des joueurs. 
Rotation des gardiens de but à prévoir.`,
        vigilance: `Qualités défensives pour pouvoir relancer (ne pas se faire éliminer)
Sur la récupération, chercher à relancer le plus vite possible.`,
        variables: `Le rouge 1 peut jouer avec le rouge 2. Le bleu 1 doit s’adapter.
Si passe au rouge 2, le bleu 2 peut venir défendre (2 contre 2).`,
        marqueurs: [{ x: 50.0, y: 49.1, type: 'ballon' }, { x: 15.8, y: 49.1, type: 'but' }, { x: 82.7, y: 49.1, type: 'but' }, { x: 32.9, y: 67.0, type: 'plot' }, { x: 60.1, y: 28.4, type: 'attaquant' }, { x: 35.0, y: 70.1, type: 'attaquant' }, { x: 60.1, y: 69.3, type: 'defenseur' }, { x: 37.5, y: 26.1, type: 'defenseur' }, { x: 61.3, y: 5.4, type: 'attaquant' }, { x: 61.3, y: 93.2, type: 'defenseur' }, { x: 37.5, y: 5.4, type: 'defenseur' }, { x: 38.7, y: 92.9, type: 'attaquant' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 33,
    titre: `JE M’ORGANISE AVEC MON PARTENAIRE POUR EMPÊCHER L’ADVERSAIRE DE S’APPROCHER DE MON BUT.`,
    phase: 'defense',
    phaseLabel: `JE DÉFENDS`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    messageEducatif: `Lorsque je pratique un sport, je dois 
connaître ses règles du jeu afin de pouvoir le 
pratiquer dans les meilleures conditions.`,
    vocabulaire: `Je harcèle le porteur de balle sans me jeter`,
    exercices: [
      {
        id: 1,
        titre: `jeu collectif`,
        surface: `36 x 28`,
        objectif: `S’organiser avec son partenaire pour empêcher l’adversaire de 
s’approcher de son but.`,
        consignes: `But : densifier la zone où se trouve le ballon (défendre en bloc).
Consignes : quand mon équipe n’a pas le ballon, TOUS les joueurs 
doivent se trouver dans la zone du ballon. Mise en place de la 
relance protégée.
Comptage des points :
Récupérer le ballon dans la zone adverse (en respectant la 
consigne «TOUS les joueurs dans la zone) = 1 point.
Marquer un but = 1 point.
Séquence : 15’ (3 x 4’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Respecter et travailler la relance protégée.
Aux déplacements des défenseurs (se positionner entre le ballon et 
notre but) tout en restant dans la zone du ballon
Le joueur le plus proche «HARCÈLE» le porteur de balle sans se 
«jeter».`,
        variables: `Imposer une relance du gardien dans la surface de réparation.
Pénalité d’1 point par joueur qui n’est pas dans la bonne zone 
(dans un délai de 3’’).
G
G
zone 1
zone 2`,
        marqueurs: [{ x: 50.0, y: 50.3, type: 'ballon' }, { x: 84.0, y: 50.3, type: 'but' }, { x: 16.1, y: 50.0, type: 'but' }, { x: 55.0, y: 43.4, type: 'attaquant' }, { x: 71.3, y: 19.2, type: 'attaquant' }, { x: 66.4, y: 83.6, type: 'attaquant' }, { x: 58.1, y: 64.9, type: 'defenseur' }, { x: 70.0, y: 34.5, type: 'defenseur' }, { x: 51.9, y: 39.8, type: 'defenseur' }, { x: 58.4, y: 17.1, type: 'defenseur' }, { x: 48.4, y: 7.1, type: 'plot' }, { x: 15.9, y: 7.1, type: 'plot' }, { x: 38.6, y: 49.7, type: 'attaquant' }, { x: 72.4, y: 23.1, type: 'plot' }, { x: 84.6, y: 6.8, type: 'plot' }, { x: 52.2, y: 6.8, type: 'plot' }],
      },
      {
        id: 2,
        titre: `jeu d’opposition`,
        surface: `36 x 28`,
        objectif: `Défendre collectivement.`,
        consignes: `Les bleus attaquent à partir du milieu du terrain et sont libres 
dans leurs déplacements. Lorsque le ballon est sur l’un des 2 
ailiers, les 2 défenseurs doivent se retrouver dans la même zone.
Comptage des points : 
Si récupération = 1 point.
Si récupération, ils peuvent transmettre à l’un des 2 joueurs sur 
le côté qui attaquent en 2 contre 1 + le retour d’un joueur bleu (le 
milieu avec du retard). Si but = 3 points.
Séquence : 15’ (maximum 30’’ par passage).`,
        rotations: `Changer les rôles régulièrement. 5 passages pour les rouges puis 5 
passages bleus. Si les bleus marquent, l’éducateur injecte un ballon 
pour les rouges à l’opposé (pour jouer le 2 contre 1 +1) et ainsi 
garder un dynamisme dans l’activité.`,
        vigilance: `En 3 contre 2, défendre proche de son partenaire, en défendant 
l’accès au but.
En 2 contre 1, ne pas se jeter, retarder les adversaires afin de favo
riser le retour d’un partenaire.`,
        variables: `Démarrer sur le côté par un ailier.
Enlever des points quand les 2 défenseurs ne sont pas dans la 
même zone quand le ballon est sur l’ailier.
G
G
notes`,
        marqueurs: [{ x: 50.0, y: 48.7, type: 'ballon' }, { x: 15.8, y: 48.7, type: 'but' }, { x: 82.7, y: 48.7, type: 'but' }, { x: 38.2, y: 16.2, type: 'plot' }, { x: 56.7, y: 90.4, type: 'attaquant' }, { x: 55.5, y: 6.8, type: 'attaquant' }, { x: 36.4, y: 12.8, type: 'defenseur' }, { x: 48.9, y: 46.0, type: 'defenseur' }, { x: 31.7, y: 17.9, type: 'attaquant' }, { x: 36.4, y: 88.0, type: 'defenseur' }, { x: 70.7, y: 55.6, type: 'defenseur' }, { x: 31.8, y: 46.4, type: 'attaquant' }],
      },
      {
        id: 3,
        titre: `du 1 contre 2 au 3 contre 4`,
        surface: `36 x 28`,
        objectif: `S’organiser avec son partenaire pour empêcher l’adversaire de 
s’approcher de son but.`,
        consignes: `But : gestion d’une supériorité numérique en non-possession du 
ballon.
Consignes : alternance de 3 séquences. 1 contre 2 (A contre 1 et 2)
Puis 2 contre 3 (1 et 2 contre A, B et C). Puis 3 contre 4 (A, B et C 
contre 1, 2, 3 et 4).
Départ de chaque séquence avec le gardien de but.
Comptage des points : marquer un but = 1 point.
Séquence : 15’ (12 x 1’).`,
        rotations: `À la fin de chaque manche, on change l’équipe qui débute la sé
quence 1.`,
        vigilance: `Respecter la relance protégée.
Gérer le changement de statut et la réaction à la transition.`,
        variables: `Jouer le départ du ballon par un ballon magique plutôt qu’une 
remise en jeu par le gardien.
Valoriser la récupération en zone adverse (+1 point).`,
        marqueurs: [{ x: 50.0, y: 49.9, type: 'ballon' }, { x: 15.8, y: 49.9, type: 'but' }, { x: 82.7, y: 49.9, type: 'but' }, { x: 75.8, y: 64.1, type: 'plot' }, { x: 69.0, y: 91.9, type: 'attaquant' }, { x: 73.9, y: 67.5, type: 'attaquant' }, { x: 50.4, y: 70.9, type: 'defenseur' }, { x: 50.2, y: 33.3, type: 'defenseur' }, { x: 30.6, y: 93.1, type: 'defenseur' }, { x: 30.6, y: 5.5, type: 'defenseur' }, { x: 70.3, y: 5.5, type: 'attaquant' }, { x: 88.2, y: 66.7, type: 'attaquant' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 50.0, y: 49.7, type: 'ballon' }, { x: 62.4, y: 31.7, type: 'attaquant' }, { x: 48.2, y: 70.5, type: 'attaquant' }, { x: 41.1, y: 37.3, type: 'attaquant' }, { x: 35.4, y: 66.3, type: 'defenseur' }, { x: 50.4, y: 24.8, type: 'defenseur' }, { x: 36.4, y: 29.6, type: 'defenseur' }, { x: 55.8, y: 57.9, type: 'defenseur' }, { x: 63.7, y: 61.1, type: 'attaquant' }, { x: 83.6, y: 49.4, type: 'but' }, { x: 16.4, y: 50.7, type: 'but' }],
      },
    ],
  },
  {
    id: 34,
    titre: `SÉANCE D’ACCUEIL`,
    phase: 'accueil',
    phaseLabel: `SÉANCE D’ACCUEIL`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (4 x 3’). 30’’ de récupération entre les séquences.`,
        rotations: `Prévoir les rotations pour les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et faire 
monter et descendre sur le nombre x de terrains. Obliger les en
fants à être dans les zones des 4m pour pouvoir marquer. Valoriser 
par 2 points si le but est marqué de la zone des 4m. Empêcher 
l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.5, y: 49.0, type: 'ballon' }, { x: 26.1, y: 68.1, type: 'attaquant' }, { x: 41.9, y: 63.7, type: 'attaquant' }, { x: 80.8, y: 67.1, type: 'attaquant' }, { x: 65.1, y: 68.1, type: 'attaquant' }, { x: 26.1, y: 25.3, type: 'defenseur' }, { x: 43.1, y: 23.3, type: 'defenseur' }, { x: 67.2, y: 27.4, type: 'defenseur' }, { x: 80.8, y: 28.7, type: 'defenseur' }, { x: 53.3, y: 30.7, type: 'defenseur' }, { x: 16.6, y: 19.0, type: 'plot' }, { x: 16.6, y: 8.8, type: 'plot' }, { x: 16.4, y: 88.1, type: 'plot' }, { x: 16.4, y: 78.0, type: 'plot' }, { x: 52.7, y: 57.1, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `béret 2-2 ou 3-3`,
        surface: `18 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupérer 
le ballon.`,
        consignes: `But : empêcher l’adversaire de tirer.
Consignes : alternance de 2 contre 2 et 3 contre 3. Opposition 
définie selon la méthode «Béret» (on appelle 2 ou 3 numéros - at
tribués préalablement aux joueurs de chaque équipe). Au signal 
l’éducateur donne un ballon au sol à un joueur au choix. Quand un 
but est marqué ou si le ballon est sorti, l’éducateur injecte un 2ème 
ballon selon le principe «ballon magique». Les tirs ne peuvent se 
faire qu’en zone adverse. Faire des manches de 5 répétitions.
Comptage des points : but = 1 point.
Séquence : 15’ (5 x 2’30’’).`,
        rotations: `Changer les gardiens et numéros de joueurs à chaque manche.`,
        vigilance: `Si mon équipe défend, vite se positionner entre notre but et le 
ballon.
Aller vite vers le joueur adverse qui a le ballon («CADRER»).`,
        variables: `Départ des joueurs en position assise, couché, dos au jeu, etc.
Tester la vitesse de réaction.
Utilisation du ballon magique.
G
G
E
1
2
2
1
3
4
3
4
Terrain 1
Terrain 2
4m
4m`,
        marqueurs: [{ x: 49.3, y: 47.7, type: 'ballon' }, { x: 32.4, y: 48.6, type: 'ballon' }, { x: 67.5, y: 48.2, type: 'ballon' }, { x: 49.2, y: 87.5, type: 'ballon' }, { x: 55.4, y: 33.8, type: 'plot' }, { x: 28.2, y: 29.3, type: 'attaquant' }, { x: 71.5, y: 69.9, type: 'attaquant' }, { x: 27.1, y: 72.9, type: 'defenseur' }, { x: 70.9, y: 20.4, type: 'defenseur' }, { x: 38.8, y: 64.7, type: 'plot' }, { x: 69.3, y: 25.1, type: 'defenseur' }, { x: 29.8, y: 71.9, type: 'defenseur' }, { x: 69.3, y: 71.9, type: 'attaquant' }, { x: 29.8, y: 25.1, type: 'attaquant' }, { x: 24.6, y: 24.2, type: 'attaquant' }, { x: 74.0, y: 74.1, type: 'attaquant' }, { x: 72.7, y: 16.2, type: 'defenseur' }, { x: 24.9, y: 77.1, type: 'defenseur' }, { x: 41.6, y: 38.8, type: 'plot' }, { x: 58.9, y: 56.3, type: 'plot' }, { x: 36.8, y: 64.3, type: 'plot' }],
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
  {
    id: 35,
    titre: `SÉANCE D’ACCUEIL`,
    phase: 'accueil',
    phaseLabel: `SÉANCE D’ACCUEIL`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    exercices: [
      {
        id: 1,
        titre: `jeu de la brochette`,
        surface: `18 x 28`,
        objectif: `S’organiser avec son partenaire pour protéger le but et récupérer 
le ballon.`,
        consignes: `But : réaliser un parcours de motricité et marquer.
Consignes : exercice de vivacité. Le joueur A court jusqu’au piquet, 
le contourne et revient au départ, prend la main du joueur B pour 
faire le même parcours en duo (main dans la main). Dès la fin du 
parcours, l’éducateur transmet le ballon à l’équipe la plus rapide 
pour un 2 contre 2.
Comptage des points : but = 1 point.
Séquence : 15’ (maximum 1’ par passage).`,
        rotations: `À chaque passage, un des joueurs qui vient de passer remplace le 
gardien.`,
        vigilance: `Bien réaliser le parcours (changement de direction).
Réagir à la transition (je termine le parcours et je me projette en 
tant qu’attaquant ou défenseur).
L’ordre des joueurs différents (celui qui part en 1er fera plus de 
tours de parcours...).`,
        variables: `Varier la position du parcours (notamment la sortie pour entrer 
dans le terrain).
Faire du 3 contre 3.
Doubler l’atelier pour plus de répétitions (départ en décalage puis 
simultané).
G
G
E
A
B
A
B`,
        marqueurs: [{ x: 47.7, y: 47.9, type: 'ballon' }, { x: 51.7, y: 5.4, type: 'attaquant' }, { x: 50.9, y: 47.6, type: 'ballon' }, { x: 81.7, y: 47.9, type: 'ballon' }, { x: 44.7, y: 32.9, type: 'ballon' }, { x: 56.4, y: 6.0, type: 'attaquant' }, { x: 67.9, y: 21.3, type: 'plot' }, { x: 64.5, y: 5.0, type: 'attaquant' }, { x: 72.3, y: 92.5, type: 'defenseur' }, { x: 69.4, y: 91.5, type: 'defenseur' }, { x: 59.5, y: 21.1, type: 'plot' }, { x: 67.8, y: 89.4, type: 'defenseur' }, { x: 47.6, y: 89.0, type: 'defenseur' }, { x: 67.8, y: 5.9, type: 'attaquant' }, { x: 47.7, y: 6.5, type: 'attaquant' }, { x: 60.3, y: 5.4, type: 'attaquant' }, { x: 78.3, y: 93.6, type: 'defenseur' }, { x: 64.3, y: 62.6, type: 'plot' }, { x: 83.3, y: 5.9, type: 'attaquant' }, { x: 82.0, y: 93.6, type: 'defenseur' }, { x: 68.7, y: 16.1, type: 'plot' }, { x: 70.2, y: 6.0, type: 'plot' }, { x: 65.5, y: 59.7, type: 'plot' }, { x: 65.0, y: 89.9, type: 'plot' }],
      },
      {
        id: 2,
        titre: `du 1 contre 1 au 2 contre 2`,
        surface: `27 x 28`,
        objectif: `Feinter et éliminer un adversaire qui a du retard.
Conduire sous pression.`,
        consignes: `L’éducateur transmet le ballon au bleu 1 qui tente de marquer 
dans l’un des 2 buts. Au moment de la passe (ou du contrôle en 
fonction du niveau), le rouge 1 s’élance pour empêcher le bleu 1 de 
marquer. Dès l’action terminée, l’éducateur transmet à rouge 2 qui 
tente d’aller marquer dans un des 2 buts, pourchassé par le bleu 1 
(situation possible de 2 contre 1). Dès cette 2ème action terminée, le 
bleu 2 s’élance à son tour pour aller marquer et c’est le rouge 2 qui 
défend (situation possible de 2 contre 2).
1 manche correspond à l’enchaînement des 3 courses.
Comptage des points : 1 point par manche gagnée + 1 point par 
but marqué.
Séquence : 15’ (maximum 1’ par manche).`,
        rotations: `Rotation après 4 passages par équipe.`,
        vigilance: `Adapter la conduite selon la course de l’adversaire.
Prendre l’information.`,
        variables: `Finir sur un grand but avec GB. Rapprocher ou éloigner le départ 
des adversaires selon le niveau des enfants. Rester sur du 1 contre 
1 ou permettre le 2 contre 1 puis le 2 contre 2.
E
1
2
2
1`,
        marqueurs: [{ x: 51.4, y: 48.0, type: 'ballon' }, { x: 72.1, y: 50.9, type: 'attaquant' }, { x: 71.3, y: 44.7, type: 'attaquant' }, { x: 17.6, y: 92.8, type: 'attaquant' }, { x: 59.8, y: 6.3, type: 'defenseur' }, { x: 39.2, y: 85.0, type: 'ballon' }, { x: 47.0, y: 62.7, type: 'plot' }, { x: 67.1, y: 46.8, type: 'attaquant' }, { x: 20.1, y: 89.7, type: 'attaquant' }, { x: 67.3, y: 6.3, type: 'defenseur' }, { x: 67.4, y: 89.5, type: 'defenseur' }, { x: 67.3, y: 78.2, type: 'defenseur' }, { x: 15.7, y: 89.4, type: 'attaquant' }, { x: 24.5, y: 89.7, type: 'attaquant' }, { x: 67.3, y: 40.0, type: 'attaquant' }, { x: 67.3, y: 54.8, type: 'attaquant' }, { x: 63.5, y: 6.1, type: 'defenseur' }, { x: 56.9, y: 75.1, type: 'defenseur' }, { x: 70.8, y: 83.5, type: 'defenseur' }, { x: 67.7, y: 82.9, type: 'defenseur' }, { x: 66.0, y: 4.0, type: 'defenseur' }, { x: 54.8, y: 76.3, type: 'plot' }, { x: 41.2, y: 72.0, type: 'plot' }],
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
  {
    id: 36,
    titre: `SÉANCE D’ACCUEIL`,
    phase: 'accueil',
    phaseLabel: `SÉANCE D’ACCUEIL`,
    categorie: 'U8-U9',
    effectif: `10`,
    duree: `75 min`,
    materiel: [`déplacement`, `conduite / dribble`, `passe / tir`, `passe aérienne`, `kit arbitre`],
    exercices: [
      {
        id: 1,
        titre: `festifoot`,
        surface: `28 x 17`,
        objectif: `Gagner le match en s’opposant à 2 adversaires, sans gardien de 
but.`,
        consignes: `Les lois du jeu (touche, corner) sont identiques à celles des ren
contres. 
Principe d’une montante descendante : je gagne, je monte ; je 
perds, je descends. 
En cas de match à égalité 0 à 0 : Chifoumi en 1.
En cas de match à égalité avec des buts, l’équipe qui a égalisé, 
monte.
Le terrain 1 est le terrain le plus haut. Une zone d’attente pour les 
joueurs est matérialisée entre les 2 terrains.
Séquence : 15’ (4 x 3’). 30’’ de récupération entre les séquences.`,
        rotations: `Prévoir les rotations pour les équipes de 3.`,
        vigilance: `Prévoir une source de ballons à proximité du terrain pour augmen
ter le temps de jeu. Les joueurs qui sont en attente, remplissent la 
source de ballons.`,
        variables: `En fonction du nombre d’enfants, prévoir plus de 2 terrains et faire 
monter et descendre sur le nombre x de terrains. Obliger les en
fants à être dans les zones des 4m pour pouvoir marquer. Valoriser 
par 2 points si le but est marqué de la zone des 4m. Empêcher 
l’accès à la zone des 4m pour les défenseurs.`,
        marqueurs: [{ x: 53.5, y: 48.8, type: 'ballon' }, { x: 26.1, y: 67.9, type: 'attaquant' }, { x: 41.9, y: 63.5, type: 'attaquant' }, { x: 80.8, y: 66.9, type: 'attaquant' }, { x: 65.1, y: 67.9, type: 'attaquant' }, { x: 26.1, y: 25.1, type: 'defenseur' }, { x: 43.1, y: 23.0, type: 'defenseur' }, { x: 67.2, y: 27.2, type: 'defenseur' }, { x: 80.8, y: 28.5, type: 'defenseur' }, { x: 53.3, y: 30.5, type: 'defenseur' }, { x: 16.6, y: 18.8, type: 'plot' }, { x: 16.6, y: 8.6, type: 'plot' }, { x: 16.4, y: 87.9, type: 'plot' }, { x: 16.4, y: 77.8, type: 'plot' }, { x: 52.7, y: 56.9, type: 'attaquant' }],
      },
      {
        id: 2,
        titre: `ballon magique`,
        surface: `27 x 28`,
        objectif: `Attaquer et défendre en 2 contre 2.`,
        consignes: `Les enfants se trouvent au point de corner à droite et à gauche 
de leur but. L’éducateur a 2 ballons dans ses mains. Au signal de 
l’éducateur, 2 joueurs (à droite et à gauche de leur but) de chaque 
équipe rentrent dans le terrain. L’éducateur choisit de faire une 
passe à l’un ou l’autre des joueurs (ballon dosé donné à la main 
dans les pieds du joueur ou devant lui). Le joueur ayant le ballon 
doit aller marquer dans le but adverse en éliminant son adver
saire ou en passant le ballon à son partenaire. Si les adversaires 
récupèrent le ballon, ils tentent de marquer à leur tour. Si le ballon 
est récupéré par le GB, il relance à l’un de ses partenaires. Si le 
ballon sort en touche ou en sortie de but, l’éducateur injecte un 
2ème ballon en criant « Ballon magique ». Les joueurs se disputent 
alors ce ballon. 
À la fin de la séquence, les enfants quittent le terrain par les portes 
latérales et on recommence avec 4 autres. 
Séquence : 15’ - limiter à 45’’ de jeu (1 à 2 ballons) par séquence.`,
        rotations: `Lorsque tous les enfants sont passés 2 fois, on change les joueurs 
gardien de but. Si le nombre de joueurs est supérieur à 10, faire 
doubler certains enfants.`,
        vigilance: `Ne pas donner le ballon toujours à la même équipe
Donner le ballon à un joueur l’ayant eu le moins souvent. 
Modifier l’ordre des passages d’une équipe (= ne pas toujours jouer 
contre les mêmes adversaires).`,
        variables: `L’éducateur change de côté. 
L’éducateur donne le ballon en faisant une passe au pied. 
E
G
G
Terrain 1
Terrain 2
4m
4m`,
        marqueurs: [{ x: 52.6, y: 48.7, type: 'ballon' }, { x: 74.1, y: 83.5, type: 'attaquant' }, { x: 73.4, y: 13.7, type: 'attaquant' }, { x: 71.3, y: 85.1, type: 'attaquant' }, { x: 73.5, y: 9.5, type: 'attaquant' }, { x: 15.1, y: 84.4, type: 'defenseur' }, { x: 11.9, y: 87.3, type: 'defenseur' }, { x: 53.3, y: 82.3, type: 'ballon' }, { x: 28.9, y: 78.1, type: 'plot' }, { x: 31.2, y: 77.7, type: 'plot' }, { x: 47.4, y: 54.8, type: 'plot' }, { x: 70.6, y: 18.7, type: 'attaquant' }, { x: 70.6, y: 6.6, type: 'attaquant' }, { x: 16.7, y: 90.5, type: 'defenseur' }, { x: 16.7, y: 78.4, type: 'defenseur' }, { x: 43.0, y: 61.1, type: 'plot' }, { x: 18.3, y: 48.7, type: 'ballon' }, { x: 68.8, y: 48.7, type: 'ballon' }, { x: 16.7, y: 19.0, type: 'defenseur' }, { x: 16.7, y: 6.9, type: 'defenseur' }, { x: 70.3, y: 90.5, type: 'attaquant' }, { x: 70.3, y: 78.4, type: 'attaquant' }, { x: 26.0, y: 21.2, type: 'plot' }, { x: 60.9, y: 78.1, type: 'plot' }, { x: 15.3, y: 12.6, type: 'defenseur' }, { x: 12.8, y: 16.0, type: 'defenseur' }],
      },
      {
        id: 3,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (3 x 5’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.`,
        marqueurs: [{ x: 49.3, y: 49.8, type: 'ballon' }, { x: 61.7, y: 31.2, type: 'attaquant' }, { x: 47.5, y: 71.1, type: 'attaquant' }, { x: 40.3, y: 37.0, type: 'attaquant' }, { x: 34.7, y: 66.8, type: 'defenseur' }, { x: 49.7, y: 24.1, type: 'defenseur' }, { x: 35.7, y: 29.1, type: 'defenseur' }, { x: 55.1, y: 58.1, type: 'defenseur' }, { x: 63.0, y: 61.4, type: 'attaquant' }, { x: 82.8, y: 49.5, type: 'but' }, { x: 15.7, y: 50.7, type: 'but' }],
      },
      {
        id: 4,
        titre: `match`,
        surface: `36 x 28`,
        objectif: `Match 5 contre 5.`,
        consignes: `Faire jouer de manière libre les enfants en insistant sur le respect 
des lois du jeu. 
Rappel : touche au pied en conduite de balle ou en passe (interdic
tion de marquer directement sur la passe mais possibilité de tirer 
et marquer quand rentrée en conduite de balle).
Corner uniquement en passe.
Relance protégée dans la zone des 8m.
Engagement au centre du terrain.
Mise à distance à 4m sur l’engagement, les coups-francs, les corners 
et les touches.
Pénalty face au but sur la ligne des 8m.
Séquence : 15’ (2 x 7’30’’).`,
        rotations: `Rotation sur le poste de gardien de but.
Si vous avez plus de 10 joueurs, les enfants sont en attente et 
intègrent la rotation.`,
        vigilance: `Faire respecter les lois du jeu. 
Faire jouer tous les enfants le même temps de jeu.
Modifier les équipes si l’écart de buts est supérieur à 3.
G
G
G
G`,
        marqueurs: [{ x: 49.4, y: 48.4, type: 'ballon' }, { x: 61.9, y: 30.4, type: 'attaquant' }, { x: 47.6, y: 69.1, type: 'attaquant' }, { x: 40.5, y: 35.9, type: 'attaquant' }, { x: 34.8, y: 65.0, type: 'defenseur' }, { x: 49.8, y: 23.5, type: 'defenseur' }, { x: 35.8, y: 28.3, type: 'defenseur' }, { x: 55.2, y: 56.5, type: 'defenseur' }, { x: 63.1, y: 59.7, type: 'attaquant' }, { x: 83.0, y: 48.1, type: 'but' }, { x: 15.8, y: 49.3, type: 'but' }],
      },
    ],
  },
];