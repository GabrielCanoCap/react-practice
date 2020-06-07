FROM node:12.16.1-alpine

WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
RUN ls /app/node_modules/.bin

CMD ["npm", "start"]
