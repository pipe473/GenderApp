FROM node:16.16.0 AS base

COPY [".", "/usr/local/app"]

WORKDIR /usr/local/app

RUN npm install

EXPOSE 4500

CMD ["npm", "run", "dev"]