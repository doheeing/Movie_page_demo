import React, { useState } from "react";
import "./AppLayout.style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div className="main-style">
      <Navbar expand="lg" className="nav-style py-3 px-5" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="img/main_logo.jpg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="nav-menu">
                홈
              </Nav.Link>
              <Nav.Link href="/movies" className="nav-menu">
                영화
              </Nav.Link>
            </Nav>
            <Form className="d-flex nav-bar-search" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                variant="outline-danger"
                className="search-button"
                type="submit"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default AppLayout;
