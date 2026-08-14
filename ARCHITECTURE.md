## Architecture

### Arborescence

```text
src/
├── components/
│   ├── CardManager.tsx
│   ├── ChartManager.tsx
│   ├── Header.tsx
│   └── PageLoader.tsx
│
├── data/
│   └── olympicsData.ts
│
├── hooks/
│   └── useData.ts
│
├── layouts/
│   └── AppLayout.tsx
│
├── models/
│   └── olympicsData.ts
│   └── Status.ts
│
├── pages/
│   ├── CountryPage.tsx
│   └── DashboardPage.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── utils/
│   ├── calcUtils.ts
│   └── chartUtils.ts
│
└── App.tsx
```

### Schéma de données
⇑ (flux de rendu/props)

⇓ (flux de récupération des données)

```text
Composants
    ⇑
Pages
    ⇑
AppLayout [SMART]
    ⇓
hooks/useData.ts
    ⇓
data/olympicsData.ts (puis services/API)
    ⇓
Backend
```

**LAYOUT**

Le layout récupère la donnée de l'API (aujourd'hui data) via le hook `useData`.
La donnée est ainsi partagée entre les pages `Dashboard` et `Country` qui reçoivent les données depuis le layout.
Les pages transmettent la donnée nécessaire à leurs composants.
Seul le layout est dit "smart"

**HOOKS**

useData constitue le point de contact avec les données, tandis que les pages et composants restent principalement dédiés au rendu. Cette séparation permet de découpler la récupération et la gestion des données de l'affichage. À terme, le remplacement de `data/olympicsData.ts` par un service/API pourra se faire sans modifier la logique d'affichage.

**COMPONENTS**

*ChartManager* permet de conserver la logique et les imports liés aux graphiques dans un seul fichier.
*PageLoader* fait office de page de chargement et page d'erreur.

**UTILS**

La logique métier et la préparation des données des graphiques sont extraites dans des fichiers utils dédiés, afin de séparer la logique de l'affichage.

*ChartUtils* devrait devenir complètement agnostique.
