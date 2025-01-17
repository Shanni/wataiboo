# Use Node.js as base image
FROM node:22-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files
COPY . .

# Expose port 3000 (default React development port)
EXPOSE 3000

# Start the development server
CMD ["yarn", "start"]

