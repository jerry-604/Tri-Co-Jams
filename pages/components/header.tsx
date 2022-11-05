import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>Brand text</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="#home">
              <p>hello</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <p>hello</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
}

export default Header;