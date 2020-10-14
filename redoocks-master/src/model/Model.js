class BookModel {
  constructor() {
    this.books = [
      {
        name: "tst1",
        author: "ts1",
      },
      {
        name: "tst2",
        author: "ts2",
      },
      {
        name: "tst3",
        author: "ts3",
      },
    ];
  }

  add(book) {
    this.books.push(book);
    return this.books;
  }
  remove(idx) {
    let temp = this.books[idx];
    this.books[idx] = this.books[this.books.length - 1];
    this.books[this.books.length - 1] = temp;
    return this.books.pop();
  }
  update(idx, book) {
    this.books[idx] = book;
    return book;
  }
  get(idx) {
    return this.books[idx];
  }
  getAll() {
    return this.books;
  }
}
export default BookModel;
