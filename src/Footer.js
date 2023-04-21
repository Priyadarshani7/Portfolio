import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {AiFillTwitterCircle} from "react-icons/ai";
export default function Skills(){
    return(
<div className="footer-section">
    <hr className="first"></hr>
 <div className="both">
    <div className="thankyou">
<p>Thankyou for visiting my Portfolio.Connect with me over socials.</p>
    </div>
<div className="icons">
    <AiFillGithub className="github" onClick={event =>  window.location.href='https://github.com/Priyadarshani7'}/>
    <ImLinkedin className="linkedin" onClick={event =>  window.location.href='https://www.linkedin.com/in/priyadarshani-kalbandhe-990643235/'}/>
  <AiFillTwitterCircle className="twitter" onClick={event =>  window.location.href='https://twitter.com/priyadarshani7k'}/>


</div>
 </div>
 <div className="footer">
  <hr className="second"></hr>
 <h1 className="design">Designed with ❤️ By Priyadarshani </h1> 
 <p className="copyright">Priyadarshani © 2023 
 
  </p>
 </div>


</div>
    );
}