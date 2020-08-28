import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'logo.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
/**
 * Navbar.
 */
function TopNavbar() {
  const [isShowing, setIsShowing] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.apiReducer);

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to={'/'}>
          Karya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default TopNavbar;
