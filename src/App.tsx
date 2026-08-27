import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Decades from "./pages/Decades";
import Home from "./pages/Home";
import ListDetail from "./pages/ListDetail";
import Lists from "./pages/Lists";
import Spotlight from "./components/Spotlight";
import StartupAnimation from "./components/StartupAnimation";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <>
      {/* The Clapperboard intro runs first */}
      {!hasStarted && (
        <StartupAnimation onComplete={() => setHasStarted(true)} />
      )}

      {/* The global spotlight follows the cursor */}
      <Spotlight />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/decades" element={<Decades />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/lists/:slug" element={<ListDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}