import React from "react";
import PropTypes from "prop-types";

import WeatherIcon from "react-icons-weather";

function dateOrdinal(d) {
  let subfix;
  if (d === "31" || d === "21" || d === "01") {
    subfix = "st";
  } else if (d === "22" || d === "02") {
    subfix = "nd";
  } else if (d === "23" || d === "03") {
    subfix = "rd";
  } else {
    subfix = "th";
  }
  if (d.charAt(0) === "0") {
    return d.charAt(1) + subfix;
  }
  return d + subfix;
}

function ForecastSummary(props) {
  const { date, temperature, description, icon } = props;
  const tempDate1 = new Date(date).toDateString(); // Mon Apr 30 2018
  const tempDate2 = tempDate1.split(" ");
  const formattedDate = `${tempDate2[0]} ${dateOrdinal(tempDate2[2])} ${
    tempDate2[1]
  }`; // Man 30th Apr
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

// <WeatherIcon name="owm" iconId={icon} flip="horizontal" rotate="90" />
// {icon}
