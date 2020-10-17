import React from "react";
import WatchPresenter from "./WatchPresenter";
import { youtubeCrawlApi, getNextCrawledIdx } from "./WatchAPI";

//model 에 해당하는 패턴
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      crawledIdx: null,
      error: null,
      loading: true,
      inputtedCrawledIdx: "",
    };
  }

  // 컴포넌트가 탑재되면 이 이벤트 발생
  async componentDidMount() {
    try {
      console.log("## props.location.state:", this.props.location.state);
      const { crawledIdx } = this.props.location.state;

      this.setState({ loading: false, crawledIdx: crawledIdx });
    } catch (error) {
      this.props.history.push("/");
    }
  }

  getNextCrawledIdx = async () => {
    //const nextCrawledIdx = 15;

    const {
      data: { nextCrawledIdx },
    } = await getNextCrawledIdx.getNextCrawlIdx(this.state.crawledIdx);

    console.log("nextCrawledIdx: ", nextCrawledIdx);
    this.setState((state) => ({
      crawledIdx: nextCrawledIdx,
    }));
  };
  changeCrawledIdx = (event) => {
    if (event) {
      event.preventDefault();
    }

    const { inputtedCrawledIdx } = this.state;
    if (inputtedCrawledIdx !== "" && inputtedCrawledIdx > 0) {
      this.setState({
        crawledIdx: inputtedCrawledIdx,
      });
    }
  };

  updateInputCrawledIdx = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      inputtedCrawledIdx: value,
    });
  };

  render() {
    //model에 있는 데이터를 뷰로 보내주는 패턴
    const { crawledIdx, error, loading, inputtedCrawledIdx } = this.state;
    return (
      <WatchPresenter
        crawledIdx={crawledIdx}
        error={error}
        loading={loading}
        inputtedCrawledIdx={inputtedCrawledIdx}
        //함수 전달은 this. 를 통해서
        getNextCrawledIdx={this.getNextCrawledIdx}
        changeCrawledIdx={this.changeCrawledIdx}
        updateInputCrawledIdx={this.updateInputCrawledIdx}
      />
    );
  }
}
