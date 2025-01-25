import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaRobot } from 'react-icons/fa';

const Navigation = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <Navbar 
            expand="lg" 
            className={`custom-navbar sticky-top ${visible ? 'navbar-visible' : 'navbar-hidden'}`}
        >
            <Container>
                <NavLink to="/" className="navbar-brand d-flex align-items-center">
                    <FaRobot className="brand-icon me-2" />
                    <span className="brand-text">AI Agents Directory</span>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                            }
                            end
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/agents" 
                            className={({isActive}) => 
                                `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                            }
                        >
                            Agents
                        </NavLink>
                        <NavLink 
                            to="/token" 
                            className={({isActive}) => 
                                `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                            }
                        >
                            Token
                        </NavLink>
                    </Nav>
                    <Form className="d-flex mt-2 mt-lg-0">
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