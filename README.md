### HUSTLE HUB

## Project Description

"Revolutionizing the blue-collar industry in Kenya with a centralized web app connecting handymen to clients."

Our project is a blue-collar web app designed to connect skilled handymen with potential clients in Kenya. By providing a centralized platform for booking and scheduling services, along with a verification process to ensure the trustworthiness of handymen, our app addresses the problem of unemployment and underemployment among handymen while also providing a convenient and reliable service for clients. 

## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Schema](#schema)

## Technologies

1. React
2. Next JS
3. Tailwind CSS
4. Mongo Db

## SETUP
1. Clone the repo 
```bash
git clone  https://github.com/DevSheila/HustleHubClient
```
2. Install dependencies
```npm install```

3. Set your keys on the  next.cofig.js file

```bash
 env: {
  
    NEXTAUTH_SECRET: "",
    MONGO_URL:"",
    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",
    GITHUB_ID: "",
    GITHUB_SECRET: "",
    GOOGLE_MAPS_API_KEY: "",
    TRIP_ADVISOR_API_KEY:""
  }
```
3. Run application on development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## FEATURES
1. Authentication: The MVP will include a robust authentication system that ensures the security and privacy of user data. Users will be required to sign up for an account with their email address or phone number, and they will need to verify their identity through a secure verification process.
 
2. Booking Process: The MVP will include a simple and intuitive booking process that enables clients to select the work category they require, schedule the appointment, and appoint a handyman. The booking process will include the following steps:
 
3. Select Work Category: Users will be able to select the specific work category they require from a list of options, such as plumbing, electrical, carpentry, etc.
Schedule: Users will be able to select the date and time that they require the service, and the system will show them the available time slots.
Appoint Handyman: Users will be presented with a list of verified handymen who match their requirements, and they will be able to choose the one they want to hire based on their profile, experience, and ratings.

## Schema

Link to schema :https://dbdiagram.io/d/642313385758ac5f1724d7a8

![Alt text](https://github.com/DevSheila/blue-collar-web-app/blob/main/public/screenshots/Schema1.png "Schema Diagram")
## Mockups

Link to schema :
1. Client mockup https://www.figma.com/file/8TG8I0wWHc5zBlFjkXD3BN/MVP-HANDYMAN?type=design&t=rd1ZlCSYsY1Wibkm-0

## 👨🏼‍💻 Contributors
It was really fun to work with these awesome geeks to get the job done:

* [Sheila Sharon](https://github.com/DevSheila)
* [Ken Komu](https://github.com/kenkomu)
* [Dennis Kemboi](https://github.com/denniskemboi9 )
* [Festus Elias ](https://github.com/Kogalloh043)


## Contributions Welcome
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](#)

If you find any bug in the code or have any improvements in mind then feel free to generate a pull request.

## Issues
[![GitHub Issues](https://img.shields.io/github/issues/DevSheila/blue-collar-web-app.svg?style=flat&label=Issues&maxAge=2592000)](https://www.github.com/DevSheila/blue-collar-web-app)

If you face any issue, you can create a new issue in the Issues Tab and we  will be glad to help you out.
## License
[![MIT](https://img.shields.io/cocoapods/l/AFNetworking.svg?style=style&label=License&maxAge=2592000)](../master/LICENSE)



