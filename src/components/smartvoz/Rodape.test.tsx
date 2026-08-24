import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Rodape } from "./Rodape";

/**
 * Guarda-chuva de regressão do rodapé: valida conteúdo, estrutura e as classes
 * responsivas usadas em mobile, tablet (sm:) e desktop (lg:).
 */
describe("Rodape", () => {
  it("exibe logo oficial, CNPJ e copyright", () => {
    render(<Rodape />);

    expect(screen.getByAltText("SmartVoz")).toBeInTheDocument();
    expect(screen.getByText("66.856.703/0001-24")).toBeInTheDocument();
    expect(
      screen.getByText(/Todos os direitos reservados/i),
    ).toBeInTheDocument();
  });

  it("mantém a logo com tamanhos distintos por breakpoint", () => {
    render(<Rodape />);
    const logo = screen.getByAltText("SmartVoz");

    // mobile / tablet / desktop
    expect(logo.className).toContain("h-10");
    expect(logo.className).toContain("sm:h-14");
    expect(logo.className).toContain("lg:h-16");
  });

  it("mantém o espaçamento compacto e centralizado do rodapé", () => {
    const { container } = render(<Rodape />);
    const footer = container.querySelector("footer")!;
    const card = container.querySelector(".surface-card")!;

    // padding lateral/vertical responsivo do footer
    expect(footer.className).toContain("px-3");
    expect(footer.className).toContain("sm:px-6");
    expect(footer.className).toContain("pt-2");
    expect(footer.className).toContain("sm:pt-3");

    // card centralizado com gaps responsivos
    expect(card.className).toContain("flex-col");
    expect(card.className).toContain("items-center");
    expect(card.className).toContain("text-center");
    expect(card.className).toContain("gap-2");
    expect(card.className).toContain("sm:gap-3");

    // largura máxima do conteúdo igual às demais seções
    expect(container.querySelector(".max-w-7xl")).not.toBeNull();
  });

  it("bate com o snapshot de layout", () => {
    const { container } = render(<Rodape />);
    expect(container.querySelector("footer")).toMatchSnapshot();
  });
});
