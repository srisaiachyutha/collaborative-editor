FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm ci

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 3000

CMD ["npm", "run", "start"]