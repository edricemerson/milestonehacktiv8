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
VALUES ("Edric", 0811839121, 112233, "business");

INSERT INTO reviews (name_review, rating, message_review)
VALUES ("Edric", 5, "This company is trustable");

SELECT * FROM users ;
SELECT * FROM reviews;

SELECT * FROM users 
WHERE account_type = "personal";

SELECT * FROM reviews 
WHERE rating = 1;

UPDATE reviews
SET username = "Anonymous" WHERE username = --inapproptiate names

DELETE FROM reviews WHERE rating = 1;