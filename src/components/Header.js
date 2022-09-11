import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#" className="fs-1">
          Navbar
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
