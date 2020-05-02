import React from "react";

import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "Stack",
      subTitle: "Langauges I Speak"
    };
  }
  render() {
    return (
      <Container fluid={true}>
        <div className="stack slideInLeft">
          <h3 className="mt-4">{this.state.subTitle}</h3>
          <div className="stack-card">
            <Card>
              <h6>
                Html <FontAwesomeIcon icon={faHtml5} />
              </h6>
              <div className="bar">
                <span className="html"></span>
              </div>
              <div className="percent">90%</div>
            </Card>

            <Card>
              <h6>
                Css <FontAwesomeIcon icon={faCss3} />
              </h6>
              <div className="bar">
                <span className="css"></span>
              </div>
              <div className="percent">80%</div>
            </Card>

            <Card>
              <h6>
                Javascript <FontAwesomeIcon icon={faJs} />
              </h6>
              <div className="bar">
                <span className="javascript"></span>
              </div>
              <div className="percent">60%</div>
            </Card>

            <Card>
              <h6>
                React <FontAwesomeIcon icon={faReact} />
              </h6>
              <div className="bar">
                <span className="react"></span>
              </div>
              <div className="percent">50%</div>
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}

export default Stack;
