import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

function Header() {
    return (
        <Navbar className="nav justify-content-center" id="bar" bg="primary" expand="md">  
        <Container className="nav justify-content-center" id="container">  
          <Navbar.Brand className="navbar-brand m-0 p-0 text-secondary" href="#home">TriCo Jams</Navbar.Brand> 
        </Container>  
      </Navbar>  
    );
}

export default Header;
