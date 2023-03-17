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
  return (
    axios
      .get(endpoint)
      .then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      })
      // .catch((error) => {
      //   if (error.response) {
      //     // The request was made and the server responded with a status code
      //     // that falls out of the range of 2xx
      //     // console.log(error.response.data);
      //     // console.log(error.response.status);
      //     setErrorMessage(error.response.status);
      //     // console.log(error.response.headers);
      //   } else if (error.request) {
      //     // The request was made but no response was received
      //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //     // http.ClientRequest in node.js
      //     // console.log(error.request);
      //     setErrorMessage(404);
      //   } else {
      //     // Something happened in setting up the request that triggered an Error
      //     // console.log("Error", error.message);
      //     setErrorMessage(500);
      //   }
      //   // console.log(error.config);
      // });
      .catch((error) => {
        const { status } = error.response;
        if (status === 404) {
          console.error("Location is not valid", error);
          setErrorMessage("No such town or city, try again!");
        }
        if (status === 500) {
          console.error("Server error", error);
          setErrorMessage("Oops, server error, try again later!");
        }
      })
  );
};

export default getForecast;
