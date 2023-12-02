import React from "react";
import { FiSearch } from "react-icons/fi";
import { useState, useRef } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function SearchBar({ setCoordinates }) {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const [address, setAddress] = useState("");
  const [tempCoordinates, setTempCoordinates] = useState([
    { lat: null, lng: null },
  ]);

  const handleChange = (value) => {
    setAddress(value);
  };

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      console.log("Success", latLng);

      setTempCoordinates(latLng); // Assuming setCoordinates is a function to set coordinates
      setAddress(value);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoordinates(tempCoordinates);
    console.log("yajib", tempCoordinates);
  };

  const buttonRef = useRef(null); // Ref for the button element

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      buttonRef.current.click(); // Programmatically trigger button click
    }
  };

  return (
    <div className="relative z-[100] mx-auto max-w-[1400px] gray-bg w-full my-4 py-4 md:rounded md:py-0">
      <div className="">
        <form
          className="h-24 items-center justify-center flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"
          onSubmit={handleSubmit}
        >
          <label className="text-white font-semibold" htmlFor="search-bar">
            Find a Capital Mech shop near you:
          </label>
          <label
            htmlFor="search-bar"
            className="bg-white rounded-full flex items-center px-2 border cursor-text w-[300px] xxs:w-[400px]"
          >
            {/*<input
              className="h-8 px-2 bg-transparent outline-none flex-1"
              type="text"
              id="search-bar"
              name="name"
              placeholder="Enter city or postal code"
              onChange={handleInput}
              value={searchText}
  />*/}
            <PlacesAutocomplete
              value={address}
              onChange={handleChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className="w-full">
                  <input
                    {...getInputProps({
                      placeholder: "Enter an address",
                      id: "search-bar",
                      className:
                        "h-12 px-2 bg-transparent outline-none flex-1 w-full",
                      onKeyUp: handleKeyPress,
                    })}
                  />
                  <div className="autocomplete-dropdown-container absolute rounded-md py-1 max-w-[350px]">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? {
                            backgroundColor: "white",
                            cursor: "pointer",
                            color: "orange",
                            padding: "0.5 0",
                          }
                        : {
                            backgroundColor: "white",
                            cursor: "pointer",
                            padding: "0.5 0",
                          };
                      return (
                        <div
                          key={suggestion.description}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <button
              ref={buttonRef}
              className="rounded-full bg-white text-white p-3 border-2 border-gray-600 translate-x-1"
              type="search"
              htmlFor="search-bar"
            >
              <FiSearch className="groy" />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
