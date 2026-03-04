import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karamaz Blog",
    template: "%s | Karamaz Blog"
  },
  description: "Blog litteraire premium autour des grandes oeuvres et de l'edition independante.",
  alternates: {
    canonical: "/"
  },

  other: {
    "google-adsense-account": adsenseClient
  },

  openGraph: {
    title: "Karamaz Blog",
    description: "Blog litteraire premium autour des grandes oeuvres et de l'edition independante.",
    url: siteUrl,
    siteName: "Karamaz Blog",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Karamaz Blog",
    description: "Blog litteraire premium autour des grandes oeuvres et de l'edition independante."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="brand-row">
              <Link href="/" className="brand-link" aria-label="Retour a l'accueil">
                <img src="/logo-karamaz.png" alt="Logo Karamaz" className="brand-logo" />
                <span className="brand-text">
                  <span className="site-title">Karamaz</span>
                  <span className="site-tagline">Lettres, editions et strategie d'auteur</span>
                </span>
              </Link>
              <nav className="site-nav" aria-label="Menu principal">
                <Link href="/">Accueil</Link>
                <Link href="/#articles">Articles</Link>
                <Link href="/about">A propos</Link>
              </nav>
            </div>
          </header>

          {adsenseClient ? (
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          ) : null}

          <main>{children}</main>

          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Karamaz Blog</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
