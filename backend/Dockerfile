FROM node:14

WORKDIR /server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn build

ENV PORT 4000

EXPOSE 4000

CMD [ "yarn", "start" ]