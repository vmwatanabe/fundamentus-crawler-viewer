import {
  formatMoney,
  formatNumber,
  formatPercentage,
} from "../stock-list/stock-list.helpers";

const rows = [
  { factor: "lower", prop: "magicRanking", name: "Magic ranking" },
  { prop: "setor", name: "Setor" },
  { prop: "industria", name: "Indústria" },
  { factor: "lower", prop: "pByL", name: "P/L", formatter: formatNumber },
  {
    factor: "higher",
    prop: "dividendYield",
    name: "Div.Yield",
    formatter: formatPercentage,
  },
  { factor: "higher", prop: "roic", name: "ROIC", formatter: formatPercentage },
  { factor: "higher", prop: "roe", name: "ROE", formatter: formatPercentage },
  {
    factor: "higher",
    prop: "patrimonioLiquido",
    name: "Patri. Líq",
    formatter: formatMoney,
  },
  {
    factor: "lower",
    prop: "dividaBrutaByPatrimonio",
    name: "Dív.Brut/ Patrim.",
    formatter: formatNumber,
  },
];

export const getColumns = (stocks) => {
  return [
    {
      id: "name",
      name: "",
    },
    ...stocks.map((stock) => ({
      id: stock.papel,
      name: stock.papel,
      formatter: (value, row) => {
        const rowFormatter = rows.find(
          (elem) => elem.name === row.cells[0].data
        ).formatter;

        return rowFormatter?.(value) ?? value;
      },
      attributes: (cell, row) => {
        if (!(cell !== null && row !== null)) return;

        const rowFactor = rows.find(
          (elem) => elem.name === row.cells[0].data
        ).factor;

        if (!rowFactor) return;

        const method = rowFactor === "lower" ? Math.min : Math.max;

        const betterValue = method(
          ...row.cells.slice(1).map((elem) => elem.data)
        );

        if (betterValue !== cell) return;

        return {
          "data-featured": "true",
        };
      },
    })),
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
