FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app
COPY . .
RUN npm install && npm cache clean --force
RUN npm run build

EXPOSE 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

CMD  node /app/db/insertDB.js && npm run start 