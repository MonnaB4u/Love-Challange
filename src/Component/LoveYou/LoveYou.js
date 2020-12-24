import React from 'react';
import './LoveYou.css'
import { Button, Nav} from "react-bootstrap";

const LoveYou = () => {
    
    return (
        <div className="container">
<div className="mt-5 d-flex justify-content-center">
           
           <div className="col-md-4 love mt-5">
               <h1>Do You Love Me</h1>
           </div>
           <div className="col-md-4 img mt-5">
           <img src="https://cdn.pixabay.com/photo/2013/07/13/10/50/heart-157895_1280.png" className="img-fluid" alt=""/>
            </div>

        </div>

            <div className="button but m-5  d-flex justify-content-center">

            {/* <button href="/loveUToo" type="button" class="btn btn-danger m-5 but1">Yes</button>  */}
            <Button  className="m-5 but" href="/sayOfcourse" variant="danger" >Yes</Button>

            <Button  className="m-5" href="/loveUToo" variant="danger" >of course yes!</Button>
           

            </div>


        </div>  

    );
};

export default LoveYou;