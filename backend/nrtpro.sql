CREATE DATABASE nrtpro;

USE nrtpro;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  user_password VARCHAR(255) NOT NULL,
  account_type ENUM('personal','business'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name_review VARCHAR(100),
  rating INT,
  message_review TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, phone, password, account_type)
VALUES (?, ?, ?, ?);

INSERT INTO reviews (name_review, rating, message_review)
VALUES (?, ?, ?, ?);

SELECT * FROM users 
WHERE username = ?;

SELECT * FROM reviews 
WHERE username = ?;

UPDATE reviews
SET message = ?, rating = ?
WHERE id = ?;

DELETE FROM reviews WHERE id = ?;