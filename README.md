# Exercices d'intégration WEB avec Tailwind CSS

## Ce qu'il vous est demandé

- Intégrez la maquette ci-jointe en utilisant Tailwind CSS.

- Vous devez utiliser les classes de base de Tailwind CSS, sans ajouter de classes personnalisées.

- Vous devez évitez au maximum d'utiliser du CSS personnalisé ainsi que le mode just-in-time de tailwind.

- Configurez les couleurs dans le fichier de configuration de Tailwind CSS.

- Également configurez un github actions pour générer déployer automatiquement votre site sur github pages (en générant votre fichier css de sortie via la github action)

## Ressources

- Maquette figma : https://www.figma.com/design/3qSIxYE3qnseh5MGMzeGg3/TD---Tailwind?node-id=0-1&t=BLarjwK7piTUdc4Z-1

- Ou bien en image : ![maquette](./maquettes/homepage.pdf) et pour la version mobile ![maquette](./maquettes/homepage_mobile.pdf)

- Pour la création de la github action, vous pouvez utiliser la template suivant:

```yaml
name: Build and deploy to github pages

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - uses: actions/setup-node@v2
        with:
          node-version: "18"

      - run: npx tailwindcss --input src/tailwind.css -o public/out.css

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: "."

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

(Documentation officielle github actions : https://docs.github.com/fr/actions/about-github-actions/understanding-github-actions)
