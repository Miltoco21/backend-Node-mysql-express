 CREATE DATABASE IF NOT EXISTS companydb;
 use company;
 CREATE TABLE empleados (
   id INT(11)NOT NULL AUTO_INCREMENT,
   nombre VARCHAR(255)DEFAULT NULL,
   salario INT(10)DEFAULT NULL,
   PRIMARY KEY(id)
 );

 INSERT INTO empleados VALUES
(1,'Carlos',5)

