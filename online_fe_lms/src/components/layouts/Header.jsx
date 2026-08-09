import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";
export const  Header = ()=> {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/"><IoHome /> Home</Link>
            <Link className="nav-link" to="/signup"><PiSignInFill /> Sign Up </Link>
            <Link className="nav-link" to="/login"> <TbLogin />LogIn</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

