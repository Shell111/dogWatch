CREATE DATABASE dogwatch;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT,
  dog_name TEXT,
  energy_level TEXT
);

CREATE TABLE parks(
  id SERIAL PRIMARY KEY,
  name TEXT,
  address TEXT,
  lat TEXT,
  lng TEXT
);



