import React from "react";
//import MakePrivatePresenter from "../../Components/MakePrivate/makePrivatePresenter";
import MakePrivateContainer from "../../Components/MakePrivate/makePrivateContainer";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const DetailPresenter = ({
  crawledIdx = null,
  loading = false,
  error = null,
  inputtedCrawledIdx = null,
  getNextCrawledIdx,
  changeCrawledIdx,
  updateInputCrawledIdx,
}) => (
  <Container>
    <div>
      <ReactPlayer
        url={`http://indj-firewall.duckdns.org/stream?crawledIdx=${crawledIdx}`}
        controls
        playing={true}
        onEnded={getNextCrawledIdx}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
    <div>
      <MakePrivateContainer crawledIdx={crawledIdx} />
    </div>
    <div>crawled idx: {crawledIdx}</div>
    <form onSubmit={changeCrawledIdx}>
      <input
        placeholder="Enter something to change crawledIdx"
        value={inputtedCrawledIdx}
        onChange={updateInputCrawledIdx}
      />
    </form>
  </Container>
);

export default DetailPresenter;
