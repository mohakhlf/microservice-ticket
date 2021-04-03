FROM node:alpine

WORKDIR /app
COPY .npmrc .npmrc
COPY package.json .
RUN npm install --only=prod
RUN rm -rf .npmrc
COPY . .

CMD ["npm", "start"]