FROM node:current-slim
WORKDIR /usr/src/basho-app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
