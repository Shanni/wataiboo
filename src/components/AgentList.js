import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup, Badge, Spinner, Alert, Carousel } from 'react-bootstrap';
import { productHuntService } from '../services/productHuntService';
import AgentDetailModal from './AgentDetailModal';
import { MAIN_CATEGORIES, TOPIC_TO_CATEGORY_MAP } from '../config/categories';

const AgentList = () => {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');
    const [viewMode, setViewMode] = useState('cards');
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchAgentsFromProductHunt();
    }, []);

    const fetchAgentsFromProductHunt = async () => {
        try {
            const data = await productHuntService.searchAITools();
            setAgents(data.posts.edges);
            
            // Extract unique categories from all agents
            const allCategories = new Set();
            data.posts.edges.forEach(item => {
                if (item.node.topics?.edges) {
                    item.node.topics.edges.forEach(topic => {
                        allCategories.add(topic.node.name);
                    });
                }
            });
            setCategories(Array.from(allCategories).sort());
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const getMediaUrls = (media) => {
        if (!media) return [];
        return media.filter(item => item.url).map(item => item.url);
    };

    const getTopics = (topics) => {
        if (!topics?.edges) return [];
        return topics.edges.map(edge => edge.node.name);
    };

    const getMainCategory = (topics) => {
        if (!topics?.edges) return null;
        
        // Try to find the first matching main category
        for (const topic of topics.edges) {
            const mainCategory = TOPIC_TO_CATEGORY_MAP[topic.node.name];
            if (mainCategory) return mainCategory;
        }
        
        // Default to AI & Machine Learning if no match found
        return MAIN_CATEGORIES.AI_TOOLS;
    };

    const filteredAgents = agents.filter(item => {
        const mainCategory = getMainCategory(item.node.topics);
        return category === 'all' || mainCategory === category;
    });

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center py-5">
                <Alert variant="danger">
                    Error loading agents: {error}
                </Alert>
            </Container>
        );
    }

    return (
        <Container>
            <div className="filter-section mb-4">
                <Row className="align-items-center">
                    <Col md={3}>
                        <Form.Select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {Object.values(MAIN_CATEGORIES).map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Form.Select 
                            value={priceFilter} 
                            onChange={(e) => setPriceFilter(e.target.value)}
                        >
                            <option value="all">All Prices</option>
                            <option value="free">Free</option>
                            <option value="paid">Paid</option>
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Button variant="primary" onClick={fetchAgentsFromProductHunt}>
                            Refresh Data
                        </Button>
                    </Col>
                    <Col md={3}>
                        <ButtonGroup className="w-100">
                            <Button 
                                variant={viewMode === 'cards' ? 'primary' : 'outline-primary'}
                                onClick={() => setViewMode('cards')}
                            >
                                Cards View
                            </Button>
                            <Button 
                                variant={viewMode === 'structured' ? 'primary' : 'outline-primary'}
                                onClick={() => setViewMode('structured')}
                            >
                                Structured View
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>

            {viewMode === 'cards' ? (
                <Row>
                    {filteredAgents.map((item) => (
                        <Col key={item.node.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card className="h-100">
                                {item.node.media && item.node.media.length > 0 && (
                                    <Carousel interval={null} className="card-carousel">
                                        {getMediaUrls(item.node.media).map((url, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={url}
                                                    alt={`${item.node.name} - ${index + 1}`}
                                                    style={{ height: '200px', objectFit: 'cover' }}
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                )}
                                <Card.Body>
                                    <Card.Title>{item.node.name}</Card.Title>
                                    <Card.Text>{item.node.tagline}</Card.Text>
                                    <div className="mb-2">
                                        <Badge 
                                            bg="primary" 
                                            className="me-2 mb-2"
                                        >
                                            {getMainCategory(item.node.topics)}
                                        </Badge>
                                        {getTopics(item.node.topics).map((topic, index) => (
                                            <Badge 
                                                key={index} 
                                                bg="info" 
                                                className="me-1 mb-1"
                                            >
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Badge bg="secondary">
                                            Votes: {item.node.votesCount}
                                        </Badge>
                                        {item.node.description && (
                                            <Button 
                                                variant="outline-secondary" 
                                                size="sm"
                                                onClick={() => {
                                                    setSelectedAgent(item);
                                                    setShowModal(true);
                                                }}
                                            >
                                                More Info
                                            </Button>
                                        )}
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <small>
                                        Created: {new Date(item.node.createdAt).toLocaleDateString()}
                                    </small>
                                    {item.node.website && (
                                        <Button 
                                            variant="link" 
                                            href={item.node.website} 
                                            target="_blank"
                                            className="float-end"
                                        >
                                            Visit Website
                                        </Button>
                                    )}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <pre className="bg-light p-3 rounded">
                    {JSON.stringify(filteredAgents, null, 2)}
                </pre>
            )}

            <AgentDetailModal 
                show={showModal}
                onHide={() => setShowModal(false)}
                agent={selectedAgent}
            />
        </Container>
    );
};

export default AgentList; 