import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import logo from '../../assets/img/crm.png'

function Header() {
    return (
      <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
        <Navbar.Brand>
          <img alt='logo' src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header
