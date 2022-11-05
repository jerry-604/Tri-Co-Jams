import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Header() {
    return (
        <Navbar className="nav justify-content-center" id="bar" bg="primary" expand="md">  
        <Container className="nav justify-content-center" id="container">  
          <Navbar.Brand id="brand" href="#home">TriCo Jams</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        </Container>  
      </Navbar>  
    );
}

export default Header;
