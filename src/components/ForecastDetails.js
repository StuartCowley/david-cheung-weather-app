import React from "react";
import PropTypes from "prop-types";
import "../styles/forecast-details.css";

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

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  const tempDate1 = new Date(date).toDateString();
  const tempDate2 = tempDate1.split(" ");
  const formattedDate = `${tempDate2[0]} ${dateOrdinal(tempDate2[2])} ${
    tempDate2[1]
  }`;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>

      <div className="forecast-details__temperature">
        Temperature: {temperature.min}&deg;C - {temperature.max}&deg;C
      </div>

      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction.toUpperCase()}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
  }).isRequired,
};
