import { useReveal } from "../hooks/useReveal";

/* Wrap any block of content in <Reveal> to fade/rise it in
   the first time it scrolls into view. */
export default function Reveal({ children, className = "" }) {
  const r = useReveal();
  return (
    <div ref={r.ref} className={`${r.className} ${className}`}>
      {children}
    </div>
  );
}
