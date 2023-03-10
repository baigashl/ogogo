FROM node:16-alpine AS deps

WORKDIR /app

COPY ./ ./

RUN yarn

ENV NODE_ENV production

RUN yarn build

CMD npm run dev