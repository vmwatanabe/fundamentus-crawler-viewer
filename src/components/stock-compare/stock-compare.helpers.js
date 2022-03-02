import {
  getAlertByLessThanOrEqualZero,
  getAlertByLessThanZero,
  getFeaturedByHigherValue,
  getFeaturedByLowerButPositive,
} from "../../rules";
import {
  formatMoney,
  formatNumber,
  formatPercentage,
} from "../stock-list/stock-list.helpers";

const rows = [
  {
    prop: "magicRanking",
    name: "Magic ranking",
    feature: getFeaturedByLowerButPositive,
  },
  { prop: "setor", name: "Setor" },
  { prop: "industria", name: "Indústria" },
  {
    prop: "pByL",
    name: "P/L",
    formatter: formatNumber,
    alert: getAlertByLessThanZero,
    feature: getFeaturedByLowerButPositive,
  },
  {
    prop: "dividendYield",
    name: "Div.Yield",
    formatter: formatPercentage,
    alert: getAlertByLessThanOrEqualZero,
    feature: getFeaturedByHigherValue,
  },
  {
    prop: "roic",
    name: "ROIC",
    formatter: formatPercentage,
    alert: getAlertByLessThanZero,
    feature: getFeaturedByHigherValue,
  },
  {
    prop: "roe",
    name: "ROE",
    formatter: formatPercentage,
    alert: getAlertByLessThanZero,
    feature: getFeaturedByHigherValue,
  },
  {
    prop: "patrimonioLiquido",
    name: "Patri. Líq",
    formatter: formatMoney,
    alert: getAlertByLessThanZero,
    feature: getFeaturedByHigherValue,
  },
  {
    prop: "dividaBrutaByPatrimonio",
    name: "Dív.Brut/ Patrim.",
    formatter: formatNumber,
    alert: getAlertByLessThanZero,
    feature: getFeaturedByLowerButPositive,
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

        const rowItem = rows.find((elem) => elem.name === row.cells[0].data);

        const alert = rowItem.alert?.(cell);

        if (alert) {
          return {
            "data-alert": alert,
          };
        }

        if (!rowItem.feature) return;

        const isFeatured = rowItem.feature(
          row.cells.slice(1).map((elem) => elem.data),
          cell
        );

        if (!isFeatured) return;

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
