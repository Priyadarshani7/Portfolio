import React from "react";
import {Container,Col,Row} from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c from "./c.png";
import css from "./css.png";
import html from "./html.png";

export default function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section>
          <Container>
            <Row>
                <Col>
                <div>
                  <h2 id="skills">Skills</h2> 
                  <Carousel responsive={responsive} infinite={true} className="skillslider">
                    <div className="item">
                    <img className="im"
                     src={c} alt="hey" />
                    <h5>HTML</h5>
                    </div>
                    <div className="item">
                    <img className="im" src={css} alt="hey" />
                    <h5>CSS</h5>
                    </div>
                    <div className="item">
                    <img className="im" src={html} alt="hey" />
                    <h5>Javascript</h5>
                    </div>
                  </Carousel>
                </div>
                </Col>
            </Row>
            </Container>  
        </section>
      )
}