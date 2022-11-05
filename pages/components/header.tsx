import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Header() {
    return (
        <Navbar bg="primary" expand="md">  
        <Container>  
          <Navbar.Brand id="brand" href="#home">TriCo Jams</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        </Container>  
      </Navbar>  
    );
}

export default Header;