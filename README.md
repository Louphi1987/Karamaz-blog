# Karamaz Blog

Blog minimal en Next.js (App Router), orienté littérature, avec articles Markdown, SEO de base et structure prête pour Google AdSense.

## About

Blog sur Karamaz et aide pour auteurs indépendants.

Le projet propose une sélection d'articles littéraires (notamment autour de Dostoïevski) et des contenus utiles pour la promotion de projets d'écriture: visibilité, publication, et diffusion de textes.

## Stack

- Next.js (App Router)
- Markdown local dans `/posts` (pas de base de données)
- SEO natif via `metadata`, `sitemap`, `robots`
- Emplacements publicitaires AdSense commentés dans le code

## Lancer en local

```bash
npm install
npm run dev
```

Site local: `http://localhost:3000`

## Variables d'environnement

Créer `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://ton-domaine-vercel.vercel.app
```

Cette variable sert pour les URLs canoniques, Open Graph et sitemap.

## Déploiement Vercel

1. Pousser le dépôt sur GitHub.
2. Importer le repo dans Vercel.
3. Ajouter `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement Vercel.
4. Déployer.
