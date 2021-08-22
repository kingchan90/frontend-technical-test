import React from "react";
import logo from "../../logo.svg";

import './module.scss';

const Loading : React.FC = () => (
  <div className="loading">
    <div className="loading-logo">
      <img src={logo} alt="Loading..." />
    </div>
  </div>
);

export default Loading;
