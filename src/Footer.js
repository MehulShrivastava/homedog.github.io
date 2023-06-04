import React from "react";
import reactDom from "react-dom";
import './App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import {faHouse, faEnvelope, faPhone, faCopyright, faPaw} from '@fortawesome/free-solid-svg-icons';




const Footer = ()=>{
    return(
        <>
        <div className="container-fluid">
        {/* <!-- Footer --> */}
<footer class="text-center text-lg-start text-muted position-static">
  {/* <!-- Section: Social media --> */}
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    {/* <!-- Left --> */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="https://www.facebook.com" class="me-4 text-reset">
      
        <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
      </a>
      <a href="https://twitter.com" class="me-4 text-reset">
      
      <FontAwesomeIcon icon={faTwitter} className="icon"></FontAwesomeIcon>
      
      </a>
      <a href="https://www.google.com" class="me-4 text-reset">
      <FontAwesomeIcon icon={faGoogle} className="icon" ></FontAwesomeIcon>
      </a>

      <a href="https://www.instagram.com" class="me-4 text-reset">
      <FontAwesomeIcon icon={faInstagram} className="icon" ></FontAwesomeIcon>
      </a>
      <a href="https://www.linkedin.com" class="me-4 text-reset">
      <FontAwesomeIcon icon={faLinkedin} className="icon" ></FontAwesomeIcon>
      </a>
      
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="sl">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 class="text-uppercase fw-bold mb-4">
             Home Dog <FontAwesomeIcon icon={faPaw} className="iconlogo"/>
          </h6>
          <p>
            Our mission  (and passion) is to help get homeless pets out of the shelters and into
            loving homes. 
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            PARTNER
          </h6>
          <p>
            Become a Groomer
          </p>
          <p>
            Become a Trainer
          </p>
          <p>
            Pet Grooming Course
          </p>
          <p>
            Pet Store Franchise
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            HOME SERVICE
          </h6>
          <p>
            Pet Grooming
          </p>
          <p>
            Dog Training
          </p>
          <p>
            Vet on Call
          </p>
          <p>
            Pet Relocation
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><FontAwesomeIcon icon={faHouse} className="iconl"/> INDIA</p>
          <p>
          <FontAwesomeIcon icon={faEnvelope} className="iconl"/> homedog@gmail.com
          </p>
          <p><FontAwesomeIcon icon={faPhone} className="iconl"/> + 91 422 5091</p>
          <p><FontAwesomeIcon icon={faPhone} className="iconl"/> + 91 422 5092</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-4">
    © 2021 Copyright <FontAwesomeIcon icon={faCopyright} className="iconc"/>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}

        </div>
        </>
    );
}

export default Footer;