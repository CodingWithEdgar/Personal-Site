import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/" className="text-white">Edgar Maldonado</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
            <NavDropdown title={<span className="text-white">Projects</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Project #1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Project #2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Project #3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated Project#4</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
</Navbar>;

export default NavBar;