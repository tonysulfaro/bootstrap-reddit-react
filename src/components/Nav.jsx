import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Nav = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Reddit Client</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
};

export default Nav;
