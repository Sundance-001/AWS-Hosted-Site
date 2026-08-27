import { useEffect, useState } from "react";

export default function StartupAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The CSS animation takes roughly 3.3s total. We unmount it shortly after.
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="startup-container">
      <img 
        src="/giphy.webp" 
        alt="Action!" 
        className="clapper-image" 
      />
      <div className="startup-flash"></div>
    </div>
  );
}