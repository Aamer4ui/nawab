import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Navigation/NavigationTop.css";
export const NavigationTop = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="color-nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="nav" href="#">
              HOME
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              COURSES
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              DEPARTMENT
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              ADMISSIONS
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              PLACEMENTS
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              FEATURES
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              EVENTS
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              GALLERY
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              EXAMINATION CELL
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              R & D CELL
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              ABOUT US
            </Nav.Link>
            <Nav.Link id="nav" href="#">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
