# Weather Application - React / Redux 

This repository contains all the files for the Capstone project of the [Udacity - Senior Web Developer Nanodegree - By Google](https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802) course with [Udacity](https://www.udacity.com/). 

## Project Criteria
This application must meet the following criteria:

- Responsive - App is equally functional on mobile and dektop.
- Inputs - All form inputs have appropriate types, labels, placeholders and validators.
- Offline functionality - Application must function offline.
- Accessibility - All images have alternative text, focus is appropriately managed, elements are semantically used appropriately.
- Components - If components are used, they are self-contained units of functionality and declaratively configurable.
- Home Screen Installable - The application is installable to user’s home screen.
- Native Features - Application uses native features, like push notifications, Bluetooth, geolocation, as appropriate for the application.

## Demo

![desktop image](https://onlinedevelopers.ca/udacity/weather-app/img/read-me/proj5-collage.jpg)

[To view the application live click here] (http://onlinedevelopers.ca/udacity/weather-app/)

To download and install, please follow the instructions below.

## Installation

Clone the repository from: 
```
$ git clone https://github.com/escobard/udacity-srwebdev-project5-capstone.git
```

Install NPM dependencies:
```
$ npm install
```

## Usage

To run this application locally for development, use the following commands:

```
$ npm start
```

To publish, minimize, and compile components for production use:

```
$ gulp create-bundle
$ gulp build
```

## Most Recent Update - v0.98
- offline functionality completed.
- distribution bundling completed with gulp.
- cleaned up file structure, all relevant app content in /src.
- removed obsolete console.logs, added relevant user console.logs.
- added validation to search form.

## To Do's
- Revise mobile dimensions.
- Add city names to titles again; need to reverse-eng Geocode API within a render loop.
- Convert temperature's array from Farenheit to Celcius
- Revise screen reader and keyboard-only accessibility .
- Push all async requested data into indexDB for offline usability.
- Add weather forecast icons to app forecast display.
- Streamline gulp build process to work with a single command

## Libraries, Frameworks, APIs

[React](https://facebook.github.io/react/)

[Redux] (http://redux.js.org/docs/introduction/)

[ReduxSimpleStarter] (https://github.com/StephenGrider/ReduxSimpleStarter)

[Material Design for Bootstrap] (https://mdbootstrap.com/material-design-for-bootstrap/)

[FLATICON - for the favicon] (http://www.flaticon.com/)

[Dark Sky API] (https://darksky.net/)

[Google Maps] (https://www.google.ca/maps)

[Geolocation] (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)

##  Tutorials

[Udemy - Modern React with Redux] (https://www.udemy.com/react-redux/)

[Udacity - Senior Web Developer Nanodegree] (https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802)

## Contribution

Feel free to contribute to this repository. All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License
As of February 11th, 2017, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).
