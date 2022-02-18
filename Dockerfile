
FROM node:current-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9000

CMD ["npm", "run", "start"]
