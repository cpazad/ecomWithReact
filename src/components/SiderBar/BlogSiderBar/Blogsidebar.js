import React from 'react';
import { Form } from 'react-bootstrap';
import './Blogsidebar.css';

const Blogsidebar = () => {
    return (
        <>
            <section className="shopSideBar blogsidebar">
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
              Man Fashion
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
              Woman Fashion 
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
              New Electornics
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
               All about Camera
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
              Food Value and Nutrition 
            </label>
          </div>
        </div>

        {/* Brand List  */}

        <h6 className="mt-3"> Month List </h6>
        <div className="category">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Jan 
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
              Feb 
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
              Mar  
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
              April  
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
              May  
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
    )
}

export default Blogsidebar;
