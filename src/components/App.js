/* eslint-disable  no-unused-vars */

import React, { useState, useEffect } from "react";
// import axios from "axios";

// import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import getForecast from "../requests/getForecast";
import "../styles/App.css";

function App() {
  // const { location, forecasts } = props;
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "Manchester",
    country: "UK",
  });
  const [selectedDate, setSelectedDate] = useState(0);
  // const [selectedDate, setSelectedDate] = useState(0);

  const [searchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  // const i = forecasts.findindex((item) => item.date === selectedDate.selectedDate); ????
  // let selectedForecast;
  // forecasts.map((forecast, index) => {
  //   if (forecast.date === selectedDate.selectedDate) {
  //     selectedForecast = index;
  //   }
  // });

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  // const getForecast = (city = "London") => {
  //   axios
  //     .get(`https://cmd-shift-weather-app.onrender.com/forecast?city=${city}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //       console.log('>>>>>>>>> getForecast done!!!')
  //     });
  // };

  // Similar to componentDidMount and componentDidUpdate:
  // fetch external request and response, then update all states
  useEffect(() => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  }, []);

  // let doForecastDetails;
  // if (selectedDate > 0) {
  //   doForecastDetails = <ForecastDetails forecast={selectedForecast} />
  // } else {
  //   doForecastDetails =  <div className="forecast-details" data-testid="forecast-details"></div>
  // }

  const handleCitySearch = () => {
    // should make another getForecast() request.
    // (example of endpoint with param: https://cmd-shift-weather-app.onrender.com/forecast?city=Leeds).
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string,
//       temperature: PropTypes.shape({
//         min: PropTypes.number,
//         max: PropTypes.number,
//       }),
//       humidity: PropTypes.number,
//       wind: PropTypes.shape({
//         speed: PropTypes.number,
//         direction: PropTypes.string,
//       }),
//     })
//   ).isRequired,
// };

export default App;
