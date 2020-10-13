import React from "react";
import { useState } from "../context";
import BookViewModel from "../viewModel/ViewModel";
import BookModel from "../model/Model";

function BookView(props) {
  let books = props.viewModel.getAll();
  return (
    <>
      <div className="form">
        <input type="text" place="search" />
        <button className="search">Search</button>
        <button className="create">Create</button>
      </div>
      <div className="list">
        <ul>
          {books.map((book, idx) => {
            <li key={idx}>
              {book.author}-{book.name}
            </li>;
          })}
        </ul>
      </div>
    </>
  );
}

function App() {
  const { toDos, completed } = useState();
  const bookModel = new BookModel();
  const bookViewModel = new BookViewModel();
  return (
    <>
      <BookView viewModel={bookViewModel} />
    </>
  );
}

export default App;
