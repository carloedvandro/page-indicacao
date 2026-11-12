import { describe, expect, it } from "vitest";
import { commissionLevels, commissionTotals } from "./commissions";

describe("comissões na matriz cinco por cinco", () => {
  it("tem exatamente oito níveis", () => {
    expect(commissionLevels.map((row) => row.level)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("paga R$ 20 e 20% no primeiro nível", () => {
    expect(commissionLevels[0]).toMatchObject({ commission: 20, percentage: 20, monthly: 100 });
  });
  it("paga R$ 5 e 5% no segundo nível", () => {
    expect(commissionLevels[1]).toMatchObject({ commission: 5, percentage: 5, monthly: 125 });
  });
  it("paga R$ 4 e 4% no terceiro e quarto níveis", () => {
    expect(commissionLevels.slice(2, 4).map((row) => [row.commission, row.percentage, row.monthly])).toEqual([[4, 4, 500], [4, 4, 2500]]);
  });
  it("paga R$ 3 e 3% no quinto nível", () => {
    expect(commissionLevels[4]).toMatchObject({ commission: 3, percentage: 3, monthly: 9375 });
  });
  it("paga R$ 2 e 2% no sexto nível", () => {
    expect(commissionLevels[5]).toMatchObject({ commission: 2, percentage: 2, monthly: 31250 });
  });
  it("paga R$ 1 e 1% no sétimo e oitavo níveis", () => {
    expect(commissionLevels.slice(6).map((row) => [row.commission, row.percentage, row.monthly])).toEqual([[1, 1, 78125], [1, 1, 390625]]);
  });
  it("multiplica a quantidade de pessoas por cinco em cada nível", () => {
    expect(commissionLevels.map((row) => row.people)).toEqual([5, 25, 125, 625, 3125, 15625, 78125, 390625]);
    expect(commissionLevels.map((row) => row.monthly)).toEqual([100, 125, 500, 2500, 9375, 31250, 78125, 390625]);
  });
  it("totaliza pessoas e recorrência dos oito níveis, sem incluir adesão", () => {
    expect(commissionTotals).toEqual({ people: 488280, monthly: 512600 });
  });
});
