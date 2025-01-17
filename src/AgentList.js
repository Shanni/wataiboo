import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const agents = [
    { name: "Agent A", description: "Description of Agent A" },
    { name: "Agent B", description: "Description of Agent B" },
    { name: "Agent C", description: "Description of Agent C" },
];

const AgentList = () => {
    return (
        <Container>
            <h1 className="my-4">AI Agent Catalog</h1>
            <Row>
                {agents.map((agent, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{agent.name}</Card.Title>
                                <Card.Text>{agent.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AgentList; 