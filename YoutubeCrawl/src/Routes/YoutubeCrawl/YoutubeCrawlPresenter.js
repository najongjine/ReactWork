import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const YoutubeCrawlPresenter = ({
  crawledIdx = null,
  youtubeData = null,
  loading = false,
  error = null,
  showVideo = false,
  inputtedCrawledIdx = null,
  getNextCrawledIdx,
  clickCrawledIdx,
  changeCrawledIdx,
  updateInputCrawledIdx,
}) =>
  loading ? (
    <>
      <Loader />
    </>
  ) : (
    //전달받은 함수를 onClick 이벤트 리스너에 전달해주면 됨
    //jQuery에서 div 숨기기 기능 구현은 스위치 변수 하나를 전달 받고, 그 변수 값에 따라서 div 를 랜더링 할지,
    //null을 랜더링 할지를 결정하면 됨
    <Container>
      <Link
        to={{
          //watch라우터 만들고 라우팅 시키자
          pathname: `/watch/${crawledIdx}`,
          state: {
            crawledIdx: crawledIdx,
          },
        }}
      >
        <ItemContainer>crawled idx: {crawledIdx}</ItemContainer>
      </Link>
      <Form onSubmit={changeCrawledIdx}>
        <Input
          placeholder="Enter something to change crawledIdx"
          value={inputtedCrawledIdx}
          onChange={updateInputCrawledIdx}
        />
      </Form>
    </Container>
  );
/*
DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
*/
export default YoutubeCrawlPresenter;
