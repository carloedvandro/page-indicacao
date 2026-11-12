import { describe, expect, it } from "vitest";
import { commissionLevels, commissionTotals } from "./commissions";

describe("comissões na matriz cinco por cinco", () => {
  it("tem exatamente oito níveis", () => {
    expect(commissionLevels.map((row) => row.level)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("paga R$ 20 e 20% no primeiro nível", () => {
    expect(commissionLevels[0]).toMatchObject({ commission: 20, percentage: 20, monthly: 100 });
  });
  it("paga R$ 5 e 5% no segundo e terceiro níveis", () => {
    expect(commissionLevels.slice(1, 3).map((row) => [row.commission, row.percentage, row.monthly])).toEqual([[5, 5, 125], [5, 5, 625]]);
  });
  it.each([4, 5, 6, 7, 8])("paga R$ 2 e 2%% no nível %i", (level) => {
    expect(commissionLevels[level - 1]).toMatchObject({ commission: 2, percentage: 2 });
  });
  it("multiplica a quantidade de pessoas por cinco em cada nível", () => {
    expect(commissionLevels.map((row) => row.people)).toEqual([5, 25, 125, 625, 3125, 15625, 78125, 390625]);
    expect(commissionLevels.map((row) => row.monthly)).toEqual([100, 125, 625, 1250, 6250, 31250, 156250, 781250]);
  });
  it("totaliza pessoas e recorrência dos oito níveis, sem incluir adesão", () => {
    expect(commissionTotals).toEqual({ people: 488280, monthly: 977100 });
  });
});