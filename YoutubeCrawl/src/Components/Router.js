import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import YoutubeSearch from "Routes/Search/SearchContainer";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import YoutubeCrawl from "Routes/YoutubeCrawl";

export default () => (
  <Router>
    <>
      <Header />
      <YoutubeSearch />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/ytcrawl" component={YoutubeCrawl} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
