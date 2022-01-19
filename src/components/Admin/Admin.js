import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";
import Dashboard from "./Dashboard/Dashboard";

const Admin = () => {
  return (
    <section className="dashboard">
      <Container>
        <Row>
          {/* control panel */}
          <Col md={3}>
            <Card className="control-panel shadow-sm">
              <Card.Body>
                  <ul className="list-group">
                      <li className="list-group-item"><Link to="/dashboard"> Dashboard </Link></li>
                      <li className="list-group-item"><Link to="/dashboard/profile"> Profile </Link></li>
                      <li className="list-group-item"><Link to="/dashboard/password"> Change Passwrod </Link></li>
                      <li className="list-group-item"><Link to="/dashboard/student"> Student </Link></li>
                      <li className="list-group-item"><Link to="/dashboard/staff"> Staff </Link></li>
                      <li className="list-group-item"><Link to="/dashboard/setting"> Setting </Link></li>
                      <li className="list-group-item"><Link to="/dashboard/logout"> logout </Link></li>
                  </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Changing Section */}
          <Col md={9}>
              <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Admin;
