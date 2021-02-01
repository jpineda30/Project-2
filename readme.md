# <img src="./public/design/pngwing.com.png" width="50"/> DentApp - Appointment Managing System 

---
<p>&nbsp;</p>

1. [Description and User's Story](#description-and-user's-story)
2. [Functionalities](#functionalities)
3. [List of Dependencies and Libraries](#list-of-dependencies-and-libraries) 
4. [Installation](#installation)
5. [How to Set Profiles and Appointments](#how-to-set-user-profiles-and-appointments)
6. [Demo](#demo)
7. [Licenses](#licenses)
8. [Support and Contributions](#support-and-contributions)
9. [Future Development](#future-development)
10. [Credits and Acknowledgements](#credits-and-acknowledgements) 

<p>&nbsp;</p>

---

## Description and User's Story 

<p>&nbsp;</p>


``
AS a dentistry specialist,
I NEED an appointment management system,
that ALLOWS me to CREATE a user that is able to 
CREATE and EDIT new patient records and, 
SET appointments for different services in a calendar.  
``

<p>&nbsp;</p>

**DentApp** is a web application that can help dentists and other medical specialists install a simple server-based appointment system for their clinics or private offices. The system allows for simple management of their patients' appointments and to track medical services and treatments through verified users. 

<p>&nbsp;</p>

---

## Functionalities

Currently, the system offers the following *features*:

* Users can create their own single user profile (first and last name, email, and password) and log in into the system.
* Logged in users (email and password) can then create a new patient profile and input their personal information and clinical history (first and last name, email, phone number; sex, age, previous diseases; current medication, allergies, and general observations).
* After setting the profile of a patient, the user can create an appointment (date, start and end time of appointment, and patient's name) and set a service treatment for that patient.
* The calendar tool allows users to filter appointments by date.
* Users can also add service treatments in a separate section. They can add a new service by adding the information and costs of said service. 
* The system currently allows editing information of patients, services, and appointments. 

<p>&nbsp;</p>

---

## List of Dependencies and Libraries

The application was designed and programmed through a combination of *JavaScript*, *pure HTML*, *pure CSS*, one third-party *CSS framework*, and several *Node.js CLI* Dependencies and *NPM* libraries. The application is fully functional and hosted in a *Heroku* external server.

The Full-Stack breakdown of the application is as follows:

* [Bulma](https://bulma.io/) is an open-source free CSS framework for HTML. The framework was used in the overall design of the website and its different sections.

* [NodeJS](https://nodejs.org/en/) is one of the most widely used local server environments for JavaScript programming. NodeJS was used for local server-testing and to handle server and database connections.

* [Express](https://www.npmjs.com/package/express) is a NodeJS-based npm web framework library. It was integrated into JavaScript in order to handle HTTP requests from the database schemas.

* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) Handlebars is a npm Express extension library used for web templating. In this application, Handlebars was used to integrate Bulma's HTML and CSS models in loading the different sections of the Front-End UI.  

* Oracle's [MySQL](https://www.mysql.com/) and [MySQL2](https://www.npmjs.com/package/mysql2) are one of the most widely used database services in Full-Stack web development. We used MySQL's workbench to develop the database that serves as the basis for the management system and the automatic creation of tables and ID elements. MySQL2 is the improved npm library version of MySQL and it can handle several new dependencies that its predecessor couldn't.  

* [Sequelize](https://www.npmjs.com/package/sequelize) is a npm library tool that uses a promise-based semantic structure, which simplifies database processing and the creation of modules for configuration and back-end scripting. Sequelize handles all database promises in the application.

* [Passport](https://www.npmjs.com/package/passport) and [Passport-Local](https://www.npmjs.com/package/passport-local) are Express-based library tools to integrate user authentication into script frameworks. Passport handles authentication, while Passport-Local focuses on authenticating events using an email and a password. These two dependencies are the basis for the Login/SignUp features of this application. 

* [Express-Session](https://www.npmjs.com/package/express-session) is an Express extension library used for parsing of cookies and URL parameters. This allows for hiding Back-End data from the Front-End, for example sensitive information, such as, user data and passwords. It sets an ID for a client in the database and manages requests from the server linked to this ID. This application uses Sessions as middleware step in the authentication process.

* [BcryptJS](https://www.npmjs.com/package/bcrypt) is an extension library that, when implemented, automatically hashes/encrypts passwords in a database. This application integrates Bcrypt in the authentication process and sends a hashed/encrypted password when a new user is registered to the database. 

* [Moment.js](https://www.npmjs.com/package/bcrypt) is a basic date-time library tool that parses and generates time data into JavaScript. Moment.js was used in this application to generate the basic Calendar tool in the Appointments section.

<p>&nbsp;</p>

---

## Installation

If you are interested in running **DentApp** locally, you can follow these steps:

1. Clone or download the repo.

2. Using your terminal, navigate into the main repository and run `npm install` in order to install all npm and NodeJS dependencies and libraries (you may also need to install MySQL or change the database dialect of the schema file).

3. Open your preferred code editor, navigate into the configuration folder and add your local server credentials in the development object (username, password, and local host).

4. After everything is set, you can then run the application `server.js` using Node in your terminal. After, navigate to your localhost connection on your preferred web browser. 

Or, alternatively, you can use the demo page we deployed on a [Heroku](https://www.heroku.com/platform) external server. You can access the functional app [here](https://protected-sands-23388.herokuapp.com/). 

<p>&nbsp;</p>

---

## How to Set User Profiles and Appointments

1. Navigate to main page `localhost:[yourlocalhost]/` and click **Profile** on the left navigation bar.

2. The site will send you to the User creation page. Type your info and click the **Sign Up** button.
<p>&nbsp;</p> 
<img src="./views/images/user-creation.png" width="300"/>
<p>&nbsp;</p>

3. If the user was created successfully, the page will then send you to the **Login** page. Input your credentials and click the **Login** button.

<p>&nbsp;</p> 
<img src="./views/images/login-info.png" width="250"/>
<p>&nbsp;</p>

4. After logging in, you can create a patient by clicking **Patients** on the navigation bar. 

5. In the **Patients** page, you can add a new patient by clicking the **Create** button.

6. Fill in the form all the patient's information and clinical history. Then, click the **Save** button. 
<p>&nbsp;</p> 
<img src="./views/images/create-patient.png" width="300"/>
<p>&nbsp;</p> 

7. You can always view, edit, or delete a patient using the buttons on the right side.
<p>&nbsp;</p> 
<img src="./views/images/edit-buttons.png" width="350"/>
<p>&nbsp;</p> 

8. You can set an appointment in the **Appointments** section. There, select a date using the dropdown calendar tool, then click the **Create** button to set an appointment for that date.
<p>&nbsp;</p> 
<img src="./views/images/appointment.png" width="350"/>
<p>&nbsp;</p> 

9. In the form, select start and end times for the appointment, and type the name of the patient and the service provided. Don't forget to click **Save** after you're done.
<p>&nbsp;</p> 
<img src="./views/images/appointment-set.png" width="350"/>
<p>&nbsp;</p> 

10. By selecting different dates on the calendar, you can filter the appointments for each date. Remember that you can also edit an appointment's information (time, service and/or name of the patient).

11. The **Services** page has the same functionalities as the **Patients**/**Appointments** section. The main difference is that you can add a price for the service provided. 
<p>&nbsp;</p> 
<img src="./views/images/services.png" width="400"/>
<p>&nbsp;</p> 

---

## Demo

The following Gif provides a demonstration of **DentApp's** functionalities:

![App Demo](./views/images/deantAPPointment_2.gif)

<p>&nbsp;</p> 

---

## Licenses

<p>&nbsp;</p>

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

<p>&nbsp;</p>

---

## Support and Contributions

This project is not currently looking for contributors.
If you're experiencing any issues with the code, feel free to contact us through GitHub or raise an [issue](https://github.com/jpineda30/Project-2/issues) in the original repository. 

<p>&nbsp;</p>

---

## Future Development

These are some improved functionalities we want to add to the project in the near future:

* Integrate appointment management through each specific user. As of right now, all users are integrated into a global database that shares appointments, services, and patients. The goal is for each user to display their own patients and appointments.

* Only one service per patient can be created. In the future, we would like to add more than one service to each patient.

* Integrate files for each patient, showing their service/treatment history. In addition, we want to add some kind of documentation visualizer so users can access patients' documents (for example, reports or X-Ray charts).

* Create a payment and balance system for appointments showing patients' current or pending payments and total balance owed. 

* General improvement to user's functionalities and interface: a status showing what user is logged in, and a functionality to edit or add users' information to the profile page.

* Integrate medical inventory to services: costs of materials needed for treatments, status of available materials, and capacity to order/reorder more inventory. 

* Integrate an email/calendar system for patients: send email remainders to patients about upcoming appointments and develop a connection to a calendar API that can help patients integrate their appointments to their schedules. 

* Create a separate User system for clients, so they can also access their information, balance account, and appointments online. 

<p>&nbsp;</p>

---

## Credits and Acknowledgements

This project was conceived, developed, and coded by:

* **Alhelí Miranda Campos** [Github: AlheliMi](https://github.com/AlheliMi)
* **José Pineda Esquer** [Github: jpineda30](https://github.com/jpineda30)
* **Mario N. Castro Villarreal** [Github: mncastro](https://github.com/mncastro)

We would like to give special thanks to our Full-Stack Web Development Bootcamp instructors, Diana (main instructor) and Fernanda (TA), for their invaluable help in fixing the connection models and the Passport authentication implementation.











































