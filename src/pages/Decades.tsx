import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { eras } from "../data/eras";

export default function Decades() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">The long take</p>
        <h1>Cinema over the decades</h1>
        <p className="lede">
          From Vitaphone discs to shared universes: a walk through how movies
          sounded, sold, and argued with their own moment. Each era has a short
          essay and a handful of films worth putting on tonight.
        </p>
      </header>

      <ol className="era-index">
        {eras.map((era) => (
          <li key={era.slug}>
            <a href={`#${era.slug}`}>
              <strong>{era.name}</strong>
              <span>{era.years}</span>
            </a>
          </li>
        ))}
      </ol>

      {eras.map((era) => (
        <section key={era.slug} id={era.slug} className="era">
          <p className="tile-meta">{era.years}</p>
          <h2>{era.name}</h2>
          <p className="kicker">{era.kicker}</p>
          <p>{era.body}</p>
          <ul className="film-list">
            {era.films.map((film) => (
              <li key={`${film.title}-${film.year}`}>
                <h3>
                  {film.title} <span>({film.year})</span>
                </h3>
                <p className="director">{film.director}</p>
                <p>{film.note}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
