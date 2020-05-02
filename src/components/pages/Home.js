import React from "react";

import { Container } from "react-bootstrap";
import Hero from "../utils/Hero";

import Freelancer from "../utils/images/Freelancer.png";

const Home = (props) => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <div className="home">
          <div className="home-info">
            <Hero title={props.title} intro={props.intro} subTitle={props.subTitle} />
            <div className="d-flex justify-content-center">
            <a className="contact-btn bg-transparent slideInLeft" href="/contact">Contact Me</a>
            </div>
          </div>
          <div className="home-img">
            <img className="img slideInRight" src={Freelancer} alt="Home Img" fluid />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
