import React from "react";
import "./header.css";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="last">
      <Navbar bg="dark" expand="sm">
        <Container>
          <Navbar.Brand className="text-white">MovieApp</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "#f0f8ff98" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
            <Nav className="me-auto  ">
              <Nav.Link className="text-white">Cart</Nav.Link>
              <Nav.Link className="text-white">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
