export const metadata = {
  title: "A propos",
  description: "Ligne editoriale de Karamaz Blog et accompagnement des auteurs independants."
};

export default function AboutPage() {
  return (
    <section className="about-panel">
      <h1 className="page-title">A propos</h1>
      <p>
        La vocation de Karamaz est d'informer sur la litterature en general, avec des selections d'articles utiles,
        inspires et accessibles, tout en accompagnant les auteurs independants dans le developpement de leurs projets.
      </p>
      <p>
        Nous mettons aussi a disposition une plateforme dediee pour aider les auteurs independants a recevoir des
        retours de la communaute, gagner en visibilite et offrir aux lecteurs l'opportunite de developper leurs
        competences, jusqu'a devenir contributeur editorial.
      </p>
      <a href="https://www.karamaz.eu/" className="about-cta-link" rel="noreferrer">
        Decouvrir la plateforme
      </a>
    </section>
  );
}
