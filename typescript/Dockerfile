FROM node:12-alpine as builder

WORKDIR /usr/src/app
COPY ./swarm-interactive-ui .
RUN npm install --pure-lockfile

CMD npm run start
