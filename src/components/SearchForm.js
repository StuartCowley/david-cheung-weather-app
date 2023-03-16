import React from "react";
import PropTypes from "prop-types";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  // function SearchForm({ onCitySearch }) {
  // const city = document.querySelector("#selectCity").value;
  // const searchButton = document.querySelector(".searchButton");
  // searchButton.addEventListener("click", onCitySearch(city));

  const handleInputChange = (event) => setSearchText(event.target.value);
  // const handleInputChange = (event) => console.log(event.target.value);

  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
