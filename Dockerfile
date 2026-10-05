FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY src ./src
COPY tests ./tests

CMD ["npm", "test"]