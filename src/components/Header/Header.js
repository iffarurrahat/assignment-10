import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar className="bg_color" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="logo">
            BNSB
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Link to="/home" className="items">
              Home
            </Link>
            <Link to="/aboutUs" className="items">
              About Us
            </Link>
            <Link to="/services" className="items">
              Services
            </Link>
            <Link to="/doctors" className="items">
              Doctors
            </Link>
            <Link to="/contact" className="items">
              Contact
            </Link>
            {user?.email ? (
              <Button
                onClick={logout}
                style={{ height: '32px' }}
                variant="dark"
                size="sm"
                className="mt-3"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login" className="items">
                Login
              </Link>
            )}
          </Nav>
          <span>{user.displayName} </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
