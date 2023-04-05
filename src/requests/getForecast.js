import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  setErrorMessage("");

  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      setForecasts([]);
      if (error.response === undefined) {
        console.log(error);
        return;
      }
      const { status } = error.response;
      if (status === 404) {
        console.error("Location is not valid", error);
        setErrorMessage("No such town or city, try again!");
      }
      if (status === 500) {
        console.error("Server error", error);
        setErrorMessage("Oops, server error, try again later!");
      }
    });
};

export default getForecast;
