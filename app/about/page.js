export const metadata = {
  title: "A propos",
  description: "Ligne editoriale de Karamaz Blog et accompagnement des auteurs independants."
};

export default function AboutPage() {
  return (
    <section className="about-panel">
      <h1 className="page-title">A propos</h1>
      <p>
        Karamaz est un blog litteraire centre sur les grandes oeuvres et leurs passages marquants, avec une
        attention particuliere pour Dostoievski.
      </p>
      <p>
        Le site propose aussi des ressources pratiques pour auteurs independants: clarifier son positionnement,
        valoriser un manuscrit et mieux promouvoir un projet d'ecriture en ligne.
      </p>
    </section>
  );
}
