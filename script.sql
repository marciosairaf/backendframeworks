CREATE DATABASE sistema;

CREATE TABLE users (
    CPF VARCHAR(11) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(14) NULL,
    senha VARCHAR (8) NULL,
    sexo VARCHAR(1),
    novidades BOOLEAN NULL
)