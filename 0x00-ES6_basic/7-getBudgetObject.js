export default function getBudgetObject(income_val, gdp_val, capita_val) {
  const budget = {
    income: income_val,
    gdp: gdp_val,
    capita: capita_val,
  };

  return budget;
}
