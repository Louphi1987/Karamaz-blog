import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import AdBanner from "../components/AdBanner";

export const metadata = {
  title: "Accueil",
  description: "Classements et lectures dostoïevskiennes en format blog minimal."
};

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

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="hero-panel">
        <p className="hero-kicker">Karamaz Blog</p>
        <h1 className="page-title">Lectures profondes et aide a la publication independante</h1>
        <p className="hero-copy">
          Critiques, passages marquants et ressources concretes pour mieux ecrire, diffuser et faire connaitre
          tes projets d'ecriture.
        </p>
      </section>

      <AdBanner slot="1111111111" label="Publicite en haut de page" />

      <section id="articles">
        <h2 className="section-title">Articles</h2>

        {posts.length === 0 ? (
          <p>Aucun article pour le moment.</p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug} className="post-item">
                {post.image ? (
                  <Link href={`/posts/${post.slug}`} className="post-thumb-link">
                    <img src={post.image} alt={post.imageAlt || post.title} className="post-thumb" loading="lazy" />
                  </Link>
                ) : null}
                <h3>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.description ? <p>{post.description}</p> : null}
                {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      <AdBanner slot="2222222222" label="Publicite en bas de page" />
    </>
  );
}
