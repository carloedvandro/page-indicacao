import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Rodape } from "./Rodape";

describe("Rodape", () => {
  it("exibe logo oficial, CNPJ e copyright", () => {
    render(<Rodape />);

    expect(screen.getByAltText("SmartVoz")).toBeInTheDocument();
    expect(screen.getByText("66.856.703/0001-24")).toBeInTheDocument();
    expect(
      screen.getByText(/Todos os direitos reservados/i),
    ).toBeInTheDocument();
  });

  it("exibe as colunas institucionais e o atendimento", () => {
    render(<Rodape />);

    expect(screen.getByText("INSTITUCIONAL")).toBeInTheDocument();
    expect(screen.getByText("INFORMAÇÕES")).toBeInTheDocument();
    expect(screen.getByText("SUPORTE")).toBeInTheDocument();
    expect(screen.getByText("ATENDIMENTO")).toBeInTheDocument();
    expect(screen.getByText("SIGA NOSSAS REDES")).toBeInTheDocument();
    expect(screen.getByText("Plano de Carreira")).toBeInTheDocument();
    expect(screen.getByText(/Ambiente seguro/i)).toBeInTheDocument();
  });
});
