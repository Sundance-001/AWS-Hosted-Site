import { Link, Navigate, useParams } from "react-router-dom";
import { lists } from "../data/lists";

export default function ListDetail() {
  const { slug } = useParams();
  const list = lists.find((item) => item.slug === slug);

  if (!list) {
    return <Navigate to="/lists" replace />;
  }

  return (
    <main className="page">
      <p className="eyebrow">List</p>
      <h1>{list.title}</h1>
      <p className="lede">{list.dek}</p>
      <ol className="ranked">
        {list.entries.map((film, index) => (
          <li key={`${film.title}-${film.year}`}>
            <span className="rank">{index + 1}</span>
            <div>
              <h2>
                {film.title} <span>({film.year})</span>
              </h2>
              <p className="director">{film.director}</p>
              <p>{film.note}</p>
            </div>
          </li>
        ))}
      </ol>
      <p>
        <Link to="/lists">← All lists</Link>
      </p>
    </main>
  );
}
