import { request, gql } from 'graphql-request';

const PRODUCT_HUNT_API = 'https://api.producthunt.com/v2/api/graphql';

class ProductHuntService {
    constructor() {
        this.headers = {
            'Authorization': `Bearer ${process.env.REACT_APP_PRODUCT_HUNT_TOKEN}`,
            'Content-Type': 'application/json',
        };
    }

    async searchAITools(limit = 20, page = 1) {
        const query = gql`
            query MyQuery {
                posts(order: RANKING, topic: "268") {
                    totalCount
                    edges {
                        node {
                            id
                            createdAt
                            name
                            description
                            featuredAt
                            tagline
                            topics {
                                totalCount
                                nodes {
                                    id
                                }
                                edges {
                                    node {
                                        name
                                    }
                                }
                            }
                            url
                            votesCount
                            website
                            media {
                                videoUrl
                                type
                                url
                            }
                        }
                    }
                }
            }
        `;

        try {
            const data = await request(PRODUCT_HUNT_API, query, {}, this.headers);
            return data;
        } catch (error) {
            console.error('Error fetching AI tools:', error);
            throw error;
        }
    }
}

export const productHuntService = new ProductHuntService();