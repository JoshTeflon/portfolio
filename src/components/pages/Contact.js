import React, { Component } from 'react';

import emailjs from "emailjs-com";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Hero from '../utils/Hero'


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState({
      disabled: true,
    });

    emailjs
      .sendForm("gmail", "teflontemplate", event.target, "user_ZHCl7e3FGIxgOGnf3dV6I")
      .then(result => {
          this.setState({
            emailSent: true,
          });
        })
      .catch(error => {
          this.setState({ 
            emailSent: false, 
          });
        }
      );
  }

  render() { 
      const { title } = this.props;
      const { name, email, message, disabled, emailSent } = this.state;
    return (
      <div>
        <Hero title={title} />
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="slideInRight">
                  <Form.Label htmlFor="fullname">Full Name</Form.Label>
                  <Form.Control
                    id="fullname"
                    name="name"
                    type="text"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="slideInRight">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="slideInRight">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    rows="3"
                    value={message}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>


                <Button
                  className="d-inline-block button slideInLeft"
                  type="submit"
                  variant="primary"
                  disabled={disabled}>
                  SEND
                </Button>

                {emailSent === true && (
                  <p className="d-inline success-msg">Email Sent</p>
                )}
                {emailSent === false && (
                  <p className="d-inline error-msg">Email Not Sent</p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;