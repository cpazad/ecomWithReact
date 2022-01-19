import React from 'react'
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    Row,
  } from "react-bootstrap";
  import "./contact.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    
    faClock,
    faEnvelope,
    faLocationArrow,
    
    faPhone,
  
  } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <>
             <Container className="contactUs">
        <Row>
          <Col md={6}>
            <h2>
              {" "}
              <b>Contact</b> Us{" "}
            </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              autem
            </p>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel> First Name*</FormLabel>
                    <FormControl></FormControl>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel> Last Name*</FormLabel>
                    <FormControl></FormControl>
                  </FormGroup>
                </Col>
              </Row>
              <Form.Group className="my-3" controlId="formGroupEmail">
                <Form.Label> Your Email address* </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Label> Subject </Form.Label>
                <Form.Control type="text" placeholder=" What is it about? " />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Textarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button> Send Message </Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="office">
              <ul>
                <li>
                  <h4>
                    Our <b>Office</b>
                  </h4>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>{" "}
                  <b> Address </b> 1234 Street Name, City Name, United States{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                  <b> Phone </b> (123) 456-789{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
                  <b> Email </b> mail@example.com{" "}
                </li>
              </ul>
            </div>

            <div className="hours">
              <ul>
                <li>
                  <h4>
                    Business <b> hours </b>
                  </h4>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "}
                  <b>Monday - Friday : </b> 9am to 5pm{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "}
                  <b> Saturday : </b> (123) 456-789{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "}
                  <b> Sunday : </b> Closed{" "}
                </li>
              </ul>
            </div>

            <div className="touch">
                <h4>Get in <b> touch </b></h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magnam placeat non alias voluptatum. Placeat dicta id beatae dignissimos repudiandae.</p>  
            </div>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default Contact
