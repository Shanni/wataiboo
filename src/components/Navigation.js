import React from 'react';
import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaRobot } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <FaRobot className="brand-icon me-2" />
                    <span className="brand-text">AI Agents Directory</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#agents" className="nav-link-custom">Agents</Nav.Link>
                        <Nav.Link href="#categories" className="nav-link-custom">Categories</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <InputGroup>
                            <InputGroup.Text className="search-icon">
                                <FaSearch />
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Search AI agents..."
                                className="search-input"
                            />
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation; 