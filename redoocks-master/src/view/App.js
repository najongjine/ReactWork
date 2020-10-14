import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useState } from "../context";

import BookViewModel from "../viewModel/ViewModel";
import BookModel from "../model/Model";

import BookList from "./book/bookList";
import BookDetail from "./book/bookDetail";

function App() {
  const { toDos, completed } = useState();
  const bookModel = new BookModel();

  //모델과 view를 연결시키기위한 viewModel.
  //viewModel에 모델을 바인딩 시켜줘야한다
  //<BookList viewModel={bookViewModel} />
  const bookViewModel = new BookViewModel(bookModel);
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <BookList viewModel={bookViewModel} />}
            />
            <Route
              path="/detail/:idx"
              component={() => <BookDetail viewModel={bookViewModel} />}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
