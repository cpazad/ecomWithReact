import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import sparrow from "../../../images/sparrow.jpg";
import Shopsidebar from "../../SiderBar/ShopSiderBar/Shopsidebar";

const Shop = () => {
  // State Management - Use State
  const [products, setProducts] = useState([]);

  // effect Management- use effect

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Container>
        <Row>
          {/* sider Bar Section  */}
          <Col md={3} className="forsideBar">
            <Shopsidebar></Shopsidebar>
          </Col>

          {/*  Main Shop Section   */}

          <Col md={9} className="mainshop">
            <Container className="shop m-3">
              <Row>
                {/* product Looper */}

                {products.map((data) => (
                  <Col md={4} info={data} >
                    <Card className="my-2" style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={data.img} />
                      <Card.Body>
                        <Card.Title> Product Name:{data.name} </Card.Title>
                        <Card.Text>
                          <em>Details :</em> Some quick example text to build on
                          the card title and make up the bulk of the card's
                          content.
                        </Card.Text>
                        <h6> Price:{data.price} Taka </h6>
                        <Button variant="primary" Link to="/contact">
                          {" "}
                          Buy Now{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
