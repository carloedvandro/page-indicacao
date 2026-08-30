import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Botão flutuante "Voltar ao topo".
 *
 * Aparece após rolar a página e leva suavemente ao topo. Acessível por teclado.
 */
export function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visivel) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:bottom-6 sm:right-6 sm:size-12"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
