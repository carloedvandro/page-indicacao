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
  it("exibe logo oficial, CNPJ e copyright", () => {
    render(<Rodape />);

    expect(screen.getByAltText("SmartVoz")).toBeInTheDocument();
    expect(screen.getByText("66.856.703/0001-24")).toBeInTheDocument();
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument();
  });

  it("exibe as colunas institucionais e o atendimento (desktop)", () => {
    render(<Rodape />);

    expect(screen.getAllByText("INSTITUCIONAL").length).toBeGreaterThan(0);
    expect(screen.getAllByText("INFORMAÇÕES").length).toBeGreaterThan(0);
    expect(screen.getAllByText("SUPORTE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("ATENDIMENTO").length).toBeGreaterThan(0);
    expect(screen.getAllByText("SIGA NOSSAS REDES").length).toBeGreaterThan(0);
    expect(screen.getByText(/Ambiente seguro/i)).toBeInTheDocument();
  });

  it("não exibe mais 'Plano de Carreira' nem 'Status do Sistema'", () => {
    render(<Rodape />);

    expect(screen.queryByText("Plano de Carreira")).not.toBeInTheDocument();
    expect(screen.queryByText("Status do Sistema")).not.toBeInTheDocument();
  });

  it("exibe o e-mail de atendimento atualizado", () => {
    render(<Rodape />);

    expect(screen.getAllByText("atendimento@smartvoz.com.br").length).toBeGreaterThan(0);
  });
});
