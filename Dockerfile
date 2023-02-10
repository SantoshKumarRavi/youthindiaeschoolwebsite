FROM nikolaik/python-nodejs:latest as build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx","-g","daemon off;"]