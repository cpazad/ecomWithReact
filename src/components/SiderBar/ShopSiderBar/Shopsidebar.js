import React from "react";
import { Form } from "react-bootstrap";
import './Shopsidebar.css';

const Shopsidebar = () => {
  return (
    <>
      <section className="shopSideBar">
        <Form.Group className="mb-3 mt-4" controlId="Searchinput">
          <Form.Label> Search Product </Form.Label>
          <Form.Control type="text" placeholder="Search..." />
        </Form.Group>

        <h6> Category </h6>
        <div className="category">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Man
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Woman
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Electornics
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Camera
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Food
            </label>
          </div>
        </div>

        {/* Brand List  */}

        <h6 className="mt-3"> Brand List </h6>
        <div className="category">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Apple 
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Microsoft 
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Nokia 
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Samsung 
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Oppo 
            </label>
          </div>
        </div>
        <div className="tag">
        <h6 className="mt-3"> Product Tags </h6>
            <span className="tag-items shadow m-1"> Mobile </span>
            <span className="tag-items shadow m-1"> laptop</span>
            <span className="tag-items shadow m-1"> computer </span>
            <span className="tag-items shadow m-1"> Season </span>
            <span className="tag-items shadow m-1"> Festival </span>
            <span className="tag-items shadow m-1"> 11/11 </span>
        </div>
      </section>
    </>
  );
};

export default Shopsidebar;
