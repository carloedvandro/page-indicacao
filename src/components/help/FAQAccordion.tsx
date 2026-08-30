import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpSearch } from "./HelpSearch";
import { faqCategorias } from "@/lib/faq-data";

/**
 * FAQ em accordion com filtro de busca.
 *
 * Reusa o componente Accordion (Radix) do design system. Cada categoria é um
 * item de accordion; as perguntas dentro de cada categoria também são
 * accordions aninhados.
 */
export function FAQAccordion() {
  const [busca, setBusca] = useState("");

  const categoriasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return faqCategorias;
    return faqCategorias
      .map((c) => ({
        ...c,
        itens: c.itens.filter(
          (i) =>
            i.pergunta.toLowerCase().includes(termo) ||
            i.resposta.toLowerCase().includes(termo) ||
            c.titulo.toLowerCase().includes(termo),
        ),
      }))
      .filter((c) => c.itens.length > 0);
  }, [busca]);

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10">
      <HelpSearch value={busca} onChange={setBusca} placeholder="Pesquisar uma dúvida..." />

      {categoriasFiltradas.length === 0 ? (
        <p className="mt-10 text-center text-base text-muted-foreground">
          Nenhum resultado encontrado para "{busca}".
        </p>
      ) : (
        <div className="mt-8 space-y-8">
          {categoriasFiltradas.map((categoria) => (
            <section key={categoria.id}>
              <h2 className="flex items-center gap-3 font-display text-sm font-bold tracking-wide text-ink sm:text-base">
                <categoria.icone className="size-5 text-primary" aria-hidden="true" />
                {categoria.titulo.toUpperCase()}
              </h2>
              <span className="mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />

              <Accordion type="single" collapsible className="mt-4 space-y-3">
                {categoria.itens.map((item, i) => (
                  <AccordionItem
                    key={item.pergunta}
                    value={`${categoria.id}-${i}`}
                    className="surface-card border-b-0 px-5 sm:px-6"
                  >
                    <AccordionTrigger className="font-display text-base font-bold text-ink hover:no-underline">
                      {item.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {item.resposta}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
