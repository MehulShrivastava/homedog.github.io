import React from "react";
import ReactDom from "react-dom";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact =()=>{
    return(
        <>
        <div className="container">
            <div className="card mb-2">
            <div className="bgimgc m-2">
            
        {/* <!--Section: Contact v.2--> */}
<section class="mb-4">

    {/* <!--Section heading--> */}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us  <FontAwesomeIcon icon={faPhone} /> </h2>
    {/* <!--Section description--> */}
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        {/* <!--Grid column--> */}
        <div className="formc">
        <div class="mb-3">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column-->

                    <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div class="row">
                   
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    
                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        

        
                </div>
    </div>

</section>
</div>
</div>
</div>
{/* <!--Section: Contact v.2--> */}
</>

    );
}

export default Contact;