FROM node:14.3.0-alpine
WORKDIR /app
COPY . ./
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "start"]