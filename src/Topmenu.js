import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import './App.css';
import logo from './images/logo.png';

const Topmenu=()=>{
    return(
        <>
        <nav className="navbar">
          <div className="container-fluid">
          
            
            <a class="navbar-brand">
              <img src={logo} alt="logo" width="80" height="64" class="d-inline-block align-text-top"/>
            </a>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link to="/Home" class="nav-link"> Home </Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link"> About Us </Link>
              </li>
              <li class="nav-item">
                <Link to="/Pets" class="nav-link"> Pets </Link>
              </li>
              <li class="nav-item">
                <Link to="/Contact" class="nav-link"> Contact Us </Link>
              </li>
            </ul>
        
          </div> {/*----Container fluid----- */}
          </nav>
        </>
    );
}

export default Topmenu;