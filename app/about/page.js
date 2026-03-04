export const metadata = {
  title: "A propos",
  description: "Ligne editoriale de Karamaz Blog et accompagnement des auteurs independants."
};

export default function AboutPage() {
  return (
    <section className="about-panel">
      <h1 className="page-title">A propos</h1>
      <p>
        La vocation de Karamaz est d'informer sur la littérature en général, avec des sélections d'articles utiles,
        inspirés et accessibles, tout en accompagnant les auteurs indépendants dans le développement de leurs projets.
      </p>
      <p>
        Nous mettons aussi à disposition une plateforme dédiée pour aider les auteurs indépendants à recevoir des
        retours de la communauté, gagner en visibilité et offrir aux lecteurs l'opportunité de développer leurs
        compétences, jusqu'à devenir contributeur éditorial.
      </p>
      <a href="https://www.karamaz.eu/" className="about-cta-link" rel="noreferrer">
        Découvrir la plateforme
      </a>
    </section>
  );
}
