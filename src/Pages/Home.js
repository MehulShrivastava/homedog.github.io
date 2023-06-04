import React from "react";
import ReactDom from "react-dom";
import backgroundVideo from "../video/videobg.mp4";
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';




const Home =()=>{
    return(
      <>
      <div class="container-fluid">
      <h1 className="head"> Welcome to Dog Home <FontAwesomeIcon icon={faPaw}/></h1>
        <div class="card bg-dark text-white">
        <video autoPlay muted loop className="vid">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div class="card-img-overlay">
        <h5 class="card-title">Find a new Friend!!!</h5>
        
        <p class="card-text">Adopt a pet that you've always wanted straight from the owner. Arrange a meeting to get to know a possible friend</p>
        <Link to="/About" >
            <button className="btn1">
              <b> Continue! </b>
            </button>
          </Link>
        </div>
        </div>
      </div>
        
         </>

    );
}

export default Home;