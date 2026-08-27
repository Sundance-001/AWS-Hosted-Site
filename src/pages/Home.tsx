import { Link } from "react-router-dom";
import { eras } from "../data/eras";
import { lists } from "../data/lists";
import { posts } from "../data/posts";

export default function Home() {
  const latest = posts[posts.length - 1];
  const featuredEras = [eras[0], eras[3], eras[eras.length - 1]];

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">A private screening, open to the public</p>
        <h1>Movies, kept like a diary</h1>
        <p className="lede">
          mySundance is a home for a movie buff: eras from the first talkies to
          the superhero machine, lists for rewatching, and posts that argue with
          the canon without throwing it out.
        </p>
        <div className="hero-actions">
          <Link className="btn" to="/decades">
            Cinema over the decades
          </Link>
          <Link className="btn btn-ghost" to="/blog">
            Read the blog
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Walk the timeline</h2>
          <Link to="/decades">Full decades →</Link>
        </div>
        <div className="card-grid">
          {featuredEras.map((era) => (
            <Link key={era.slug} className="tile" to={`/decades#${era.slug}`}>
              <p className="tile-meta">{era.years}</p>
              <h3>{era.name}</h3>
              <p>{era.kicker}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="panel">
          <p className="eyebrow">Latest post</p>
          <h2>
            <Link to={`/blog/${latest.slug}`}>{latest.title}</Link>
          </h2>
          <p>{latest.dek}</p>
          <Link to="/blog">All posts →</Link>
        </article>
        <article className="panel">
          <p className="eyebrow">Lists</p>
          <ul className="plain-list">
            {lists.map((list) => (
              <li key={list.slug}>
                <Link to={`/lists/${list.slug}`}>{list.title}</Link>
                <span> — {list.dek}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
