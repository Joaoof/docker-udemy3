FROM node

WORKDIR /app

COPY package*.json .

RUN npm installl

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]