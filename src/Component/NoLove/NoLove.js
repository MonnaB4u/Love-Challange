import React from 'react';
import { Button, Nav} from "react-bootstrap";

const NoLove = () => {
    return (
        <div className="container justify-content-center">
        <div className="mt-5 d-flex justify-content-center">
       
       <div className="col-md-4 love mt-5">
           <h1>Say Of course yes " _ "</h1>
       </div>
       <div className="col-md-4 img mt-5">
       <img src="https://tse1-mm.cn.bing.net/th/id/OIP.5rN9LuHfiuYayPMsHeRmCQHaJd?pid=Api&rs=1" className="img-fluid" alt=""/>
        </div>

    </div>

    <div className="button but m-5  d-flex justify-content-center">

            {/* <button href="/loveUToo" type="button" class="btn btn-danger m-5 but1">Yes</button>  */}

            <Button  className="m-5" href="/loveUToo" variant="danger" >of course yes!</Button>

            </div>

    </div>

            
  
    );
};

export default NoLove;