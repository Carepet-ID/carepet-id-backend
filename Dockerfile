FROM node:22.2.0
WORKDIR /usr/src/app

ENV PORT=8000

COPY . . 
RUN npm install
COPY package*.json ./
CMD [ "npm", "run", "start"]