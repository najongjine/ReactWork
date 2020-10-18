import React from "react";
import LoginPresenter from "./LoginPresenter";
import { useDispatch } from "../../ReduX/context";

//model 에 해당하는 패턴
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      username: null,
      password: null,
      error: null,
      loading: true,
    };
  }

  // 컴포넌트가 탑재되면 이 이벤트 발생
  async componentDidMount() {}

  submitLoginData = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    console.log(username);
    console.log(password);
    if (username && password) {
      const token = await login(username, password);
      console.log("## token:", token);
      dispatch({ type: LOGIN, payload: token });
    }
  };

  updateUsername = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      username: value,
    });
  };
  updatePassword = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      password: value,
    });
  };

  render() {
    //model에 있는 데이터를 뷰로 보내주는 패턴
    const { username, password, error, loading } = this.state;
    return (
      <LoginPresenter
        username={username}
        password={password}
        error={error}
        loading={loading}
        submitLoginData={this.submitLoginData}
        updateUsername={this.updateUsername}
        updatePassword={this.updatePassword}
      />
    );
  }
}
