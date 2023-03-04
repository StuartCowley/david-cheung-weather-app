import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App(props) {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
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
