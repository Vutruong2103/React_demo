import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }
    const handleRegister = () => {
        navigate('/Register');
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Vũ hay hỏi</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* tạo đường link /user */}
                        {/* thẻ link giúp giao diện kh load lại */}
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/User" className='nav-link'>Users</NavLink>
                        <NavLink to="/Admin" className='nav-link'>Admin</NavLink>

                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>Log in</button>
                        <button className='btn-signup' onClick={() => handleRegister()}>Sign up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log in</NavDropdown.Item>
                            <NavDropdown.Item >Log outout</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;