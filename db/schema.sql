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

ALTER TABLE users
ADD COLUMN park_id INTEGER;

-- Hard coding lat and lng
INSERT INTO parks (name, address, lat, lng) VALUES ('Shore Reserve', '223 Reynard St, Pascoe Vale South', '-37.75473954469865', '144.9400667775689');

INSERT INTO parks (name, address, lat, lng) VALUES ('Jacobs Reserve', 'Brunswick West', '-37.756972741', '144.94606131');

INSERT INTO parks (name, address, lat, lng) VALUES ('Dunstan Reserve', '24 Peacock St, Brunswick West', '-37.75490494072', '144.9402438');
