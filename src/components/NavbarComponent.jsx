import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <Navbar
      data-bs-theme="dark"
      bg="dark"
      expand="lg"
      className="bg-body-tertiary navstyle"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="textstyle">
          Kat-Coding
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="textstyle">
              Resume
            </Nav.Link>
            <Nav.Link href="#link" className="textstyle">
              Projects
            </Nav.Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/kat-coding">
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/katherine-watkins-programming/">
                LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
