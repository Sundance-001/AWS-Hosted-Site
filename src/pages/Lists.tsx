import { Link } from "react-router-dom";
import { lists } from "../data/lists";

export default function Lists() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Ranked, loosely</p>
        <h1>Lists</h1>
        <p className="lede">
          Desert-island films, opening shots, a 70s sidebar, and comfort
          rewatches. Canon is a starting point, not a police force.
        </p>
      </header>
      <div className="card-grid">
        {lists.map((list) => (
          <Link key={list.slug} className="tile" to={`/lists/${list.slug}`}>
            <p className="tile-meta">{list.entries.length} films</p>
            <h3>{list.title}</h3>
            <p>{list.dek}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
