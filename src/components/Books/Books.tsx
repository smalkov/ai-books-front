import React, { memo, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";

import "./Books.css";
import { BooksStore } from "./state.ts";
import { Button } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID flibusta",
    flex: 0.5,
  },
  {
    field: "title",
    headerName: "Название",
    flex: 5,
  },
];

const BooksProto = observer(({ store }: any) => {
  const [findName, setFindName] = useState("");
  console.log("store", store);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <div className="booksInput">
        <input value={findName} onChange={(e) => setFindName(e.target.value)} />
        <Button
          onClick={async () => {
            await store.findBooks(findName);

            setFindName("");
          }}
        >
          find
        </Button>
      </div>
      <DataGrid
        pagination
        rows={store.books}
        columns={columns}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 50 } } }}
        pageSizeOptions={[50, 100]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowId={(data) => data?.id}
      />
      table
    </Paper>
  );
});

const store = new BooksStore();
export const Books = memo(() => <BooksProto store={store} />);
