import React from "react";

import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import Hero from "../utils/Hero";

import Freelancer from "../utils/images/Freelancer.png";

const Home = (props) => {
    const { title, intro, subTitle } = props;
  return (
    <React.Fragment>
      <Container fluid={true}>
        <div className="home">
          <div className="home-info">
            <Hero title={title} intro={intro} subTitle={subTitle} />
            <div className="d-flex justify-content-center">
            <Link className="contact-btn bg-transparent slideInLeft" to="/contact">Contact Me</Link>
            </div>
          </div>
          <div className="home-img">
            <img className="img slideInRight" src={Freelancer} alt="Home Img" fluid="true" />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
