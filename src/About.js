import piyu from "./piyu.jpg";
import {Container,Row,Col} from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs";
export default function About(){
    return (
        <div>
           
        <section>
        
            <Container>
           
      <Row  id="gap">
      <h1 id="abouttagline">< BsFillPersonFill  id="logo"/>About Me
      </h1>
   
        <Col >
        <br></br>
        <img className="image_piyu" src={piyu} alt="my pic"/>
        <br></br>
        <br></br>
        <br></br>
        </Col>

        <Col id="abouttext">
        <br></br>
       <h2><span>I'm Priyadarshani</span></h2>
       <h4>Front-End Developer </h4>
       <br></br>
        <h5>Currently, a Second Year Computer Engineering student pursuing B-Tech at Pune University. I am into Web development and recently, I am learning React js.
I am also a part of Ui Path Community in my college as Core Team member as well as a part of an online Community named OreoDrioders where I am contributing in design team</h5>
<h5>As a Learner, I am very passionate about improving my coding skills and developing applications and website </h5>
<br></br>
<h5>Email : priyadarshanik07@gmail.com</h5>
<h5>Place : Pune,India</h5>
        </Col>
      </Row>
    </Container>
        </section>
       
    </div>
   );
}