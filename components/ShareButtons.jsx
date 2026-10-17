"use client";

import { useEffect, useState } from "react";

export default function ShareButtons({ title, url }) {
  const [canShare, setCanShare] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setCanShare(typeof navigator.share === "function");
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    setMessage("");

    try {
      await navigator.clipboard.writeText(url);
      setMessage("Lien copié !");
    } catch {
      setMessage("Copiez le lien dans le champ ci-dessous.");
    }
  }

  async function shareArticle() {
    setMessage("");

    try {
      await navigator.share({
        title,
        url
      });
    } catch (error) {
      if (error?.name !== "AbortError") {
        setMessage(
          "Le partage n’a pas pu être ouvert. Vous pouvez copier le lien."
        );
      }
    }
  }

  return (
    <section className="article-share" aria-label="Partager cet article">
      <h2 className="article-share-title">
        Cet article vous a intéressé ?
      </h2>

      <p className="article-share-description">
        Partagez-le et poursuivez la discussion.
      </p>

      <div className="article-share-actions">
        <a
          className="article-share-button"
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur X, ouvre un nouvel onglet"
        >
          Partager sur X
        </a>

        <a
          className="article-share-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur Facebook, ouvre un nouvel onglet"
        >
          Facebook
        </a>

        <a
          className="article-share-button"
          href={`https://wa.me/?text=${encodeURIComponent(
            `${title}\n${url}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur WhatsApp, ouvre un nouvel onglet"
        >
          WhatsApp
        </a>

        <button
          className="article-share-button"
          type="button"
          onClick={copyLink}
        >
          Copier le lien
        </button>

        {canShare ? (
          <button
            className="article-share-button article-share-button-primary"
            type="button"
            onClick={shareArticle}
          >
            Partager…
          </button>
        ) : null}
      </div>

      <p className="article-share-status" role="status">
        {message}
      </p>

      {message === "Copiez le lien dans le champ ci-dessous." ? (
        <input
          className="article-share-url"
          aria-label="Lien de l’article à copier"
          value={url}
          readOnly
          onFocus={(event) => event.target.select()}
        />
      ) : null}

      <style jsx>{`
        .article-share {
          margin: 40px 0 28px;
          padding: 26px 0;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .article-share-title {
          margin: 0 0 8px;
          font-size: 22px;
          line-height: 1.3;
          color: inherit;
        }

        .article-share-description {
          margin: 0 0 18px;
          color: #64748b;
          font-size: 15px;
          line-height: 1.6;
        }

        .article-share-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .article-share-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 10px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 999px;
          background: #ffffff;
          color: #1e293b;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          text-decoration: none;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .article-share-button:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
        }

        .article-share-button:focus-visible {
          outline: 3px solid #2e6fd8;
          outline-offset: 3px;
        }

        .article-share-button-primary {
          background: #1e293b;
          border-color: #1e293b;
          color: #ffffff;
        }

        .article-share-button-primary:hover {
          background: #334155;
          border-color: #334155;
        }

        .article-share-status {
          margin: 12px 0 0;
          color: #475569;
          font-size: 14px;
        }

        .article-share-status:empty {
          display: none;
        }

        .article-share-url {
          box-sizing: border-box;
          width: 100%;
          margin-top: 10px;
          padding: 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font: inherit;
          font-size: 14px;
        }

        @media (max-width: 480px) {
          .article-share-button {
            flex: 1 1 auto;
          }
        }
      `}</style>
    </section>
  );
}
