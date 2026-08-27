import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page article">
      <p className="eyebrow">House lights</p>
      <h1>About</h1>
      <p className="lede">
        mySundance is a cinephile’s scrapbook: not a streaming guide, not a
        rankings factory — a place to keep the movies that taught someone how to
        look.
      </p>
      <p>
        The host is the sort of person who will defend a musical and a grim 70s
        cop movie in the same breath, who still believes opening shots are
        contracts, and who thinks the path from The Jazz Singer to Iron Man is
        one story with a lot of intermissions.
      </p>
      <p>
        Wander <Link to="/decades">Cinema over the decades</Link>, steal from the{" "}
        <Link to="/lists">lists</Link>, or argue with the{" "}
        <Link to="/blog">blog</Link>. Then put a film on. That is the whole
        point.
      </p>
    </main>
  );
}
