import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;
const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const CrawlListPresenter = ({ publicCList, loading, error }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {publicCList &&
          publicCList.length > 0 && (
            <Section title="data Results">
              {publicCList.map((data) => (
                <Link
                  to={{
                    pathname: `/ytcrawl/${data.video_id}`,
                    state: {},
                  }}
                >
                  <Container key={data.videoId}>
                    <ImageContainer>
                      <img
                        src={data.thumbnailDefault ? data.thumbnailDefault : ""}
                      />
                    </ImageContainer>
                    <Title>{data.title}</Title>
                    <Year>{data.publishedAt}</Year>
                  </Container>
                </Link>
              ))}
            </Section>
          )}

        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

export default CrawlListPresenter;
