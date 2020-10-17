import React from "react";
import MakePrivatePresenter from "./makePrivatePresenter";
import { makePrivate } from "./makePrivateAPI";

//model 에 해당하는 패턴
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      crawledIdx: this.props.crawledIdx ? this.props.crawledIdx : null,
      error: null,
      loading: true,
    };
  }

  // 컴포넌트가 탑재되면 이 이벤트 발생
  async componentDidMount() {}

  makeVideoPrivate = async (event) => {
    event.preventDefault();
    const { crawledIdx } = this.state;
    if (!crawledIdx) {
      return <div>no crawled idx</div>;
    }
    let result = await makePrivate(crawledIdx);
    result = result.data;
    return <div>{result.msg}</div>;
  };

  render() {
    //model에 있는 데이터를 뷰로 보내주는 패턴
    const { crawledIdx, error, loading } = this.state;
    return (
      <MakePrivatePresenter
        username={username}
        password={password}
        error={error}
        loading={loading}
        makeVideoPrivate={this.makeVideoPrivate}
      />
    );
  }
}
