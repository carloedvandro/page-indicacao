import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { HelpSearch } from "@/components/help/HelpSearch";
import { HelpCategoryCard } from "@/components/help/HelpCategoryCard";
import { categoriasAjuda } from "@/lib/help-categories";

export const Route = createFileRoute("/central-de-ajuda")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Central de Ajuda" },
      {
        name: "description",
        content:
          "Central de Ajuda SmartVoz: encontre artigos sobre conta, cadastro, contratação, pagamentos, indicações, rede, comissões e mais.",
      },
    ],
  }),
  component: CentralDeAjuda,
});

function CentralDeAjuda() {
  const [busca, setBusca] = useState("");

  return (
    <SiteChrome>
      <PageHeader eyebrow="SUPORTE" titulo="Como podemos ajudar?">
        <HelpSearch
          value={busca}
          onChange={setBusca}
          placeholder="Pesquise sua dúvida..."
          grande
          ariaLabel="Pesquisar artigo de ajuda"
        />
      </PageHeader>

      <section className="mx-auto max-w-4xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {categoriasAjuda.map((categoria) => (
            <HelpCategoryCard key={categoria.id} categoria={categoria} busca={busca} />
          ))}
        </div>

        {busca.trim() &&
        categoriasAjuda.every((c) =>
          c.artigos.every(
            (a) =>
              !a.titulo.toLowerCase().includes(busca.toLowerCase()) &&
              !a.resumo.toLowerCase().includes(busca.toLowerCase()) &&
              !c.titulo.toLowerCase().includes(busca.toLowerCase()),
          ),
        ) ? (
          <p className="mt-10 text-center text-base text-muted-foreground">
            Nenhum artigo encontrado para "{busca}".
          </p>
        ) : null}

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border bg-primary-soft/50 px-6 py-8 text-center">
          <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
            Não encontrou o que procurava?
          </h2>
          <Link
            to="/atendimento"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            FALAR COM O ATENDIMENTO
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
