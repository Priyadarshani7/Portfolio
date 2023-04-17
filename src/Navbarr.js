import {Navbar,Container,Nav} from "react-bootstrap";
// import {FaBars,FaTimesCircle}from 'react-icons/fa';
import Logo from "./Logo.png";
import {Link} from "react-scroll";


export default function Navbarr(){
 
  return(
    <Navbar  expand="lg">
  
      <Container>
      
        <Navbar.Brand >
          
          <h3><img className="logo" src={Logo} alt="header "/>Priyadarshani</h3>
        </Navbar.Brand >
        <Navbar.Toggle  className="toggle"aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="home"  smooth={true} duration={10} offset={0}className="n" >Home</Link> 

            <Link to="about"  smooth={true} duration={10} offset={0}  className="n" >About</Link>
            <Link className="n" href="#link">Skills</Link>
            <Link className="n"href="#link">Projects</Link>
            
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

