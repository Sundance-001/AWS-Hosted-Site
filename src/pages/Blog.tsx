import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  const ordered = [...posts].reverse();

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Program notes</p>
        <h1>Blog</h1>
        <p className="lede">
          Arguments, rewatches, and the occasional defense of a crowd-pleaser.
          Nothing here is homework.
        </p>
      </header>
      <ul className="post-index">
        {ordered.map((post) => (
          <li key={post.slug}>
            <p className="tile-meta">{post.date}</p>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.dek}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
