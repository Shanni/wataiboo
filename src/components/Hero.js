import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRobot, FaMagic, FaBrain } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={8} className="text-center text-lg-start">
                        <h1 className="hero-title">Discover Tomorrow’s AI, Today</h1>
                        <p className="hero-subtitle px-3 px-lg-0">
                        src/components/Hero.jsHandpicked AI Products & Agents, Updated Daily.
                        </p>
                        <div className="hero-features">
                            <div className="feature">
                                <FaRobot className="feature-icon" />
                                <span className="feature-text">Smart Automation</span>
                            </div>
                            <div className="feature">
                                <FaMagic className="feature-icon" />
                                <span className="feature-text">Powerful Tools</span>
                            </div>
                            <div className="feature">
                                <FaBrain className="feature-icon" />
                                <span className="feature-text">AI-Powered</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="d-none d-lg-block">
                        <div className="hero-image-container">
                            {/* <img 
                                src="/ai-illustration.png" 
                                alt="AI Illustration" 
                                className="hero-image"
                            /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero; 