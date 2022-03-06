import { RowSelection } from "gridjs/plugins/selection";

export const formatPercentage = (value) => {
  return `${value}%`.replace(".", ",");
};

export const formatNumber = (value) => {
  return value.toLocaleString("pt-br");
};

export const formatMoney = (value) => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

export const getColumns = () => {
  return [
    {
      id: "selection",
      name: "Select",
      plugin: {
        component: RowSelection,
        props: {
          id: (row) => {
            return row.cell(1).data;
          },
        },
      },
    },
    {
      id: "papel",
      name: "Papel",
    },
    {
      id: "nomeEmpresaLongo",
      name: "Nome Empresa",
    },
    {
      id: "setor",
      name: "Setor",
    },
    {
      id: "industria",
      name: "Indústria",
    },
    {
      id: "magicRanking",
      name: "Magic Ranking",
    },
    {
      id: "evByEbitRanking",
      name: "EV/EBIT Ranking",
    },
    {
      id: "roicRanking",
      name: "ROIC Ranking",
    },
    {
      id: "cotacao",
      name: "Cotação",
      formatter: (value) => formatMoney(value),
    },
    {
      id: "pByL",
      name: "P/L",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "pByVp",
      name: "P/VP",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "psr",
      name: "PSR",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "dividendYield",
      name: "Div.Yield",
      formatter: (value) => formatPercentage(value),
    },
    {
      id: "pByAtivo",
      name: "P/Ativo",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "pByCapitalGiro",
      name: "P/Cap.Giro",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "pByEbit",
      name: "P/EBIT",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "pByAtivoCircLiq",
      name: "P/Ativ Circ.Liq",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "evByEbit",
      name: "EV/EBIT",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "evByEbitda",
      name: "EV/EBITDA",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "margemEbit",
      name: "Mrg Ebit",
      formatter: (value) => formatPercentage(value),
    },
    {
      id: "margemLiq",
      name: "Mrg. Líq.",
      formatter: (value) => formatPercentage(value),
    },
    {
      id: "liqCorr",
      name: "Liq. Corr.",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "roic",
      name: "ROIC",
      formatter: (value) => formatPercentage(value),
    },
    {
      id: "roe",
      name: "ROE",
      formatter: (value) => formatPercentage(value),
    },
    {
      id: "liqDoisMeses",
      name: "Liq.2meses",
      formatter: (value) => formatMoney(value),
    },
    {
      id: "patrimonioLiquido",
      name: "Patrim. Líq",
      formatter: (value) => formatMoney(value),
    },
    {
      id: "dividaBrutaByPatrimonio",
      name: "Dív.Brut/ Patrim.",
      formatter: (value) => formatNumber(value),
    },
    {
      id: "crescRec",
      name: "Cresc. Rec.5a",
      formatter: (value) => formatPercentage(value),
    },
    {
      id: "smallcap",
      name: "Smallcap",
      formatter: (value) => (value ? "Sim" : "Não"),
    },
  ];
};
