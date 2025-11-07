# Quiz de Naturalisation - Canton de Neuchâtel 🇨🇭

Application web pour tester les connaissances nécessaires à la naturalisation suisse dans le canton de Neuchâtel.

## Technologies utilisées

- **Astro** - Framework web moderne
- **Lit** - Web Components légers et performants
- **Shoelace** - Bibliothèque de composants UI
- **TypeScript** - Typage statique

## Fonctionnalités

- ✅ 70 questions officielles (géographie, histoire, politique, social)
- ✅ 16 questions par test (4 par thème)
- ✅ Au moins 1 question cantonale par thème
- ✅ Questions à choix multiples et questions ouvertes
- ✅ Validation intelligente des réponses
- ✅ Résultats détaillés avec corrections
- ✅ Design responsive et moderne
- ✅ Test réussi avec 10/16 réponses correctes

## Installation

```bash
# Installer les dépendances
npm install
```

## Développement

```bash
# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur \`http://localhost:4321\`

## Build

```bash
# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## Structure du projet

```
neuchatel-citizenship-quiz/
├── src/
│   ├── components/
│   │   └── quiz-app.ts          # Composant Lit principal
│   ├── data/
│   │   └── questions.ts         # Base de données des questions
│   └── pages/
│       └── index.astro          # Page principale
├── public/
└── package.json
```

## Comment utiliser

1. Cliquez sur "Commencer le Quiz"
2. Répondez aux 16 questions
3. Pour les questions à choix multiples, sélectionnez une option
4. Pour les questions ouvertes, tapez votre réponse
5. Utilisez les boutons "Précédent" et "Suivant" pour naviguer
6. À la fin, consultez vos résultats détaillés
7. Vous réussissez avec au moins 10 bonnes réponses sur 16

## Questions officielles

Les questions proviennent du questionnaire officiel du Canton de Neuchâtel, valable à partir du 1er juin 2024.

## License

MIT
