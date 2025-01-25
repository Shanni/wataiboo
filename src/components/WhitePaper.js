import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLightbulb, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';

const WhitePaper = () => {
    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col lg={8} className="mx-auto text-center">
                    <h1 className="display-4 mb-4">AI Agents Directory Whitepaper</h1>
                    <p className="lead text-muted">
                        A Decentralized Platform for AI Agent Discovery and Integration
                    </p>
                    <div className="text-muted mb-4">
                        Version 1.0 - March 2024
                    </div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={10} className="mx-auto">
                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h2 className="mb-4">Executive Summary</h2>
                            <p>
                                The AI Agents Directory is pioneering a decentralized platform that revolutionizes how users discover, 
                                evaluate, and integrate AI agents into their workflows. Our platform combines cutting-edge blockchain 
                                technology with a user-friendly interface to create a transparent and efficient marketplace for AI solutions.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h3 className="mb-4">
                                <FaLightbulb className="me-2 text-primary" />
                                Vision & Mission
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-3">• Create the world's most comprehensive AI agent marketplace</li>
                                <li className="mb-3">• Ensure transparency and quality in AI agent discovery</li>
                                <li className="mb-3">• Foster innovation through community-driven development</li>
                                <li className="mb-3">• Democratize access to advanced AI technologies</li>
                            </ul>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h3 className="mb-4">
                                <FaCogs className="me-2 text-primary" />
                                Technology Stack
                            </h3>
                            <Row>
                                <Col md={6}>
                                    <h5>Platform Architecture</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• Decentralized infrastructure</li>
                                        <li className="mb-2">• Smart contract integration</li>
                                        <li className="mb-2">• AI agent verification system</li>
                                        <li className="mb-2">• Cross-chain compatibility</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h5>Security Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• Multi-signature governance</li>
                                        <li className="mb-2">• Automated security audits</li>
                                        <li className="mb-2">• Decentralized identity</li>
                                        <li className="mb-2">• Encrypted data storage</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h3 className="mb-4">
                                <FaUsers className="me-2 text-primary" />
                                Token Utility
                            </h3>
                            <Row>
                                <Col md={6}>
                                    <h5>Governance</h5>
                                    <p>Token holders can participate in:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• Platform development decisions</li>
                                        <li className="mb-2">• Feature prioritization</li>
                                        <li className="mb-2">• Protocol upgrades</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h5>Benefits</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• Reduced platform fees</li>
                                        <li className="mb-2">• Early access to new features</li>
                                        <li className="mb-2">• Staking rewards</li>
                                        <li className="mb-2">• Revenue sharing</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h3 className="mb-4">
                                <FaChartLine className="me-2 text-primary" />
                                Roadmap
                            </h3>
                            <div className="roadmap">
                                <div className="roadmap-item mb-4">
                                    <h5>Phase 1: Foundation (Q2 2024)</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• Platform launch</li>
                                        <li className="mb-2">• Token generation event</li>
                                        <li className="mb-2">• Initial partnerships</li>
                                    </ul>
                                </div>
                                <div className="roadmap-item mb-4">
                                    <h5>Phase 2: Expansion (Q3-Q4 2024)</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• DAO implementation</li>
                                        <li className="mb-2">• Advanced search features</li>
                                        <li className="mb-2">• Mobile app launch</li>
                                    </ul>
                                </div>
                                <div className="roadmap-item">
                                    <h5>Phase 3: Scaling (2025)</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">• Cross-chain integration</li>
                                        <li className="mb-2">• AI agent marketplace</li>
                                        <li className="mb-2">• Global expansion</li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WhitePaper; 