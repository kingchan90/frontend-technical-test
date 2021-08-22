import React from "react";
import loading from "../../assets/img/loading.gif";

import './module.scss';

const Loading : React.FC = () => (
  <div className="loading-inline">
    <figure className="loading-img-wrapper">
      <img src={loading} alt="Loading" className="loading-img"/>
      <figcaption>Loading...</figcaption>
    </figure>

  </div>
);

export default Loading;
