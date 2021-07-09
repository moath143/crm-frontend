import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/img/crm.png'
import {Link, useHistory} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
function Header() {
  const history = useHistory()
  const logOut = () => {
    history.push('/')
  }
    return (
      <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
        <Navbar.Brand>
          <img alt="logo" src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tickets">
              <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>
            {/* <Link to="/dashboard">Dashboard</Link>
            <Link to="/tickets">Tickets</Link>
            <Link to="/logout">Logout</Link> */}

            <Nav.Link onClick={logOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header
