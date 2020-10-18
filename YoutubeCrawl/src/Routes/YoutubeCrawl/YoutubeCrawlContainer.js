import React from "react";
import YoutubeCrawlPresenter from "./YoutubeCrawlPresenter";
import { youtubeCrawlApi, getNextCrawledIdx } from "nodeYDLAPI";

//model 에 해당하는 패턴
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      youtubeData: null,
      crawledIdx: null,
      error: null,
      loading: true,
      showVideo: false,
      inputtedCrawledIdx: "",
    };
  }

  /*
  state = {
    crawledIdx: null,
    error: null,
    loading: true,
  };
  */
  // 컴포넌트가 탑재되면 이 이벤트 발생
  async componentDidMount() {
    try {
      const { youtubeData } = this.props.location.state;
      const { inputStr } = this.props.location.state;

      const {
        data: { crawledIdx },
      } = await youtubeCrawlApi.crawl(youtubeData, inputStr);

      this.setState({
        loading: false,
        crawledIdx: crawledIdx,
        youtubeData: youtubeData,
      });
    } catch (error) {
      this.props.history.push("/");
    }
  }
  async componentDidUpdate(prevProps) {
    try {
    } catch (error) {
      this.props.history.push("/");
    } finally {
    }
  }

  /**
   * 함수를 내맘대로 만듬
   */
  clickCrawledIdx = async () => {
    this.setState((state) => ({
      showVideo: true,
    }));
  };
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
    //변수 전달하기
    const {
      crawledIdx,
      youtubeData,
      error,
      loading,
      showVideo,
      inputtedCrawledIdx,
    } = this.state;
    return (
      <YoutubeCrawlPresenter
        crawledIdx={crawledIdx}
        error={error}
        loading={loading}
        showVideo={showVideo}
        inputtedCrawledIdx={inputtedCrawledIdx}
        //함수 전달은 this. 를 통해서
        getNextCrawledIdx={this.getNextCrawledIdx}
        clickCrawledIdx={this.clickCrawledIdx}
        changeCrawledIdx={this.changeCrawledIdx}
        updateInputCrawledIdx={this.updateInputCrawledIdx}
      />
    );
  }
}
