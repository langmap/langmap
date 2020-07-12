import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">
    <img
        alt=""
        src="https://raw.githubusercontent.com/langmap/langmap/master/public/small-logo.PNG"
        height="70"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Nav>
      <Nav.Link href="/" style={{'color': 'black', 'font-size': '1.25em'}}>Home</Nav.Link>
      <Nav.Link href="/about" style={{'color': 'black', 'font-size': '1.25em'}}>About</Nav.Link>
      <Nav.Link href="/resources" style={{'color': 'black', 'font-size': '1.25em'}}>Resources</Nav.Link>
      <Nav.Link href="https://ko-fi.com/langmap" style={{'color': 'black', 'font-size': '1.25em'}}>Donate</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
