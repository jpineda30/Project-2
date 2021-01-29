/* create database dentappointment_db;
drop database dentappointment_db;
USE dentappointment_db;

CREATE TABLE Patient (
	patient_id  int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(50),
    sex BOOLEAN,
	age INTEGER,
	previous_diseases VARCHAR(250),
	current_medication VARCHAR(250),
	allergies VARCHAR(250),   
	patient_observations VARCHAR(250)
);

CREATE TABLE Services (
	service_id  int AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    service_name varchar(50) NOT NULL,
    service_cost DECIMAL
);
 */

INSERT INTO cats (name) VALUES ('Molly');
INSERT INTO cats (name) VALUES ('Charlie');
INSERT INTO cats (name, sleepy) VALUES ('Poppy', true);
INSERT INTO cats (name, sleepy) VALUES ('Oscar', true);
INSERT INTO cats (name, sleepy) VALUES ('Smudge', true);
INSERT INTO cats (name) VALUES ('Daisy');

INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES ("Rocio", "Madrigal", "rocio@mimail.com",true,23,"none","none","denied", "nervious patient");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Pedro","Amezola", "pedroA@mimail.com",false, 69,"arterial hypertension","metropolol 1 per day","denied", "cooperative patient");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Jorge","Camacho","camcho@mimail.com", false,42,"diabetes", "metformina 2 per dany", "dust", "trouble patiente");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Karina","Ruiz", "ruizK@mimail.com",true, 39, "none", "none", "denied", "patient with another treatment and physician");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Ulices","Blazquez", "ulibla@hotmail.com",false, 34, "none", "node", "denied" "patient with TDA");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Jesus","Ramirez","ramije@sumail.com", false, 78, "cancer","chemotherapy", "nuts", "intolerant to pain");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Ricardo","Treviño", "rickix@sumail.com", false, 40, "none", "none", "denied", "problematic", "non profit patient");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Alberto","Mendoza", "betomen@fakemail.com",false, 39,"none", "none", "denied", "nervous patient");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Emilia","Del Valle", "mily@fakemail.com",true, 9, "none", "none", "dust", "nervous patient");
INSERT INTO Patient (first_name, last_name , email, sex,
age, previous_diseases, current_medication, allergies, patient_observations)
VALUES	("Oscar","Mino", "minino@fakemail.com", false, 7, "none", "none", "penicillin", "cooperative patient");

        
        
INSERT INTO Services (service_name, service_cost)
VALUES("Clinical File", 300);
INSERT INTO Services (service_name, service_cost)
VALUES("X-Rays", 800);
INSERT INTO Services (service_name, service_cost)
VALUES("Dental Prophylaxis", 600);
INSERT INTO Services (service_name, service_cost)
VALUES("Resin dental filling", 1000);     
INSERT INTO Services (service_name, service_cost)
VALUES("Dental Crown", 2000);
INSERT INTO Services (service_name, service_cost)
VALUES("Dental Implants", 15000);
INSERT INTO Services (service_name, service_cost)
VALUES("Wisdom Teeth removal surgery", 3000);
INSERT INTO Services (service_name, service_cost)
VALUES("Dental Bridge", 8000);
INSERT INTO Services (service_name, service_cost)
VALUES("Pulpotomy", 1200);
INSERT INTO Services (service_name, service_cost)
VALUES("Root Canal treatments", 5000);
INSERT INTO Services (service_name, service_cost)
VALUES("Veneers", 7000);
INSERT INTO Services (service_name, service_cost)
VALUES("Oral surgery", 8000);
INSERT INTO Services (service_name, service_cost)
VALUES("Complete Dentures", 10000);




/* SELECT * FROM Services;
SELECT * FROM Patient; */