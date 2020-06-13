import React from 'react';

import { Jumbotron } from "react-bootstrap";

const Hero = (props) => {
    const { intro, title, subTitle } = props;
  return (
    <Jumbotron className="bg-transparent">
      <h1 className="title slideInLeft">{intro}</h1>
      <h2 className="title slideInLeft">{title}</h2>
      <h5 className="subtitle slideInLeft">{subTitle}</h5>
    </Jumbotron>
  );
}

export default Hero;