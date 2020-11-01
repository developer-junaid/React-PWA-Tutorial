import "./../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from "react-bootstrap"
import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Routes from "./Routes"

const NavBar = () => {
  return (
    <div>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="users">Users</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Routes />
      </Router>
    </div>
  )
}

export default NavBar
