import React, { memo, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";
import { Skeleton } from "@mui/material";

import "./Books.css";
import { BooksStore } from "./state.ts";
import { Button } from "@mui/material";

const Image = ({ value }) => {
  const [load, setLoad] = useState(false);

  return (
    <>
      <img
        src={value}
        alt="cover"
        onLoad={() => setLoad(true)}
        style={{ width: 40, height: 60, objectFit: "cover", display: load ? "block" : "none" }}
      />
    </>
  );
};

const columns: GridColDef[] = [
  // {
  //   field: "id",
  //   headerName: "ID flibusta",
  //   flex: 0.5,
  // },
  {
    field: "cover",
    headerName: "Обложка",
    flex: 0.4,
    renderCell: ({ value }) => <Image value={value} />,
  },
  {
    field: "title",
    headerName: "Название",
    flex: 2,
  },
  {
    field: "authors",
    headerName: "Авторы",
    flex: 2,
  },
  {
    field: "genres",
    headerName: "Жанры",
    flex: 2,
  },
  {
    field: "content",
    headerName: "Описание",
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
    </Paper>
  );
});

const store = new BooksStore();
export const Books = memo(() => <BooksProto store={store} />);
