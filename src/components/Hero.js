import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="hero-section py-5 bg-light">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="display-4">Discover the Best AI Agents</h1>
                        <p className="lead">Browse through our curated collection of AI agents for various tasks</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero; 