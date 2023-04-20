
// import {Container,Col,Row} from "react-bootstrap";
import {VscVm} from "react-icons/vsc";

import ProgressBar from 'react-animated-progress-bar';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import c from "./c.png";
// import css from "./css.png";
// import html from "./html.png";

export default function Skills(){
    
      return(
        <div id="skill" className="skills-section">
        <h1 className="titleskill"><  VscVm id="logo"/>Skills</h1>
        <div className="skillsection">

<div className="skillbox">
<h1 className="textskill">HTML/CSS
<ProgressBar
        width="100%"
        height="20px"
        rect
        fontColor="black"
        percentage="95 "
        rectBorderRadius="30px"
        trackBorderColor="black"
        defColor={{
          fair: 'purple',
          good: 'purple',
          excellent: 'purple',
          poor: 'purple',
        }} />
  </h1>
</div>
<div className="skillbox">
<h1 className="textskill">Javascript
<ProgressBar
     width="100%"
     height="20px"
     rect
     fontColor="black"
     percentage="80 "
     rectBorderRadius="30px"
  
     trackBorderColor="black"
     defColor={{
       fair: 'purple',
       good: 'purple',
       excellent: 'purple',
       poor: 'purple',
     }} />
  </h1>
</div>
<div className="skillbox">
<h1 className="textskill">React
<ProgressBar
        width="100%"
        height="20px"
        rect
        fontColor="black"
        percentage="60 "
        rectBorderRadius="30px"
      
        trackBorderColor="black"
        defColor={{
          fair: 'purple',
          good: 'purple',
          excellent: 'purple',
          poor: 'purple',
        }} />
  </h1>
</div>
<div className="skillbox">
<h1 className="textskill">C++
<ProgressBar
    width="100%"
    height="20px"
    rect
    fontColor="black"
    percentage="80 "
    rectBorderRadius="30px"
    trackBorderColor="black"
    defColor={{
      fair: 'purple',
      good: 'purple',
      excellent: 'purple',
      poor: 'purple',
    }}/>
  </h1>
</div>
<div className="skillbox">
<h1 className="textskill">Python
<ProgressBar
        width="100%"
        height="20px"
        rect
        fontColor="black"
        percentage="50 "
        rectBorderRadius="30px"
   
        trackBorderColor="black"
        defColor={{
          fair: 'purple',
          good: 'purple',
          excellent: 'purple',
          poor: 'purple',
        }} />
  </h1>




</div>
</div>
 </div>
        
         )
}



// export default function Skills(){
//   const responsive = {
//       superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5
//       },
//       desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3
//       },
//       tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//       },
//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//       }
//     };

//     return(
//       <section>
//         <Container>
//           <Row>
//               <Col>
//               <div>
//                 <h2 id="skills">Skills</h2> 
//                 <Carousel responsive={responsive} infinite={true} className="skillslider">
//                   <div className="item">
//                   <img className="im"
//                    src={c} alt="hey" />
//                   <h5>HTML</h5>
//                   </div>
//                   <div className="item">
//                   <img className="im" src={css} alt="hey" />
//                   <h5>CSS</h5>
//                   </div>
//                   <div className="item">
//                   <img className="im" src={html} alt="hey" />
//                   <h5>Javascript</h5>
//                   </div>
//                 </Carousel>
//               </div>
//               </Col>
//           </Row>
//           </Container>  
//       </section>
//     )
// }