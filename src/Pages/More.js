import React,{Component} from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import '../App.css';
import App from '../App.js';
import image from '../images/p1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';

const More = () =>{
    return(
        <>
        {/* <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-6">
                    <div className="thumbnail">
                        <div className="col-sm-6 col-md-6 col-xs-6">
                            <img src={image} alt="Dog"/>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xs-6">
                            <h1>BELLA</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </> */}
        <div className="container pb-2">
          <div class="card text-center pb-2" >
              <div className="morecard">
          <div class="card-header pull-left">
            <img className="card-image img-fluids" src={image} alt=""/>
            <h1>BELLA</h1>
            <h3><b>Pet Story <FontAwesomeIcon icon={faPaw}/></b></h3>
            <h5 class="card-title">Meet the ever-glamorous <em>Bella</em> Like most celebrities, 
            she's roclusive and profers a quiet environment <em>Bella</em> is also very shy and will require 
            someone with patience. However, she is not shy when It's time for dog treats! <em>Bella</em> is a 
            strict player, enjoying the finest fish and seafood. She also enjoys living his best playing with his favorite.
            She is well trained dog with a long nails. She likes to play fetch the ball game. <em>Bella</em> is the loved by all the kids of the family. </h5>
        </div>
        </div>

<div class="card-block px-4 py-4">
<a href="#" class="btn btn-primary float-start ">
    Age  <br/>
    <b>3 YEARS</b>
</a>

<a href="#" class="btn btn-primary">
    Sex  <br/>
    <b>Female</b>
</a>

<a href="#" class="btn btn-primary float-end">
    Weight  <br/>
    <b>18 Kg</b>
</a>
</div>  {/*Card block  */}




</div>
</div>
</>
    );
}

export default More;