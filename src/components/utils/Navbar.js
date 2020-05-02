import React from 'react';

import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


import teflon from '../utils/images/Teflon.png';

const NavBar = () =>{
    return (
          <Container className="p-0" fluid={true}>
            <Navbar expand="lg">
              <Navbar.Brand><img src={teflon} alt="" width="100" height="60" /></Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <NavLink exact={true} className="nav-link" activeClassName="is-active" to="/">Home</NavLink>
                  <NavLink className="nav-link" activeClassName="is-active" to="/about">About</NavLink>
                  <NavLink className="nav-link" activeClassName="is-active" to="/projects">Projects</NavLink>
                  <NavLink className="nav-link" activeClassName="is-active" to="/contact">Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
    );
  }

export default NavBar;