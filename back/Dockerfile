FROM node:12.16.1-alpine

WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH

# Install tool to check postgres docker availability (psql)
RUN apk update && apk add postgresql-client

CMD ["sh", "./wait-for-postgres.sh", "db", "npm", "run", "dev"]
