FROM node:12.18.3-alpine

RUN apk update && apk upgrade
RUN apk add bash vim python py-pip util-linux

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

ADD . /app

RUN TARGET=production NODE_ENV=production yarn build

EXPOSE 3000

VOLUME ["/app/dist"]

CMD bash -c "yarn start"
