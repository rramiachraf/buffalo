FROM node:14

WORKDIR /client

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV REACT_APP_API_URL https://localhost/api
ENV REACT_APP_STRIPE_PUB_KEY pk_test_51HUa21F73jDaSyLPzBj6fuMmEV0OwGZ0UyQ5wmooXNjjfLonZtctoVzte0VUj4HgfrvNlA1o07BpFx7xnB7zZhSk00oE2xNo5B

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "serve" ]