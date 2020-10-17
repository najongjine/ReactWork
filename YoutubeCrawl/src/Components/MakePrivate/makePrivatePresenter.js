import React from "react";

const DetailPresenter = ({ crawledIdx, makeVideoPrivate, loading, error }) => (
  <div>
    <button onClick={makeVideoPrivate}>submit</button>
  </div>
);

export default DetailPresenter;
