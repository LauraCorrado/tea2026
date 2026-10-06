import { useEffect, useState } from "react";

export function ReadingMask() {
  const [y, setY] = useState(0);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      setY(event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const visibleHeight = 120;
  const half = visibleHeight / 2;

  return (
    <>
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-60
          w-full
          bg-black/55
        "
        style={{
          height: `${Math.max(0, y - half)}px`,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          bottom-0
          left-0
          z-60
          w-full
          bg-black/55
        "
        style={{
          height: `${Math.max(0, window.innerHeight - (y + half))}px`,
        }}
      />
    </>
  );
}