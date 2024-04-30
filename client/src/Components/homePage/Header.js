import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../homePage/assets/logo.png";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        height: "90px",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container style={{ marginLeft: "-5px" }}>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold" }}>
          <img
            src={img}
            width="180"
            height="80"
            className="d-inline-block align-top"
            alt="cni"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {" "}
              Home{" "}
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" style={{ whiteSpace: "nowrap" }}>
              Contacter Us
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
          </Nav>

          <Form className="d-flex" style={{ marginLeft: "880px" }}>
            <Link to="/signup">
              <Button
                variant="outline-secondary"
                style={{
                  height: "40px",
                  width: "80px",
                  textAlign: "center",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <p>Sign up</p>
              </Button>
            </Link>
            <Link to="/login">
              <Button
                style={{
                  height: "40px",
                  width: "auto",
                  textAlign: "center",
                  alignItems: "center",
                  backgroundColor: "#DD5D20",
                  border: "0",
                }}
              >
                <p>Login</p>
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
