const rows = [
  { factor: "lower", prop: "magicRanking", name: "Magic ranking" },
  { factor: "none", prop: "setor", name: "Setor" },
  { factor: "none", prop: "industria", name: "Indústria" },
  { factor: "lower", prop: "pByL", name: "P/L" },
  { factor: "higher", prop: "dividendYield", name: "Div.Yield" },
  { factor: "higher", prop: "roic", name: "ROIC" },
  { factor: "higher", prop: "roe", name: "ROE" },
  { factor: "higher", prop: "patrimonioLiquido", name: "Patri. Líq" },
  {
    factor: "lower",
    prop: "dividaBrutaByPatrimonio",
    name: "Dív.Brut/ Patrim.",
  },
];

export const getColumns = (stocks) => {
  return [
    {
      id: "name",
      name: "",
    },
    ...stocks.map((stock) => ({ id: stock.papel, name: stock.papel })),
  ];
};

export const getData = (stocks) => {
  const stockInfoRows = rows.map((row) => {
    const stocksInfo = stocks.reduce((acc, current) => {
      acc[current.papel] = current[row.prop];

      return acc;
    }, {});

    return {
      ...row,
      ...stocksInfo,
    };
  });

  return stockInfoRows;
};
