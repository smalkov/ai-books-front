import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import "./Books.css";

const mock = [
  {
    id: "01",
    title: "Deepstate",
    description: "Описание",
    author: "Alan Wake",
  },
  {
    id: "02",
    title: "Uins",
    description: "Описание2",
    author: "Ron Gake",
  },
  {
    id: "03",
    title: "Pors",
    description: "Описание3",
    author: "Dan Fake",
  },
];

export const Books = () => {
  const data = mock;

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Название",
      width: 140,
    },
    {
      field: "description",
      headerName: "Описание",
      width: 140,
    },
    {
      field: "author",
      headerName: "Автор",
      width: 140,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};
