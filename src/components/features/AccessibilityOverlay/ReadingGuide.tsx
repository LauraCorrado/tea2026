import { useEffect, useState } from "react";

export function ReadingGuide() {
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

  return (
    <div
      aria-hidden="true"
      className="
    pointer-events-none
    fixed
    left-0
    z-60
    h-12
    w-full
    border-y-4
    border-tea-blue
    bg-tea-blue/5
  "
      style={{
        top: `${y - 20}px`,
      }}
    />
  );
}