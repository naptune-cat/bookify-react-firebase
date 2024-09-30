import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Bookify</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/book/list">Add listings</Nav.Link>
          <Nav.Link href="/book/orders">Orders</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button className="me-2" variant="outline-light" href="/register">
            SignUp
          </Button>
          <Button variant="outline-light" href="/login">
            Login
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
