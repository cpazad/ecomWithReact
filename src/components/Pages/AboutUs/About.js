import React, { useState, useEffect} from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import mike from "../../../images/mike.jpg";
import './About.css';
// import staff1 from "../../../images/team-image1.jpg";
// import staff2 from "../../../images/team-image2.jpg";

const About = () => {

//State Management 
const [users, setUser] = useState([])

// API Manage Management

useEffect(() => {
  fetch("http://localhost:8000/users").then((data)=>data.json()).then((data)=>setUser(data))
}, [])

    return (
        <>
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
                <Button variant="dark" size="lg">
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
{/* User Loop */}

{

  users.map((data)=><Col user={data} md={6}>
  <Card className='my-2 user' style={{ width: "18rem" }}>
    <Card.Img variant="top" src={ data.image} />
    <Card.Body>
      <Card.Title> {data.name} </Card.Title>
      <Card.Text>
        {data.skill}
      </Card.Text>
      <Button variant="secondary"> Full Bio </Button>
    </Card.Body>
  </Card>
</Col> )
}

                
                {/* <Col md={6}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src= { staff2 } />
                    <Card.Body>
                      <Card.Title> Scarlet Johanson </Card.Title>
                      <Card.Text>
                        Digital Marketing Specialist 
                      </Card.Text>
                      <Button variant="secondary"> Full Bio </Button>
                    </Card.Body>
                  </Card>
                </Col> */}
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
                perferendis temporibus doloremque aliquam. dolor sit amet consectetur adipisicing elit. Facere architecto asperiores corrupti impedit voluptate hic tenetur
                perferendis temporibus doloremque aliquam.
              </p>
              <Button variant="dark" size="lg">
                {" "}
                Learn More{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default About
