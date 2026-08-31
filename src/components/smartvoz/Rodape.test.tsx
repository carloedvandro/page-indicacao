import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mocka o Link do TanStack Router para não precisar de contexto de router
// nos testes. Renderiza como <a> simples.
vi.mock("@tanstack/react-router", () => ({
  Link: ({
    children,
    to,
    ...props
  }: { children: React.ReactNode; to?: string } & Record<string, unknown>) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

import { Rodape } from "./Rodape";

describe("Rodape", () => {
  it("exibe CNPJ e copyright", () => {
    render(<Rodape />);

    expect(screen.getByText(/66\.856\.703\/0001-24/)).toBeInTheDocument();
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument();
  });

  it("exibe as três colunas do rodapé", () => {
    render(<Rodape />);

    expect(screen.getByText("AJUDA E SUPORTE")).toBeInTheDocument();
    expect(screen.getByText("ATENDIMENTO")).toBeInTheDocument();
    expect(screen.getByText("SIGA NOSSAS REDES")).toBeInTheDocument();
  });

  it("exibe os links de ajuda e suporte", () => {
    render(<Rodape />);

    expect(screen.getByText("Central de Ajuda")).toBeInTheDocument();
    expect(screen.getByText("Tutoriais e Guias")).toBeInTheDocument();
    expect(screen.getByText("Acompanhamento")).toBeInTheDocument();
    expect(screen.getByText("FAQ - Perguntas Frequentes")).toBeInTheDocument();
  });

  it("exibe os selos de segurança", () => {
    render(<Rodape />);

    expect(screen.getByText(/Ambiente seguro/i)).toBeInTheDocument();
    expect(screen.getByText(/Seus dados protegidos/i)).toBeInTheDocument();
  });

  it("não exibe mais 'Plano de Carreira' nem 'Status do Sistema'", () => {
    render(<Rodape />);

    expect(screen.queryByText("Plano de Carreira")).not.toBeInTheDocument();
    expect(screen.queryByText("Status do Sistema")).not.toBeInTheDocument();
  });

  it("exibe o e-mail de atendimento atualizado", () => {
    render(<Rodape />);

    expect(screen.getByText("atendimento@smartvoz.com.br")).toBeInTheDocument();
  });
});
