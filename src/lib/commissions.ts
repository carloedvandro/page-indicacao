/** Projeção ilustrativa: cinco pessoas por participante em cada nível completo. */
export const commissionLevels = [20, 5, 5, 2, 2, 2, 2, 2].map((commission, index) => {
  const level = index + 1;
  const people = 5 ** level;
  return { level, percentage: commission, commission, people, monthly: people * commission };
});

export const commissionTotals = commissionLevels.reduce(
  (totals, level) => ({ people: totals.people + level.people, monthly: totals.monthly + level.monthly }),
  { people: 0, monthly: 0 },
);

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const formatPeople = (value: number) => value.toLocaleString("pt-BR");