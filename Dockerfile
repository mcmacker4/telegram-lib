FROM node:10.16.3

WORKDIR /bot

COPY package.json yarn.lock tsconfig.json /bot/
COPY test/ /bot/test
COPY src/ /bot/src

RUN yarn && yarn build

EXPOSE 443

CMD ["yarn", "start"]