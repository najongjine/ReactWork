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
      crawledIdx: null,
      error: null,
      loading: true,
      showVideo: false,
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
  async componentDidUpdate(prevProps) {
    try {
      if (this.props.location.state !== prevProps.location.state) {
        console.log("## props.location.state:", this.props.location.state);
        const { youtubeData } = this.props.location.state;
        const { inputStr } = this.props.location.state;

        const {
          data: { crawledIdx },
        } = await youtubeCrawlApi.crawl(youtubeData, inputStr);
        console.log("## youtubeData:", youtubeData);
        this.setState({ loading: false, crawledIdx: crawledIdx });
      }
      /*
      if (this.state.crawledIdx !== crawledIdx) {
        this.setState({ loading: false, crawledIdx: crawledIdx });
      }
      */
    } catch (error) {
    } finally {
    }
  }

  /**
   * 함수를 내맘대로 만듬
   */
  clickCrawledIdx = async () => {
    console.log("## clicked");
    this.setState((state) => ({
      showVideo: true,
    }));
  };
  changeCrawledIdx = async () => {
    //const nextCrawledIdx = 15;

    const {
      data: { nextCrawledIdx },
    } = await getNextCrawledIdx.getNextCrawlIdx(this.state.crawledIdx);

    console.log("nextCrawledIdx: ", nextCrawledIdx);
    this.setState((state) => ({
      crawledIdx: nextCrawledIdx,
    }));
  };
  render() {
    //model에 있는 데이터를 뷰로 보내주는 패턴
    //변수 전달하기
    const { crawledIdx, error, loading, showVideo } = this.state;
    return (
      <YoutubeCrawlPresenter
        crawledIdx={crawledIdx}
        error={error}
        loading={loading}
        showVideo={showVideo}
        //함수 전달은 this. 를 통해서
        clickCrawledIdx={this.clickCrawledIdx}
        changeCrawledIdx={this.changeCrawledIdx}
      />
    );
  }
}
