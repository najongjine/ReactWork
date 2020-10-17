import React from "react";
import CrawlListPresenter from "./CrawListPresenter";
import { crawlList } from "../../crawlListApi";

export default class extends React.Component {
  state = {
    publicCList: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { publicCList: publicCList },
      } = await crawlList.publicList();

      this.setState({ publicCList });
    } catch {
      this.setState({
        error: "Can't find TV information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { publicCList, loading, error } = this.state;
    return (
      <CrawlListPresenter
        publicCList={publicCList}
        loading={loading}
        error={error}
      />
    );
  }
}
