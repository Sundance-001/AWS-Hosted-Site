import { useEffect } from "react";

const SPRITE_URL = "/oneko.gif";
const SPRITE_SIZE = 32;
const NEKO_SPEED = 10;

const spriteSets: Record<string, [number, number][]> = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratch: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

export default function Oneko() {
  useEffect(() => {
    const nekoEl = document.createElement("div");
    let nekoPosX = window.innerWidth / 3;
    let nekoPosY = 50;
    let mousePosX = window.innerWidth / 2;
    let mousePosY = 100;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;

    nekoEl.id = "oneko";
    nekoEl.setAttribute("aria-hidden", "true");
    Object.assign(nekoEl.style, {
      width: `${SPRITE_SIZE}px`,
      height: `${SPRITE_SIZE}px`,
      position: "fixed",
      backgroundImage: `url('${SPRITE_URL}')`,
      imageRendering: "pixelated",
      left: `${nekoPosX - 16}px`,
      top: `${nekoPosY - 16}px`,
      zIndex: "2147483647",
      pointerEvents: "none",
    });
    document.body.appendChild(nekoEl);

    const onMouseMove = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    const setSprite = (name: string, frame: number) => {
      const frames = spriteSets[name];
      if (!frames) return;
      const sprite = frames[frame % frames.length];
      nekoEl.style.backgroundPosition = `${sprite[0] * SPRITE_SIZE}px ${sprite[1] * SPRITE_SIZE}px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
        idleAnimation = ["sleeping", "scratch"][Math.floor(Math.random() * 2)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }
          break;
        case "scratch":
          setSprite("scratch", idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    };

    const frame = () => {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < NEKO_SPEED || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction || "idle", frameCount);

      nekoPosX -= (diffX / distance) * NEKO_SPEED;
      nekoPosY -= (diffY / distance) * NEKO_SPEED;

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    };

    setSprite("idle", 0);
    const interval = window.setInterval(frame, 100);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("mousemove", onMouseMove);
      nekoEl.remove();
    };
  }, []);

  return null;
}
