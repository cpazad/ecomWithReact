import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';

const Footer = () => {
    return (
        <>
         <section className="footer">
        <Container>
          <Row className="ffirstrow">
            
            <Col>
              <h4>Contact Details</h4>
              <ul className="flist">
                <li>Porto Template 123</li>
                <li>Porto Blvd, Suite</li>
                <li>New York</li>
              </ul>
            </Col>
            <Col>
              <h4> Opening Hours </h4>
              <ul className="flist">
                <li>
                  Mon-Fri: <b> 8:30 am to 5:00 pm</b>{" "}
                </li>
                <li>
                  Saturday: <b> 9:30 am to 1:00 pm</b>{" "}
                </li>
                <li>
                  Sunday: <b> Closed</b>{" "}
                </li>
              </ul>
            </Col>
            <Col>
              <h4> Call Us Now </h4>
              <ul className="flist">
                <li>
                  <h3> (800) 123 4567</h3>{" "}
                </li>
                <li>
                  Sales: <b> (800) 123 4568</b>{" "}
                </li>
              </ul>
            </Col>
            <Col>
              <h4> Social Media </h4>
              <div className="social socialW">
                <ul>
                  <li>
                    <a href="http://">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="http://">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="http://">
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <hr className="fHR" />
            <div className="copy">
              <p>© copyright 2021. All Rights Reserved.</p>
            </div>
          </Row>
        </Container>
      </section>


        </>
    )
}

export default Footer
