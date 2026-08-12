# Notes d'architecture

## Schéma des notes

### Catégorie
❗​Anti-pattern identifié

Exemple

**=> Action proposée**

- Autres propositions

---
## Notes

### Pages/Composants
❗​Code dupliqué

`<div className="mb-2">` l.233 et l.337

**=> Créer un composant Card.tsx**

❗​Composants incohérents avec le nom du fichier et plusieurs composants dans le même fichier

`Home` et `Country` sont définis dans `App.tsx`

**=> Déplacer `Home` dans `pages/Home.tsx`**

**=> Déplacer `Country` dans `pages/Country.tsx`**

- Créer un composant `Header`
- Home/Country contiennent deux divs imbriquées (219-220 et 332-333). La div parent `<div className="min-h-screen bg-gray-900 text-white p-8">` peut être partagée => Créer un layout pour gérer le style général des pages

### Routes :
❗​Routing dans App.tsx

**=> Déplacer la logique des routes dans `routes/AppRoutes.jsx`**

### Hooks :
❗​Appels HTTP dans les composants : la logique de récupération des données est couplée à l'UI.

`useEffect` l.154

**=> Déplacer la logique de récupération des données dans un custom hook**

❗​État de chargement dérivé des données au lieu d'un état dédié (loading/error)
```js
  if (!data) {
    return <div>Chargement...</div>
  }
```
**=> Gérer les loaders dans le même hook**

- Un layout commun peut appeler ce hook, afin que les pages enfants partagent les mêmes données.

### Utils :
❗​Logique métier et données de graphiques dans les composants

**=> Créer des fichiers par responsabilité**

=> `calcUtils.ts` : calculateTotalMedals l.165, totalMedals l.276, totalAthletes l.280

=> `chartUtils.ts` : chartData l.180, chartOptions l.205, evolutionData l.287, evolutionOptions l.300

### Data :
❗​Données directement gérées dans un composant

**=> Déplacer olympicsData l.28 dans un dossier data (puis service/api)**

### Typescript :
❗​Utilisation de `any`

Par exemple l.28 `const olympicsData: any = [` et l.149 `const [data, setData] = useState<any>(null)`

**=> Typer pour garder les bénéfices TypeScript**

- olympicsData => typer les params
- Vérifier la nomenclature du champ `name` dans olympicsData (`country` dans la doc)

### Html/Css :
- shadow inutile
- style => className `<div style={{ height: '400px' }}>` l.249 et l.355

### Misc :
❗​console.log de debug

Exemples l.156, l.160, l.269, l.274

**=> supprimer les console.log()**

- `Type FC` inutile dans les composants : préférer le typage direct des props
- totalGamesEditions l.173 peut être déduit de olympicsData
