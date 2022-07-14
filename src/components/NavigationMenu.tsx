import React from "react";
import { Nav, Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavMenu = () =>{
    return(

        <Navbar bg="light" expand="lg" > 
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link to="/movies-in-theaters" as={NavLink}>Movies in theaters</Nav.Link>
        <Nav.Link to="/movies-coming" as={NavLink}>Coming Soon</Nav.Link>
        <Nav.Link to="/top-rated-india" as={NavLink}>Top rated Indian</Nav.Link>
        <Nav.Link to="/top-rated-movies" as={NavLink}>Top rated movies</Nav.Link>
        <Nav.Link to="/favourit " as={NavLink}>Favourites</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    )
};

export default NavMenu;