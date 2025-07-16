CREATE DATABASE sql_project;
USE sql_project;
CREATE TABLE employee1(
	eid INT PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    department VARCHAR(50) NOT NULL,
    phonenumber VARCHAR(50) NOT NULL,
    status BOOLEAN NOT NULL
);

CREATE TABLE salary(
	eid INT NOT NULL,
    salary VARCHAR(20) NOT NULL,
    date date NOT NULL,
    FOREIGN KEY (eid) REFERENCES employee(eid)
);

INSERT INTO employee1(eid, name, email, age, gender, department, phonenumber, status)
VALUES(1, "Dhruv Sakariya", "dhruv@gmail.com", 30, "Male", "Sales", "+911586542357", 1),
(2, "Bhakti Sakariya", "bhakti@gmail.com", 28, "Female", "Sales", "+912358613456", 1),
(3, "Swathi Makwana", "swathim@gmail.com", 25, "Female", "Marketing", "+911245613745", 0),
(4, "Samir Makwana", "samir@gmail.com", 29, "Male", "Sales", "+914560349562", 1),
(5, "Dharmesh Makwana", "dharmesh@gmail.com", 33, "Male", "HR", "+911569543267", 1),
(6, "Diyu Makwana", "diyu@gmail.com", 31, "Female", "HR", "+914856127646", 0),
(7, "Leo Das", "leo@gmail.com", 28, "Male", "Engineering", "+914568523456", 1),
(8, "Purva Kathad", "purva@gmail.com", 27, "Female", "Engineering", "+914015637813", 0),
(9, "Pihu Vaza", "pihu@gmail.com", 29, "Female", "Engineering", "+914286231456", 1),
(10, "Harpal Zala", "harpal@gmail.com", 28, "Male", "Sales", "+914964562123", 1);

INSERT INTO employee1(eid, name, email, age, gender, department, phonenumber, status)
VALUES(11, "Lucifer Sakariya", "lucifer@gmail.com", 30, "Male", "Sales", "+911586542357", 1);

INSERT INTO salary(eid, salary, date)
VALUES(1,"60000","2024-09-03");

INSERT INTO salary(eid, salary, date)
VALUES(2,"55000","2023-06-10"),
(3,"75000","2022-03-19"),
(4,"72000","2022-06-17"),
(5,"69000","2024-02-11"),
(6,"50000","2023-03-09"),
(7,"48000","2021-04-06"),
(8,"53000","2023-03-25"),
(9,"51000","2021-04-16"),
(10,"58000","2023-06-02");


SELECT MAX(salary) FROM salary;
SELECT MIN(salary) FROM salary;
SELECT AVG(salary) FROM salary;
SELECT SUM(salary) FROM salary;SELECT COUNT(salary) FROM salary;

SELECT * FROM employee1
WHERE name IN ("Dhruv Sakriya");

SELECT * FROM employee1
WHERE name IN ("Bhakti Sakariya");

SELECT * FROM employee1
WHERE name LIKE "d%";

SELECT * FROM employee1
WHERE name LIKE "%a";

SELECT * FROM employee1
WHERE name LIKE "%sa%";

SELECT * FROM employee1
WHERE name LIKE "_a%";

SELECT * FROM employee1
WHERE name LIKE "p_%";

SELECT * FROM employee1
WHERE name LIKE "s__%";

SElECT * FROM employee1
WHERE name LIKE "d%a";

SELECT employee1.name,salary.salary
FROM employee1
INNER JOIN salary ON employee1.eid = salary.eid;

SELECT employee1.name, salary.salary
FROM employee1
LEFT JOIN salary ON employee1.eid = salary.eid;

SELECT employee1.name, salary.salary
FROM employee1
RIGHT JOIN salary ON employee1.eid = salary.eid;

SElECT employee1.name, salary.salary
FROM employee1
CROSS JOIN salary;

SELECT * FROM salary 
WHERE salary=69000;

SELECT * FROM salary
WHERE salary>60000;

SELECT * FROM salary 
WHERE salary<55000;

SELECT * FROM salary
WHERE salary>=64000;

SELECT * FROM salary
WHERE salary<=50000;

SELECT * FROM salary 
WHERE salary!=50000;