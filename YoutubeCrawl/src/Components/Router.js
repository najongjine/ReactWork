import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import CrawlList from "Routes/CrawList";
import Header from "Components/Header";
import YoutubeSearch from "Routes/Search/SearchContainer";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Login from "Routes/Login";
import YoutubeCrawl from "Routes/YoutubeCrawl";
import Watch from "Routes/Watch";

export default () => (
  <Router>
    <>
      <Header />
      <YoutubeSearch />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/crawl_list" component={CrawlList} />
        <Route path="/search" component={Search} />
        <Route path="/ytcrawl" component={YoutubeCrawl} />
        <Route path="/watch" component={Watch} />
        <Route path="/show/:id" component={Detail} />
        <Route path="/login" exact component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
