import React from "react";
import ReactDom from "react-dom";
import bgimg from '../images/logo.png';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';


const About =()=>{
    
    return(
        <>
        <div className="container">

        <div className="imgal">
         <img src={bgimg} alt="logo"  class="rounded mx-auto d-block"/>
        </div>
        <div className="cnta2">
        <h1 className="cnt2">WHO ARE WE</h1>
        <h3 className="cnt3"> We Are HOME DOG <FontAwesomeIcon icon={faPaw}/></h3>
        <p className="cntap">The Home Dog Project is the result of a collaborative effort between two leading animal welfare groups, 
            the Humane Society of the United States and Maddie’s Fund, and the leading producer of public 
            service advertising (PSA) campaigns, The Ad Council.</p>

        <p>Our goal is to make shelters the first place potential adopters turn when looking to get a new pet, 
            ensuring that all healthy and treatable pets find loving homes. We do this by breaking down 
            misconceptions surrounding shelter pets and celebrating the unique bond between every shelter
             pet and parent.</p>
        </div>
        </div>
        </>
    );
}

export default About;