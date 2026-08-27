import { NavLink, Outlet } from "react-router-dom";
import Oneko from "./Oneko";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/decades", label: "Decades" },
  { to: "/blog", label: "Blog" },
  { to: "/lists", label: "Lists" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  return (
    <div className="shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          mySundance
        </NavLink>
        <nav className="nav" aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <p>A cinephile notebook — talkies to capes, lists to late-night posts.</p>
      </footer>
      <Oneko />
    </div>
  );
}
