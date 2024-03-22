# front

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

https://www.jlg-consulting.com/orsys/
Github

Shift + . = ouvrir le projet dans vscode
Ctrl + shift + K : supprimer la ligne sélectionnée
Ctrl + D après avoir sélectionné un truc
&nbsp crée des espaces insécables
Middleware : middleware de transition
Pour exécuter du ts : npm exec tsc server.ts OU npx tsc server.ts
La const app de vue est une instance de App

# LIBRARIES

[FontAwesome](https://docs.fontawesome.com/web/use-with/vue) allow for the use of free SVG icons.

# Outil

- Sur le navigateur : lighthouse (dispo par exemple [pour Chrome](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk))
- [Bibliothèque pour l'internationalisation](https://www.i18next.com/)
- [Thunderclient](https://www.thunderclient.com/) pour tester une API depuis VSCode
- [Serveindex](https://www.npmjs.com/package/serve-index) pour qu'accéder à une page (par ex : localhost:3000/MesDocuments) permette de naviguer dans les dossier.
- Pour recharger le serveur dès qu'il y a changement : [Nodemon](https://www.npmjs.com/package/nodemon)
- CSS : normalize.css normalise le CSS pour qu'il soit compatible entre navigateurs.
- W3c validator pour valider le HTML avec W3c.

# Sites et lectures recommandées

[WebDev](https://web.dev/?hl=fr)
[Refactoring Guru](https://refactoring.guru/fr)

- One Hundred Things Every Designer Needs to Know
- Refactoring UI

# Bonne pratique

- Ne s'intéresser à la performance que quand elle pose problème
- Gérer le serveur-side rendering : c'est utile pour l'indexeur google
- Dans le ReadMe, indiquer la version de node
- Dans package-json : toujours remplir test/start
