# Nuxt Test Project
This project is my preparation for the first project of our not yet fully formed web studio.

## Build Setup

### With docker

```bash
$ docker-compose up
```

### Without docker

Change in /api/team.js and in /db/insertDB from 'mongodb://mongo:27017' to 'mongodb://localhost:27017'.
And change in /store/teams.js from 'http://localhost/api/team/index' to '/api/team/index' or 'http://localhost:3000/api/team/index'.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Site
(Later there will be a link to the site)

## Skills
- Nuxt
- Vue
- Vuex
- Mongo
- Docker & Docker-compose
