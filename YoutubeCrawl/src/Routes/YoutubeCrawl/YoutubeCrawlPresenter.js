import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

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

const YoutubeCrawlPresenter = ({
  crawledIdx = null,
  loading = false,
  error = null,
  showVideo = false,
  clickCrawledIdx,
  changeCrawledIdx,
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
      <ItemContainer>
        {showVideo ? (
          <ReactPlayer
            url={`http://indj-firewall.duckdns.org/stream?crawledIdx=${crawledIdx}`}
            controls
            playing={true}
            onEnded={changeCrawledIdx}
          />
        ) : null}
      </ItemContainer>
      <ItemContainer onClick={clickCrawledIdx}>
        crawled idx: {crawledIdx}
      </ItemContainer>
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
