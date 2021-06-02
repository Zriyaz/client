import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        className="container-fluid homeNavbar"
      >
        <NavbarBrand className="p-3" href="/">
          <img src={Logo} className="brand-logo" alt="jam" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar className="p-5">
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="link-style">
                <Link to="/">User</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-style">
                <Link to="/registration">Registration</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-style">
                <Link to="/login">Login</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
