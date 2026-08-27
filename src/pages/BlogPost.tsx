import { Link, Navigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="page article">
      <p className="eyebrow">{post.date}</p>
      <h1>{post.title}</h1>
      <p className="lede">{post.dek}</p>
      {post.body.map((para) => (
        <p key={para.slice(0, 24)}>{para}</p>
      ))}
      <p>
        <Link to="/blog">← All posts</Link>
      </p>
    </main>
  );
}
