import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  /** Could do with some styling */

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Navbar.Brand href="/">Football Friends</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="tabs" className="me-auto" >
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/AllUsers">All Users</Nav.Link>
          <Nav.Link href="/friends">Friends</Nav.Link>
          <Nav.Link href="/messages">Messages</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/LikesReceived">Likes Received</Nav.Link>
          <Nav.Link href="/LikesSent">Likes Sent</Nav.Link>
        </Nav>
        <Nav variant="tabs">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>

  </Navbar>
  );
}




// <nav style={{ fontSize: "18px", display: "flex", justifyContent: "space-between" }}>
// <div>
//   <Link to="/" style={{ color: "darkblue" }}>
//     Homepage
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/profile" style={{ color: "darkblue" }}>
//     My Profile
//   </Link>
// &nbsp; | &nbsp;
// <Link to="/AllUsers" style={{ color: "darkblue" }}>
//   All Users
// </Link>
//   &nbsp; | &nbsp;
//   <Link to="/friends" style={{ color: "darkblue" }}>
//     My Football Friends
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/messages" style={{ color: "darkblue" }}>
//     My Messages
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/search" style={{ color: "darkblue" }}>
//     Search
//   </Link>
// </div>
// <div>
//   <Link to="/login" style={{ color: "darkblue" }}>
//     Log in/out
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/register" style={{ color: "darkblue" }}>
//     Register
//   </Link>
// </div>

// </nav>