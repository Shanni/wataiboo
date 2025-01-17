import React, { useState } from 'react';
import { Modal, Button, Carousel, Badge, Row, Col } from 'react-bootstrap';

const AgentDetailModal = ({ show, onHide, agent }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!agent) return null;

    const getTopics = (topics) => {
        if (!topics?.edges) return [];
        return topics.edges.map(edge => edge.node.name);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{agent.node.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {agent.node.media && agent.node.media.length > 0 && (
                    <div className="detail-carousel-container mb-4">
                        <Carousel 
                            activeIndex={activeIndex} 
                            onSelect={(index) => setActiveIndex(index)}
                            className="detail-carousel"
                        >
                            {agent.node.media.map((media, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={media.url}
                                        alt={`${agent.node.name} - ${index + 1}`}
                                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div className="thumbnail-strip mt-2">
                            <Row>
                                {agent.node.media.map((media, index) => (
                                    <Col key={index} xs={3} className="mb-2">
                                        <img
                                            src={media.url}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => setActiveIndex(index)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                )}
                
                <h5 className="text-primary mb-3">{agent.node.tagline}</h5>
                
                <div className="mb-3">
                    {getTopics(agent.node.topics).map((topic, index) => (
                        <Badge 
                            key={index} 
                            bg="info" 
                            className="me-2 mb-2"
                        >
                            {topic}
                        </Badge>
                    ))}
                </div>

                <div className="description-section mb-4">
                    <h6 className="text-muted mb-2">Description</h6>
                    <p>{agent.node.description}</p>
                </div>

                <div className="stats-section">
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="stat-card">
                                <div className="stat-label">Votes</div>
                                <div className="stat-value">{agent.node.votesCount}</div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="stat-card">
                                <div className="stat-label">Created</div>
                                <div className="stat-value">
                                    {new Date(agent.node.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                {agent.node.website && (
                    <Button 
                        variant="primary" 
                        href={agent.node.website} 
                        target="_blank"
                    >
                        Visit Website
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default AgentDetailModal; 