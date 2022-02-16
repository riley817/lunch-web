FROM node:16-alpine3.11

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
