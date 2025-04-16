import { makeObservable, observable, action } from "mobx";
import { getBooks } from "../../api/index.ts";

export class BooksStore {
  books = [];
  total = 0;

  constructor() {
    makeObservable(this, {
      books: observable,
      total: observable,
      getBooks: action,
    });

    this.getBooks();
  }

  async getBooks() {
    try {
      const data = await getBooks();
      console.log("getBooks data", data);

      if (data) {
        this.books = data?.data;
        this.total = data?.total;
      }
    } catch {
      console.log("FAILED getBooks in store");
    }
  }
}
