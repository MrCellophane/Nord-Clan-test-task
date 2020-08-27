FROM node:12.18.3-alpine

RUN apk update && apk upgrade
RUN apk add bash vim python py-pip

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

ADD . /app

RUN TARGET=production NODE_ENV=production yarn build

EXPOSE 3000

RUN mkdir -p /usr/share/nginx/html
RUN cp -rf /app/build/* /usr/share/nginx/html
VOLUME ["/usr/share/nginx/html"]

CMD bash -c "yarn start"