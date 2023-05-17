import piyu from "./piyu.jpg";
import {Container,Row,Col} from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs";


export default function About(){
  
    return (
        <div  className="aboutsection" id="about">
           
        <section >
        
            <Container>
           
      <Row  id="gap">
      <h1 id="abouttagline">< BsFillPersonFill  id="logo"/>About <span className="me"> Me</span>
      </h1>
   
        <Col >
        <br></br>
        <img className="image_piyu" src={piyu} alt="my pic"/>
        
        </Col>

        <Col id="abouttext">
        <br></br>
       <h2 className="myname">I'm <span className="piyu" >Priyadarshani</span></h2>
       <h4 id="f">Front-End Developer </h4>
       <br></br>
        <h4>Currently, a Second Year Computer Engineering student pursuing B-Tech at Pune University. I am into Web development and Recently, I am learning and working on the projects of React js.
I am also a part of Ui-Path Community in my college as Core Team member as well as a part of an online Community named OreoDroiders where I am contributing in design team.</h4>
<h4>As a Learner, I am very passionate about improving my coding skills and developing applications and websites. </h4>
<h5 > <span className="blue">Email :</span> priyadarshanik07@gmail.com</h5>
<h5 ><span className="blue">Place : </span>Pune,India</h5>
        </Col>
      </Row>
    </Container>
        </section>
       
    </div>
   );
}
