import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/utils/Navbar';
import Footer from './components/utils/Footer';
import Social from "./components/utils/Social";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

import './App.css';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "Joshua Enikele",
        navLinks: [
          { title: "Home", path: "/" },
          { title: "About", path: "/about" },
          { title: "Contact", path: "/contact" },
          { title: "Projects", path: "/projects" }
        ],
        home: {
          title: "Front-end Developer",
          intro:"Hi, I'm JOSHTEFLON,",
          subTitle:
            "I specialize in Web design and Front-end Development, I'm here to make your dream user interface and experience come true."
        },
        about: {
          title: "About Me"
        },
        projects: {
          title: "My Projects"
        },
        contact: {
          title: "Contact Me"
        }
      };
    }

    render() {
      return (
        <React.Fragment>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact render={() => <Home intro={this.state.home.intro} title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
              <Route path="/about" render={() => <About title={this.state.about.title} />} />
              <Route path="/projects" render={() => <Projects title={this.state.projects.title} />} />
              <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
            </Switch>
          </Router>
          <Social />
          <Footer />
        </React.Fragment>
      );
    }
  }
  
  export default App;
