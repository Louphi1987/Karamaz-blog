import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karamaz Blog",
    template: "%s | Karamaz Blog"
  },
  description: "Blog littéraire minimal autour de Dostoïevski.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Karamaz Blog",
    description: "Blog littéraire minimal autour de Dostoïevski.",
    url: siteUrl,
    siteName: "Karamaz Blog",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Karamaz Blog",
    description: "Blog littéraire minimal autour de Dostoïevski."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <a href="/" className="site-title">
              Karamaz
            </a>
            <p className="site-tagline">Chroniques littéraires minimalistes</p>
          </header>

          {/* Google AdSense global script placeholder
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          */}

          <main>{children}</main>

          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Karamaz Blog</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
