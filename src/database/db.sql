CREATE DATABASE IF NOT EXISTS petsqrcode;

USE petsqrcode;

CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    code VARCHAR(50) NOT NULL,
    url VARCHAR(50) NOT NULL
);

SHOW TABLES;

DESCRIBE users;