import React from 'react';

import Hero from '../utils/Hero';
import Stack from "../utils/Stack";
import { Container } from 'react-bootstrap';

import AboutImg from "../utils/images/aboutJosh.JPG";


const About = (props) => {
    const { title } = props;
  return (
    <Container fluid={true}>
      <Hero title={title} />
      <div className="about">
        <div className="about-text-img">
          <img className="about-img slideInRight" src={AboutImg} alt="About Img"/>
          <div className="about-text slideInRight">
            <p>I am a free-spirited Frontend developer skilled in Html, Css, Javascript and React JS with a passion for animation, I'm also a positive minded and an efficient
            communicator.</p>
            <p>I am always down for a chess match in my free time or
            video games.</p>
          </div>
        </div>
        <div className="about-stack">
          <Stack />
        </div>
      </div>
    </Container>
  );
};

export default About;