# contact-be
An Express JS Back end API, using [MongoDB](https://www.mongodb.com/) as the database, [ExpressJS](https://expressjs.com/) as the api platform. using the [Mongoose](https://mongoosejs.com/docs/) ORM

## Get Started
- clone this repo `git clone https://github.com/tomtarpeyyt/contact-be`
- enter the directory `cd contact-be`
- install dependencies `npm i`
- run dev server `npm run dev`

## Plan
- [Whimsical Contact Application](https://whimsical.com/contacts-app-8AU3ccAZFjvg5AXEWMUqjT)

## User Endpoints
- [x] **/api/users/register** `POST`
- [ ] **/api/users/login** `POST`

## Contact Endpoints
**TBD**

## TEST Endpoints with CURL in Linux
- **/api/users/register** `curl -X POST http://localhost:5000/api/users/register -H 'Content-Type: application/json' -d '{"username": "testuser1", "email": "testemail1@gmail.com", "password": "password123"}'`

## TEST Endpoints with CURL.exe in Windows
- **/api/users/register** `curl.exe -X POST -H "Content-Type: application/json" -d '{\"username\": \"testuser11\", \"email\": \"testemail111@gmail.com\", \"password\": \"password123\"}'`

