create database dentappointment_db;


CREATE TABLE Patient (
	patient_id  int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(50),
    sex BOOLEAN,
	AGE INTEGER,
	previous_diseases VARCHAR(250),
	current_medication VARCHAR(250),
	allergies VARCHAR(250),
	patient_observations VARCHAR(250)
);