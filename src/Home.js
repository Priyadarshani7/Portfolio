
import React from "react";
import pic from "./pic .jpg";
import {Container,Row,Col} from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { AiOutlineArrowDown } from 'react-icons/ai';


export default function Home(){



    return (
        <div className="section">
        <section >
            <br></br>
            <Container >
      <Row>
        <Col>
        <h1 className="tagline">Welcome to my Portfolio</h1>
        <br></br>
        
      <h1 className="nametitle">
       I'm Priyadarshani </h1>
 
     <div className="animation">
      <Typewriter className="font"
       options={{
        autoStart:true,
        loop:true,
        delay:60,
        strings:[
          "Front-End Developer",
          "Designer",
          "Coder"
        ],
       }}
      />
     </div>
        <button   className="about">About me <AiOutlineArrowDown /></button>
        </Col>
       
        <Col>
        <br></br>
        <img className="portfolioimg" src={pic } alt="header "/>
        </Col>
      </Row>
    </Container>
    <br></br>
        </section>
     
        </div>
    )
}