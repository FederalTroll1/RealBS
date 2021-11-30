# Pull base image from Docker Hub
FROM node:14.16.0-alpine3.10
# Set working directory for the dockerfile
WORKDIR /usr/app
# Install dependencies
COPY package*.json ./
RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy
# Copy app to the container
COPY . .

CMD ["npm","start"]