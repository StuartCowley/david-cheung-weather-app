import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import DigitalClock from "./DigitalClock";
import getForecast from "../requests/getForecast";
import "../styles/app.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dayMode, setDayMode] = useState("day-mode");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  return (
    <div className={`weather-app ${dayMode}`}>
      <h1>FIVE DAY FORECAST</h1>

      <button
        className="day-night-mode"
        type="button"
        onClick={() => {
          setDayMode(dayMode === "day-mode" ? "night-mode" : "day-mode");
        }}
      >
        D/N
      </button>

      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />

      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />

      {forecasts.length > 0 && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
      <DigitalClock />
    </div>
  );
}

export default App;
