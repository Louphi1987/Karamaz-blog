import Link from "next/link";
import { getAllPosts } from "../lib/posts";

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
    <section>
      <div className="ad-slot" aria-label="Emplacement publicitaire">
        {/* AdSense emplacement haut de page
        <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXX" data-ad-slot="1111111111" data-ad-format="auto" data-full-width-responsive="true" />
        */}
      </div>

      <h1 className="page-title">Articles</h1>

      {posts.length === 0 ? (
        <p>Aucun article pour le moment.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <h2>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? <p>{post.description}</p> : null}
              {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : null}
            </li>
          ))}
        </ul>
      )}

      <div className="ad-slot" aria-label="Emplacement publicitaire">
        {/* AdSense emplacement bas de page
        <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXX" data-ad-slot="2222222222" data-ad-format="auto" data-full-width-responsive="true" />
        */}
      </div>
    </section>
  );
}
