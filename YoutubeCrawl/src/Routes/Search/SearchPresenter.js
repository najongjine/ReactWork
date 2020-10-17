import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
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
const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
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
const SearchPresenter = ({
  youTubeResult,
  loading = false,
  searchTerm,
  handleSubmit,
  handleOnClick,
  error,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter something you want to Crawl from youtube"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {youTubeResult &&
          youTubeResult.length > 0 && (
            <Section title="youtube Results">
              {youTubeResult.map((youtube) => (
                <Link
                  to={{
                    //watch라우터 만들고 라우팅 시키자
                    pathname: `/ytcrawl/${youtube.videoId}`,
                    state: {
                      youtubeData: youtube,
                      inputStr: searchTerm,
                    },
                  }}
                >
                  <Container key={youtube.videoId} onClick={handleOnClick}>
                    <ImageContainer>
                      <img
                        src={
                          youtube.thumbnailDefault
                            ? youtube.thumbnailDefault
                            : ""
                        }
                      />
                    </ImageContainer>
                    <Title>{youtube.title}</Title>
                    <Year>{youtube.publishedAt}</Year>
                  </Container>
                </Link>
              ))}
            </Section>
          )}
      </>
    )}
  </Container>
);
/*
SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};
*/
export default SearchPresenter;
/**
 * channelId: "UCX_uPA_dGf7wXjuMEaSKLJA"
channelTitle: "Aditya Movies"
description: "Watch & Enjoy #AAa New Hindi Dubbed Full Movie. Starring #Nithiin, #Samantha and #Anupama Parameshwaran. Directed by #Trivikram Film Name : A Aa ..."
publishedAt: "2018-08-26T07:17:25Z"
thumbnailDefault: "https://i.ytimg.com/vi/R7aCOI4DuA0/default.jpg"
thumbnailHigh: "https://i.ytimg.com/vi/R7aCOI4DuA0/hqdefault.jpg"
thumbnailMedium: "https://i.ytimg.com/vi/R7aCOI4DuA0/mqdefault.jpg"
title: "A Aa New Hindi Dubbed Full Movie | Nithiin ,Samantha , Anupama Parameshwaran | Trivikram"
videoId
 */
