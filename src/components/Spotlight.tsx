import { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: '50vw', y: '50vh' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="spotlight-overlay"
      style={{
        '--mouse-x': position.x,
        '--mouse-y': position.y
      } as React.CSSProperties}
    />
  );
}