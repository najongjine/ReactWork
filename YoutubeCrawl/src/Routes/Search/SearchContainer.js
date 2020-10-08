import React from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";
import { Link, withRouter } from "react-router-dom";
import { youtubeApi } from "nodeYDLAPI";
import styled from "styled-components";

export default class extends React.Component {
  state = {
    youTubeResult: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { youTubeResult },
      } = await youtubeApi.search(searchTerm);

      this.setState({
        youTubeResult,
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleOnClick = async () => {
    try {
      this.setState({
        youTubeResult: null,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: "click error." });
    }
  };

  render() {
    const { youTubeResult, searchTerm, loading = false, error } = this.state;
    return (
      <SearchPresenter
        youTubeResult={youTubeResult}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        handleOnClick={this.handleOnClick}
      />
    );
  }
}
