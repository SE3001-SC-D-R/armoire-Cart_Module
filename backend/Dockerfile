#  Dockerfile for Node Express Backend

FROM node:14

# Create App Directory
WORKDIR /index

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]