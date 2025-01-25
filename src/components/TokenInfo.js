import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCoins, FaChartLine, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const TokenInfo = () => {
    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col lg={8} className="mx-auto text-center">
                    <h1 className="display-4 mb-4">AI Agents Directory Token</h1>
                    <p className="lead text-muted">
                        Powering the future of AI agent discovery and governance through decentralized community ownership
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100 token-feature-card">
                        <Card.Body className="text-center">
                            <FaCoins className="feature-icon mb-3" style={{ fontSize: '2rem', color: '#667eea' }} />
                            <Card.Title>Tokenomics</Card.Title>
                            <Card.Text>
                                Total Supply: 100M AIAG<br />
                                Initial Circulation: 20M<br />
                                Vesting Period: 24 months
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100 token-feature-card">
                        <Card.Body className="text-center">
                            <FaChartLine className="feature-icon mb-3" style={{ fontSize: '2rem', color: '#667eea' }} />
                            <Card.Title>Utility</Card.Title>
                            <Card.Text>
                                Governance voting<br />
                                Platform fee discounts<br />
                                Premium features access
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100 token-feature-card">
                        <Card.Body className="text-center">
                            <FaHandshake className="feature-icon mb-3" style={{ fontSize: '2rem', color: '#667eea' }} />
                            <Card.Title>Community</Card.Title>
                            <Card.Text>
                                DAO governance<br />
                                Community proposals<br />
                                Revenue sharing
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100 token-feature-card">
                        <Card.Body className="text-center">
                            <FaShieldAlt className="feature-icon mb-3" style={{ fontSize: '2rem', color: '#667eea' }} />
                            <Card.Title>Security</Card.Title>
                            <Card.Text>
                                Audited smart contract<br />
                                Multi-sig treasury<br />
                                Time-locked tokens
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <Card className="border-0 shadow">
                        <Card.Body className="p-5">
                            <h3 className="mb-4">How to Invest</h3>
                            <ol className="investment-steps">
                                <li className="mb-3">
                                    <strong>Initial Token Offering (ITO)</strong>
                                    <p>Participate in our upcoming token sale through our official launchpad partners.</p>
                                </li>
                                <li className="mb-3">
                                    <strong>DEX Listing</strong>
                                    <p>Once launched, tokens will be available on major decentralized exchanges.</p>
                                </li>
                                <li className="mb-3">
                                    <strong>Staking Program</strong>
                                    <p>Earn rewards by staking your tokens and participating in platform governance.</p>
                                </li>
                                <li className="mb-3">
                                    <strong>Liquidity Mining</strong>
                                    <p>Provide liquidity to earn additional rewards and help stabilize the token price.</p>
                                </li>
                            </ol>
                            <div className="text-center mt-4">
                                <Button variant="primary" size="lg" href="#whitepaper">
                                    Read Whitepaper
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={8} className="mx-auto text-center">
                    <h3 className="mb-4">Token Distribution</h3>
                    <div className="distribution-chart mb-4">
                        {/* You can add a chart component here */}
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Allocation</th>
                                <th>Percentage</th>
                                <th>Amount</th>
                                <th>Vesting</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Public Sale</td>
                                <td>20%</td>
                                <td>20M AIAG</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Team</td>
                                <td>15%</td>
                                <td>15M AIAG</td>
                                <td>24 months</td>
                            </tr>
                            <tr>
                                <td>Development</td>
                                <td>30%</td>
                                <td>30M AIAG</td>
                                <td>12 months</td>
                            </tr>
                            <tr>
                                <td>Marketing</td>
                                <td>15%</td>
                                <td>15M AIAG</td>
                                <td>12 months</td>
                            </tr>
                            <tr>
                                <td>Reserve</td>
                                <td>20%</td>
                                <td>20M AIAG</td>
                                <td>36 months</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default TokenInfo; 