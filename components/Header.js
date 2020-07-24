import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './Header.module.css';

/*
      <NavDropdown title="Resources" id="basic-nav-dropdown" className={styles.link}>
        <NavDropdown.Item href="/languages" className={styles.link}>Languages</NavDropdown.Item>
        <NavDropdown.Item href="/linguistics" className={styles.link}>Linguistics</NavDropdown.Item>
        <NavDropdown.Item href="/geography" className={styles.link}>Geography</NavDropdown.Item>
      </NavDropdown>
*/

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
      <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
      <Nav.Link href="/about" className={styles.link}>About</Nav.Link>
      <Nav.Link href="https://ko-fi.com/langmap" className={styles.link}>Donate</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
