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
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

Cette variable sert pour les URLs canoniques, Open Graph et sitemap.

`NEXT_PUBLIC_ADSENSE_CLIENT` active automatiquement les emplacements publicitaires (sinon le site affiche un placeholder discret).

## Logo et images

- Place ton logo dans `public/logo-karamaz.png` pour l'afficher dans le header.
- Pour les images d'articles, ajoute-les dans `public/images/posts`.
- Dans le frontmatter Markdown d'un article, tu peux ajouter:

```md
---
title: "Mon article"
description: "..."
date: "2026-03-01"
image: "/images/posts/mon-image.jpg"
imageAlt: "Description image"
---
```

## Déploiement Vercel

1. Pousser le dépôt sur GitHub.
2. Importer le repo dans Vercel.
3. Ajouter `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement Vercel.
4. Déployer.
