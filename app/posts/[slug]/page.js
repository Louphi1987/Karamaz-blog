import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

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
      url: new URL(`/posts/${post.slug}`, siteUrl).toString()
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description
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
    <article>
      <header className="post-header">
        <h1 className="page-title">{post.title}</h1>
        {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : null}
      </header>

      <div className="ad-slot" aria-label="Emplacement publicitaire">
        {/* AdSense emplacement début d'article
        <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXX" data-ad-slot="3333333333" data-ad-format="auto" data-full-width-responsive="true" />
        */}
      </div>

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <div className="ad-slot" aria-label="Emplacement publicitaire">
        {/* AdSense emplacement fin d'article
        <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXX" data-ad-slot="4444444444" data-ad-format="auto" data-full-width-responsive="true" />
        */}
      </div>
    </article>
  );
}
