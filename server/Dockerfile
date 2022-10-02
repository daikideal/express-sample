FROM node:18

WORKDIR /usr/src/server

COPY ./package.json ./
RUN npm install

RUN npm run server
