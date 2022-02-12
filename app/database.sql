CREATE DATABASE shippify_exam;

USE shippify_exam;

CREATE TABLE company (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    city INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    plan_type VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE driver (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    city INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    avatar_url VARCHAR(200),
    status VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_company FOREIGN KEY (company_id) REFERENCES company(id)
);

CREATE TABLE vehicle (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    plate VARCHAR(100) NOT NULL,
    model VARCHAR(100),
    type VARCHAR(20) NOT NULL,
    capacity VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_driver FOREIGN KEY (driver_id) REFERENCES driver(id)
);

