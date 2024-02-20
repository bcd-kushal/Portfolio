FROM node:20-alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY dist/server.js ./

ENV PORT=3003

# ALL ENV HERE

EXPOSE 3003

CMD [ "npm", "start" ]
