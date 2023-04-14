import {Navbar,Container,Nav} from "react-bootstrap";
// import {FaBars,FaTimesCircle}from 'react-icons/fa';
import Logo from "./Logo.png";
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
            <Nav.Link className="n" href="#home">Home</Nav.Link>
            <Nav.Link className="n" href="#link">About</Nav.Link>
            <Nav.Link className="n" href="#link">Skills</Nav.Link>
            <Nav.Link className="n"href="#link">Projects</Nav.Link>
            
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

