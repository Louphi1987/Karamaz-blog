import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import AdBanner from "../components/AdBanner";

export const metadata = {
  title: "Accueil",
  description: "Classements, critiques et conseils pour auteurs avec une experience de lecture premium."
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
      <section className="hero-cover">
        <img
          src="/images/couverture-karamaz.png"
          alt="Bibliotheque chaleureuse et ambiance litteraire Karamaz"
          className="hero-cover-image"
        />
        <div className="hero-overlay">
          <p className="hero-kicker">Karamaz Blog</p>
          <h1 className="page-title">Un salon litteraire premium pour lecteurs exigeants et auteurs independants</h1>
          <p className="hero-copy">
            Analyses de grandes oeuvres, selections marquantes et outils concrets pour structurer, publier et faire
            rayonner tes projets d'ecriture.
          </p>
          <Link href="#articles" className="hero-cta">
            Explorer les articles
          </Link>
        </div>
      </section>

      <AdBanner slot="1111111111" label="Publicite en haut de page" />

      <section id="articles" className="articles-panel">
        <h2 className="section-title">Derniers articles</h2>

        {posts.length === 0 ? (
          <p className="empty-state">Aucun article pour le moment.</p>
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
                <div className="post-meta">
                  {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : <span>Lecture</span>}
                  <Link href={`/posts/${post.slug}`} className="read-link">
                    Lire
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <AdBanner slot="2222222222" label="Publicite en bas de page" />
    </>
  );
}
