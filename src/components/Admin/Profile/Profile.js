import React from 'react';
import { Card } from 'react-bootstrap';
import './Profile.css';
import sparrow from "../../../images/sparrow.jpg";

const Profile = () => {
    return (
        <>
          <Card className="content-panel shadow-sm mx-2 p-2">
                  <Card.Body>
                      <h3> Profile Update </h3>
                      <hr />
                      <img src={ sparrow}/>

                  </Card.Body>

              </Card>
                
        </>
    )
}

export default Profile;
