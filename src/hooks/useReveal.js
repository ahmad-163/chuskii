import { useEffect, useRef, useState } from "react";

/* Scroll reveal hook: calm, one-time entrance.
   Attach { ref, className } to any element you want to fade/rise in
   the first time it scrolls into view. */
export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.16 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, className: shown ? "reveal in-view" : "reveal" };
}
