import React from "react";
import "./Header.css";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  Col,
  Container,
  Row,
  Navbar,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="topbar">
        <Container>
          <Row className="pt-2">
            <Col md={6}>
             <p className="call">Call Us <b> (300)123-45679</b> </p>
            </Col>
            <Col md={6}>
              <div className="social">
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
        </Container>
      </div>

      {/* Logo bar with address */}

      <div className="logobar">
        <Container>
          <Row>
            <Col md={3}>
              <Link to="/">
                <img className="logo" src={logo} alt="" />{" "}
              </Link>
            </Col>
            <Col md={9}>
              <div className="logoright">
                <div>
                  <ul>
                    <li>SEND US AN EMAIL</li>
                    <li>
                      <b>MAIL@EXAMPLE.COM</b>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li> CALL US NOW </li>
                    <li>
                      {" "}
                      <b>800-123-456</b>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* navbar   */}

      <div className="nav">
      <Container>
        <Row>
          <Col>
            <div className="navbar">
              <ul>
                <Link to="/"><li> Home </li></Link>
                <Link to="/shop"><li> Shop </li></Link>
                <Link to="/blog"><li> Blog </li></Link>
                <Link to="about"><li> About </li></Link>
                <Link to="Money"><li> Money </li></Link>
                <Link to="contact"><li> Contact </li></Link>
                <Link to="dashboard"><li> Dashborad </li></Link>
                
              </ul>
            </div>
          </Col>
        </Row>
      </Container>  
      </div> 
      
    
      
    </>
  );
};

export default Header;
