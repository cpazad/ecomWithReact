import React from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./home.css";
import player from "../../../images/players.jpg";
import boxer from "../../../images/boxer.jpg";
import woman from "../../../images/womanrun.jpg";
import search from "../../../images/searching.png";
import profit from "../../../images/profit.png";
import secure from "../../../images/encrypted.png";
import mike from "../../../images/mike.jpg";
import staff1 from "../../../images/team-image1.jpg";
import staff2 from "../../../images/team-image2.jpg";
import sparrow from "../../../images/sparrow.jpg";

const Home = () => {
  return (
    <>
      {/*Carousel feature  */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={player}
            alt="some rugbie players"
          />
          <Carousel.Caption>
            <h3>Need Web Design?</h3>
            <p> Freebombyte is here to help you </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={boxer}
            alt="a boxer in Black and white"
          />

          <Carousel.Caption>
            <h3>One Stop solution</h3>
            <p>Here in Freedombyte we work for your success</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={woman}
            alt=" A woman running on the track"
          />

          <Carousel.Caption>
            <h3>Website that Run</h3>
            <p>We built functional website for the customer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*Carousel feature  Ends */}

      {/* Our Services  */}

      <Container className="service">
        <Row>
          <Col md={4}>
            <div className="serviceItem">
              <div className="serviceImg">
                <img src={search} alt="Search icon" />
              </div>
              <div>
                <ul>
                  <li>
                    <h4>SEO Optimization</h4>
                  </li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="serviceItem">
              <div className="serviceImg">
                <img src={profit} alt="icon for marketing" />
              </div>
              <div>
                <ul>
                  <li>
                    {" "}
                    <h4> Pro Marketing Ads </h4>
                  </li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="serviceItem">
              <div className="serviceImg">
                <img src={secure} alt="icon for security" />
              </div>
              <div>
                <ul>
                  <li>
                    <h4> Secure Support </h4>
                  </li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Our Services  Ends */}

      {/* Who we are Section */}

      <section className="WhoWeAre">
        <Container>
          <Row>
            <Col md={6}>
              <div className="WhoText">
                <h2>
                  {" "}
                  Who <b>We Are</b>{" "}
                </h2>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit massa
                  enim. Nullam id varius nunc.
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere architecto asperiores corrupti impedit voluptate hic
                  tenetur perferendis temporibus doloremque aliquam.
                </p>
                <Button variant="dark" size="lg" className="px-5">
                  {" "}
                  Learn More{" "}
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="whoImg">
                <img src={mike} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Out Team Section  */}

      <Container className="team">
        <Row>
          <Col md={6}>
            <Container>
              <Row>
                <Col md={6}>
                  <Card style={{ width: "18rem" }} className="team-card shadow-sm">
                    <Card.Img variant="top" src={staff1} />
                    <Card.Body>
                      <Card.Title> Jasone Bourne </Card.Title>
                      <Card.Text>SEO Speciallist</Card.Text>
                      <Button variant="secondary"> Full Bio </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{ width: "18rem" }} className="team-card shadow-sm">
                    <Card.Img variant="top" src={staff2} />
                    <Card.Body>
                      <Card.Title> Scarlet Johanson </Card.Title>
                      <Card.Text>Digital Marketing Specialist</Card.Text>
                      <Button variant="secondary"> Full Bio </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={6}>
            <div className="WhoText">
              <h2>
                {" "}
                Meet <b>Our Team </b>{" "}
              </h2>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit massa
                enim. Nullam id varius nunc.
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                architecto asperiores corrupti impedit voluptate hic tenetur
                perferendis temporibus doloremque aliquam. dolor sit amet
                consectetur adipisicing elit. Facere architecto asperiores
                corrupti impedit voluptate hic tenetur perferendis temporibus
                doloremque aliquam.
              </p>
              <Button variant="dark" size="lg" className="px-5">
                {" "}
                Learn More{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Our latest Post */}

      <section className="latestPost">
        <Container>
          <Row>
            <h3 className="display-4 my-3"> Our Latest Posts </h3>
            <Col md={3}>
              <div className="post">
                <div className="postImg">
                  <img src={sparrow} alt="" />
                </div>
                <div className="postDetails">
                  <div className="post-date">
                    <span className="date"> 10 </span>
                    <span className="month"> June </span>
                  </div>
                  <div className="post-text">
                   <h4 className="post-title text-white"> Post Title Here  </h4>
                   <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. </p>
                   <Button variant="Link" className="text-white"> Read more &gt; </Button> 
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="post">
                <div className="postImg">
                  <img src={sparrow} alt="" />
                </div>
                <div className="postDetails">
                  <div className="post-date">
                    <span className="date"> 10 </span>
                    <span className="month"> June </span>
                  </div>
                  <div className="post-text">
                   <h4 className="post-title text-white"> Post Title Here  </h4>
                   <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. </p>
                   <Button variant="Link" className="text-white"> Read more &gt; </Button> 
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="post">
                <div className="postImg">
                  <img src={sparrow} alt="" />
                </div>
                <div className="postDetails">
                  <div className="post-date">
                    <span className="date"> 10 </span>
                    <span className="month"> June </span>
                  </div>
                  <div className="post-text">
                   <h4 className="post-title text-white"> Post Title Here  </h4>
                   <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. </p>
                   <Button variant="Link" className="text-white"> Read more &gt; </Button> 
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="post">
                <div className="postImg">
                  <img src={sparrow} alt="" />
                </div>
                <div className="postDetails">
                  <div className="post-date">
                    <span className="date"> 10 </span>
                    <span className="month"> June </span>
                  </div>
                  <div className="post-text">
                   <h4 className="post-title text-white"> Post Title Here  </h4>
                   <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae. </p>
                   <Button variant="Link" className="text-white"> Read more &gt; </Button> 
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </>
  );
};

export default Home;
