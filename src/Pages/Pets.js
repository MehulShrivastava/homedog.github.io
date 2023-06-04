import React,{Component} from "react";
import ReactDom from "react-dom";
import '../App.css';
import Card from "./Card.json";
import image from "../images/p1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';



const Pets =(props)=>{
  return(
    <>
    

      
    

  {Card.map(key =>{
    return(
      <>
      
       <div className="container" >       
      <div class="row row-cols-1 row-cols-md-3 g-4 py-2">
  <div class="col">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> {key.title} <FontAwesomeIcon icon={faPaw}/></h5>
        <p class="card-text"> {key.info} </p>
        <p class="card-text"> {key.about} </p>

      </div>
      <div class="card-footer text-center">
        <Link to='/More'className="cardlink"><b> More Details </b></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title"> {key.title} <FontAwesomeIcon icon={faPaw}/></h5>
        <p class="card-text"> {key.info} </p>
        <p class="card-text"> {key.about} </p>
        </div>
      <div class="card-footer text-center">
      <Link to='/More' className="cardlink"><b> More Details </b></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title"> {key.title} <FontAwesomeIcon icon={faPaw}/></h5>
        <p class="card-text"> {key.info} </p>
        <p class="card-text"> {key.about} </p>
        </div>
      <div class="card-footer text-center">
      <Link to='/More' className="cardlink"> <b> More Details </b></Link>
      </div>
    </div>
  </div>
</div>
</div>
            
     
      


      
      </>
    )
  })
}


    
    
   
        
    </>  
  );    
}  
       
  

export default Pets;