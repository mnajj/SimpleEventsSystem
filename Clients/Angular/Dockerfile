# web app
FROM node:alpine3.14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm i
COPY . /app/
RUN npm run build --prod

# web server
FROM nginx:alpine
COPY --from=build /app/dist/simple-events-system /usr/share/nginx/html


# run -d -p 4200:80 --name eventssystem simpleeventssystem