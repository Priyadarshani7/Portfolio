import {Navbar,Container,Nav} from "react-bootstrap";
// import {FaBars,FaTimesCircle}from 'react-icons/fa';
export default function Navbarr(){
  return(
    <Navbar  expand="lg">
  
      <Container>
      
        <Navbar.Brand >
          <h3>Priyadarshani</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

