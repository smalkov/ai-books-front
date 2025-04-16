import React, { memo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";

import "./Books.css";
import { BooksStore } from "./state.ts";

const columns: GridColDef[] = [
  {
    field: "key4",
    headerName: "Название",
    flex: 1,
  },
  {
    field: "key17",
    headerName: "Описание",
    flex: 2,
  },
  {
    field: "key3",
    headerName: "Дата",
    flex: 1,
  },
];

const BooksProto = observer(({ store }: any) => {
  console.log("store", store);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        pagination
        rows={store.books}
        columns={columns}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 50 } } }}
        pageSizeOptions={[50, 100]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowId={(data) => data?.key2}
      />
    </Paper>
  );
});

const store = new BooksStore();
export const Books = memo(() => <BooksProto store={store} />);
