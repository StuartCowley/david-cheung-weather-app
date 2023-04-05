# Get weather forecast from weather-app

## The purpose of weather-app

- build React App with text input box and submit button
- build function to search weather forecast data with axios
- render received data: location details, 5 days forecast summaries and one day forecast details
- during build components, build jest files to test each components
- make spy test for axios method

## Screenshots of app

- desktop screen (day mode) to show all images

- <img src="screen\screen-desktop.png" height="200">

- desktop screen (night mode) to show all images

- <img src="screen\screen-desktop-night.png" height="200">

- mobile screen to show images

- <img src="screen\screen-mobile.png" height="200">

## App built with (React)

- simple app to have a single text box input
- using the input to search and get weather forecast data from weather api
- showing data into screen

## Testing utilities used (Jest, React Testing Library)

| Utilities      | From                     | Usage                                         |
| -------------- | ------------------------ | --------------------------------------------- |
| render, screen | "@testing-library/react" | to get screen by component                    |
| renderer       | "react-test-renderer"    | to generate snapshot for comparison next time |
| fireEvent      | "@testing-library/react" | to simulate event trigger on component        |
| waitFor        | "@testing-library/react" | await for a group of actions                  |
| axios          | "axios"                  | to apply spyOn test for axios api             |

## Package used

- Axios API: promise-based HTTP Client for node.js and the browser.
  [Link](https://axios-http.com/docs/intro)

## Instructions to run the app

- git clone https://github.com/DavidCheungTW/weather-app.git
- cd weather-app
- npm install
- npm start (use to test app)
- npm test (a: test all; q: quit test)

## Extra functions

- add css animation to components
- add mobile screen handle
- add day/night mode button
- add digital clock

## Author

David Cheung
