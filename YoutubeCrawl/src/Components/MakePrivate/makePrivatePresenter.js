import React from "react";

const DetailPresenter = ({ crawledIdx, makeVideoPrivate, loading, error }) => (
  <div>
    <button onClick={makeVideoPrivate}>make {crawledIdx} video private</button>
  </div>
);

export default DetailPresenter;
