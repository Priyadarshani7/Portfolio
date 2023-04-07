// import { useState,useE
//  } from "react";
import React from "react";
import pic from "./pic .jpg";
import {Container,Row,Col} from "react-bootstrap";

export default function Home(){



    return (
        <div className="section">
        <section >
            <br></br>
            <Container >
      <Row>
        <Col>
        <span className="tagline">Welcome to my Portfolio</span>
      
      <h1>
        <span>{"I'm Priyadarshani Kalbandhe"}</span></h1>
        <h1>Front-End Developer</h1>
        <br></br>
        <button   className="about">About me</button>
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