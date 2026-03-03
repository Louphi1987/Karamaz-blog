import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import AdBanner from "../../../components/AdBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article introuvable"
    };
  }

  const imageUrl = post.image ? new URL(post.image, siteUrl).toString() : "";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/posts/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: new URL(`/posts/${post.slug}`, siteUrl).toString(),
      images: imageUrl ? [{ url: imageUrl }] : []
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      images: imageUrl ? [imageUrl] : []
    }
  };
}

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article-page">
      <nav className="back-nav" aria-label="Navigation article">
        <Link href="/" className="back-link">
          {"<- Retour au menu principal"}
        </Link>
      </nav>

      <header className="post-header">
        <h1 className="page-title">{post.title}</h1>
        {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : null}
      </header>

      {post.image ? (
        <figure className="post-figure">
          <img src={post.image} alt={post.imageAlt || post.title} className="post-hero-image" />
        </figure>
      ) : null}

      <AdBanner slot="3333333333" label="Publicite en debut d'article" />

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <AdBanner slot="4444444444" label="Publicite en fin d'article" />

      <p className="post-back-bottom">
        <Link href="/" className="back-link">
          {"<- Retour a l'accueil"}
        </Link>
      </p>
    </article>
  );
}
