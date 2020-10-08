import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

//model 에 해당하는 패턴
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  // 컴포넌트가 탑재되면 이 이벤트 발생
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      // model에 데이터 채우는 기능
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    //model에 있는 데이터를 뷰로 보내주는 패턴
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
