import { makeObservable, observable, action } from "mobx";
import { getBooks } from "../../api/index.ts";

export class BooksStore {
  books = [];
  total = 0;

  constructor() {
    makeObservable(this, {
      books: observable,
      total: observable,
      getDefaultBooks: action,
      findBooks: action,
    });

    this.getDefaultBooks();
  }

  async getDefaultBooks() {
    try {
      const data = await getBooks("Маяковский");
      console.log("getBooks data", data);

      if (data) {
        this.books = data;
      }
    } catch {
      console.log("FAILED getBooks in store");
    }
  }

  async findBooks(name: string) {
    try {
      const data = await getBooks(name);

      if (data) {
        this.books = data;
      }
    } catch (e) {
      console.log("FAILED findBooks in store");
    }
  }
}
