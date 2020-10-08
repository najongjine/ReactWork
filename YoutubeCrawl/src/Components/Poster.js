import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
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

const Poster = ({
  videoId,
  channelId,
  description,
  publishedAt,
  thumbnail = null,
  title,
  isYoutube = false,
}) => (
  <Container>
    <ImageContainer>
      <img src={thumbnail ? thumbnail : ""} />
    </ImageContainer>
    <Title>{title}</Title>
    <Year>{publishedAt}</Year>
  </Container>
);
/*
Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};
*/
export default Poster;
