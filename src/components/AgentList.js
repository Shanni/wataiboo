import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, ButtonGroup, Badge, Spinner, Alert, Carousel } from 'react-bootstrap';
import { productHuntService } from '../services/productHuntService';

const AgentList = () => {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('all');
    const [priceFilter, setPriceFilter] = useState('all');
    const [viewMode, setViewMode] = useState('cards');

    useEffect(() => {
        fetchAgents();
    }, []);

    const fetchAgents = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/producthunt/ai-tools');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const agentArray = data.data.posts.edges || [];
            console.log('fetched number of agents', agentArray.length);
            setAgents(agentArray);
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
                            <option value="writing">Writing</option>
                            <option value="coding">Coding</option>
                            <option value="image">Image Generation</option>
                            <option value="analysis">Data Analysis</option>
                            <option value="search">Search</option>
                            <option value="video">Video</option>
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
                        <Button variant="primary" onClick={fetchAgents}>Refresh Data</Button>
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
                    {agents.map((item) => (
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
                                                onClick={() => alert(item.node.description)}
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
                    {JSON.stringify(agents, null, 2)}
                </pre>
            )}
        </Container>
    );
};

export default AgentList; 