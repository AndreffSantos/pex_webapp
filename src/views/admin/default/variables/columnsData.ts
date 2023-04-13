import { Column } from "react-table";

export const columnsData = [
  {
    Header: "CLUBE",
    accessor: "clube",
  },
  {
    Header: "CLIENTES",
    accessor: "clientes",
  },
  {
    Header: "PREÇO",
    accessor: "preco",
  },
];

export const columnsDataMedio = [
  {
    Header: "CLUBE",
    accessor: "clube",
  },
  {
    Header: "CLIENTES",
    accessor: "clientes",
  },
  {
    Header: "PREÇO MÉDIO",
    accessor: "preco_medio",
  },
];

export type ColumnData = Column[];

export type TableData = Column<{
  name: (string | boolean)[];
  date: string;
  progress: number;
  quantity?: number;
  status?: string;
  artworks?: string;
  rating?: number;
}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
  title: string;
  subTitle: string;
};
