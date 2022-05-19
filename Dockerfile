# base image
FROM node:16.15-alpine



# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN yarn install
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent


WORKDIR /app
CMD ["yarn", "start"]