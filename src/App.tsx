import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Vite + React + TypeScript</p>
        <h1>mySundance</h1>
        <p className="lede">
          A small starter you can grow into a real product. Edit{" "}
          <code>src/App.tsx</code> and save to see changes instantly.
        </p>
      </header>

      <section className="card">
        <h2>Try it</h2>
        <p>This counter is a live React component wired up and ready.</p>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Count is {count}
        </button>
      </section>
    </main>
  );
}
