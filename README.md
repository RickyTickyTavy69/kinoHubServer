## KinoHub App. Full Stack Application for a ticket booking system of a cinema.
## This is the back-end side.
## I used the following technologies for the back-end application:

![NEST](https://img.shields.io/badge/-NEST-FFDA1E?style=plastic&logo=nestjs)
![TypeScript](https://img.shields.io/badge/-TypeScript-FFDA1E?style=plastic&logo=typescript)
![MongoDb](https://img.shields.io/badge/-MongoDb-FFDA1E?style=plastic&logo=mongodb)
![ModeMailer](https://img.shields.io/badge/-nodemailer-FFDA1E?style=plastic&logo=nodemailer)

## please, use the following link to see the application https://rickytickytavy69.github.io/KinoHubApp/
## bitte, benutzen Sie diesen Link um die Applikation zu sehen https://rickytickytavy69.github.io/KinoHubApp/


### Functionality:

#### The back end application is built with Nest CLI (nest new) and the controllers, services and modules were also 
#### created via nest CLI. The application contains two folders with feature modules, services and controllers. And the
#### main module, service and controller.

#### The bookings folder is responsible for the bookings the user is making. The Booking Module has a Mongoose Module
#### With a Schema which is used to save data in the mongo Database. The Booking Controller has two async methods,
#### One is decorated with a @Post query decorator and another with @Get query decorator, for create a booking and for
#### getting all the bookings. The service makes the queries in the Database.
#### Also, I have created a DTO to type the data which comes from the front end side.

#### The Dashboard folder has a similar functionality. There are three async methods in the dashboard controller class:
#### 1) getting the current Dashboard data. 2) Update the dashboard data. 3) Reset all Dashboard data.

#### The Dashboard is actually made for the owner of the cinema, so he can reset all the bookings and also, he can see all
#### the bookings the users have made via the website. He can also see his turnover.

#### I have added the cors package and the app.enableCors() function in the main.ts file to allow the access from any domain since my
#### front-end is deployed on GitHub Pages by now. 

#### Also, I have used nodemailer package for sending emails via gmail smtp server.