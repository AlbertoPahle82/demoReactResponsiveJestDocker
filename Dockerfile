FROM node:18.2.0-alpine
WORKDIR /mnt
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]