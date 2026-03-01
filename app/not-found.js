import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="page-title">Article introuvable</h1>
      <p>Le contenu demandé n'existe pas.</p>
      <p>
        <Link href="/">Retour à l'accueil</Link>
      </p>
    </section>
  );
}
