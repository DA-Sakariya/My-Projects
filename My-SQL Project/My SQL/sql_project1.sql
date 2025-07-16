CREATE DATABASE Student;
USE Student;
CREATE TABLE student(
	sid INT PRIMARY KEY UNIQUE NOT NULL,
    fname VARCHAR(100) NOT NULL ,
    lname VARCHAR(100) NOT NULL ,
    roll INT UNIQUE NOT NULL ,
    class VARCHAR(20) NOT NULL ,
    email VARCHAR(50) NOT NULL ,
    age INT NOT NULL CHECK (age >= 16),
    gender VARCHAR(20) NOT NULL ,
    PhoneNumber VARCHAR(20) NOT NULL ,
    department VARCHAR(50) NOT NULL,
    Fees INT NOT NULL UNIQUE
);
INSERT INTO student(sid, fname, lname, roll, class, email, age, gender, PhoneNumber, department, Fees)
VALUES(1, "Dhruv", "Sakariya", 7123, "DIV-C", "dhruv@gmail.com", 20, "Male", "+916556452315", "Computer", 30000),
(2, "Leo", "Das", 7122, "DIV-B", "leo@gamil.com", 16, "Male", "+914568523456", "Electric", 25000),
(3, "Swathi", "Makwana", 6021, "DIV-D", "swathim@gmail.com", 18, "Female", "+911245613745", "CA", 20000),
(4, "Vikram", "Das", 7031, "DIV-A", "vikram@gmail.com", 19, "Male", "+91456273456", "IC", 23000),
(5, "Utsav", "Chudasma", 4513, "DIV-C", "uchi@gamil.com", 17, "Male", "+911523657531", "IC", 22000),
(6, "Pihu", "Vaza", 4562, "DIV-B", "pihu@gmail.com", 19, "Female", "+914286231456", "CE", 22090),
(7, "Diyu", "Makwana", 7129, "DIV-C", "diyu@gmail.com", 19, "Female", "+914856127646", "CE", 21000),
(8, "Samir", "Makwana", 7133, "DIV-C", "Samir@gemail.com", 19, "Male", "+914560349562", "CE", 23010),
(9, "Purva", "Kathad", 7093, "DIV-C", "purva@gmail.com", 19, "Female", "+914015637813", "CE", 22160),
(10, "Legend", "Sakariya", 7012, "DIV-C", "Legend@gamil.com", 20, "Male", "+914661256315", "CE", 39000),
(11, "Harpal", "Zala", 7120, "DIV-B", "harpal@gmail.com", 19, "Male", "+914964562123", "CE", 19333),
(12, "Darshan", "Jethva", 7121, "DIV-B", "darshan@gmail.com", 19, "Male", "+914862315623", "IC", 18632),
(13, "Lucifer", "Sakariya", 7562, "DIV-B", "lucifer@gamil.com", 20, "Male", "+914316523684", "CE", 45862),
(14, "Yash", "Dodiya", 7561, "DIV-C", "yash@gmail.com", 21, "Male", "+917561234892", "CE", 43691),
(15, "Dharmesh", "Makwana", 5623, "DIV-B", "dharmesh@gmail.com",24, "Male", "+911569543267", "CE", 46231);

SELECT*FROM student;

UPDATE student
SET age=21,roll=7213,Fees=29600
WHERE sid=1;

UPDATE student
SET age=20,roll=1651,Fees=45230
WHERE sid=2;

UPDATE student
SET age=19,roll=6022,Fees=16200
WHERE sid=3;

UPDATE student
SET age=20,roll=7013,Fees=23030
WHERE sid=4;

UPDATE student
SET age=18,roll=4533,Fees=22163
WHERE sid=5;

UPDATE student
SET age=20,roll=4526,Fees=22320
WHERE sid=6;

UPDATE student
SET age=20,roll=7219,Fees=21220
WHERE sid=7;

UPDATE student
SET age=20,roll=7313,Fees=23020
WHERE sid=8;

UPDATE student
SET age=20,roll=7193,Fees=22131
WHERE sid=9;

UPDATE student
SET age=21,roll=7031,Fees=39936
WHERE sid=10;

UPDATE student
SET age=20,roll=7210,Fees=19330
WHERE sid=11;

UPDATE student
SET age=20,roll=7211,Fees=18663
WHERE sid=12;

UPDATE student
SET age=21,roll=7652,Fees=45863
WHERE sid=13;

UPDATE student
SET age=22,roll=7651,Fees=43690
WHERE sid=14;

UPDATE student
SET age=25,roll=5263,Fees=46200
WHERE sid=15;

DELETE FROM student
ORDER BY sid DESC
LIMIT 5;

SELECT*FROM student;

SELECT sid AS id, fname AS name FROM student;

SELECT * FROM student WHERE class="DIV-C" AND department="CE";

SELECT * FROM student WHERE gender="Female" OR department="IC";

SELECT * FROM student WHERE NOT gender="Male";

SHOW DATABASES;

SELECT fname AS name FROM student
ORDER BY fname ASC
LIMIT 5;

SELECT fname AS name FROM student
ORDER BY fname DESC
LIMIT 5;

SElECT * FROM student 
LIMIT 5;