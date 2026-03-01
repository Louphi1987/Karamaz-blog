import { getAllPosts } from "../lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: new URL(`/posts/${post.slug}`, siteUrl).toString(),
    lastModified: post.date ? new Date(post.date) : new Date()
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    {
      url: new URL("/about", siteUrl).toString(),
      lastModified: new Date()
    },
    ...posts
  ];
}
