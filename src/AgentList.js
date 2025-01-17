import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AgentList = () => {

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