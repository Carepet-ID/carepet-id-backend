FROM node:22.2.0
WORKDIR /usr/src/app

ENV PORT=8000
ENV NODE_ENV='your_env'
ENV JWT_SECRET='your_secret_key'
ENV JWT_EXPIRATION='your_expiration_token'
ENV MODEL_URL='your_model_url'

COPY . . 
RUN npm install
COPY package*.json ./
CMD [ "npm", "run", "start"]