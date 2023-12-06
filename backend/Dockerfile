FROM node:21 as build
COPY ./package*.json ./
RUN npm ci
COPY . .
#RUN npm run build
EXPOSE 3000
CMD npm run serve