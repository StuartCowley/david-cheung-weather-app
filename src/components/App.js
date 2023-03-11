import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App(props) {
  const { location } = props;
  const { forecasts } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummary
        date={forecasts[0].date}
        temperature={forecasts[0].temperature}
        description={forecasts[0].description}
        icon={forecasts[0].icon}
      />
      <ForecastSummary
        date={forecasts[1].date}
        temperature={forecasts[1].temperature}
        description={forecasts[1].description}
        icon={forecasts[1].icon}
      />
      <ForecastSummary
        date={forecasts[2].date}
        temperature={forecasts[2].temperature}
        description={forecasts[2].description}
        icon={forecasts[2].icon}
      />
      <ForecastSummary
        date={forecasts[3].date}
        temperature={forecasts[3].temperature}
        description={forecasts[3].description}
        icon={forecasts[3].icon}
      />
      <ForecastSummary
        date={forecasts[4].date}
        temperature={forecasts[4].temperature}
        description={forecasts[4].description}
        icon={forecasts[4].icon}
      />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
