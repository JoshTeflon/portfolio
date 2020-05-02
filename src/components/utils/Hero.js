import React from 'react';

import { Jumbotron } from "react-bootstrap";

const Hero = (props) => {
  return (
    <Jumbotron className="bg-transparent">
      <h1 className="title slideInLeft">{props.intro}</h1>
      <h2 className="title slideInLeft">{props.title}</h2>
      <h5 className="subtitle slideInLeft">{props.subTitle}</h5>
    </Jumbotron>
  );
}

export default Hero;