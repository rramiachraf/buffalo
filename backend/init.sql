CREATE TYPE DEVICE as ENUM ('pc', 'playstation', 'xbox');

CREATE TYPE PLATFORM as ENUM('steam', 'origin', 'blizzard', 'uplay');

CREATE TYPE USER_ROLE as ENUM('customer', 'moderator', 'admin');

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    "firstName" VARCHAR(30) NOT NULL,
    "lastName" VARCHAR(30) NOT NULL,
    password VARCHAR(500) NOT NULL,
    role USER_ROLE NOT NULL DEFAULT 'customer',
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS games(
    id VARCHAR(25) UNIQUE PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL,
    device DEVICE NOT NULL,
    platform PLATFORM,
    poster TEXT,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS keys(
    id SERIAL PRIMARY KEY NOT NULL,
    key VARCHAR(255) UNIQUE NOT NULL,
    game VARCHAR(25) NOT NULL REFERENCES games(id),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY NOT NULL,
    "paymentIntent" VARCHAR(300) NOT NULL,
    "madeBy" INTEGER NOT NULL REFERENCES users(id),
    game VARCHAR(25) NOT NULL REFERENCES games(id),
    amount NUMERIC NOT NULL,
    key INTEGER NOT NULL REFERENCES keys(id),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
) WITH (OIDS = FALSE);

ALTER TABLE
    "session"
ADD
    CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");