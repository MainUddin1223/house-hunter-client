/* eslint-disable react/prop-types */
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { BsFilterSquare } from "react-icons/bs";
import "./HouseFilter.css";
const HouseFilter = ({
  filterableField,
  setSearchTerm,
  handleSearch,
  setFilterableField,
  handleFilter,
}) => {
  const [showFilter, setShowFilter] = useState(false)
  const range = `${filterableField?.minRent} to ${filterableField?.maxRent}`;
  
  const HandleRentRange = (e) => {
    setFilterableField((prev) => ({ ...prev, minRent: e[0], maxRent: e[1] }));
  };
  
  const handleSubmit = async() => {
    setShowFilter(false),
      handleFilter()
}

  return (
    <div className="filter-container">
      <div className="search-section">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" "
          placeholder="Search a house"
          type="text"
          name="search"
        />
        <button onClick={handleSearch} className="">
          Search
        </button>
        <BsFilterSquare
          className="filter-icon"
          onClick={() => setShowFilter(!showFilter)}
        />
      </div>
      {/* <div className="available-toggle">
        <p>Available only</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div> */}
      <div className={`filter ${showFilter ? "show-filter" : ""}`}>
        <div className="filter-section">
          <div className="price-slider-container">
            <div className="price-slider">
              <p>Range:</p>
              <p>{`${filterableField?.maxRent ? range : "Select range"}`}</p>
              <Slider
                range
                min={0}
                max={100000}
                allowCross={false}
                defaultValue={[20000, 50000]}
                onChange={(e) => HandleRentRange(e)}
              />
            </div>
          </div>

          <div className="">
            <p>City</p>
            <input
              type="text"
              className="house-size-field"
              onChange={(event) =>
                setFilterableField((prev) => ({
                  ...prev,
                  city: event.target.value,
                }))
              }
            />
          </div>
          <div className="">
            <p>House size</p>
            <input
              type="number"
              className="house-size-field"
              onChange={(event) =>
                setFilterableField((prev) => ({
                  ...prev,
                  roomSize: event.target.value,
                }))
              }
            />
          </div>

          <div className="">
            <BiBed style={{ fontSize: "25px", padding: "5px" }} />
            <div className="room-number-section">
              <button
                onClick={() =>
                  setFilterableField((prev) => ({
                    ...prev,
                    bedrooms: filterableField?.bedrooms
                      ? filterableField?.bedrooms - 1
                      : 0,
                  }))
                }
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={`${
                  filterableField?.bedrooms || filterableField?.bedrooms > 0
                    ? filterableField?.bedrooms
                    : ""
                }`}
              />
              <button
                onClick={() =>
                  setFilterableField((prev) => ({
                    ...prev,
                    bedrooms: filterableField?.bedrooms
                      ? filterableField?.bedrooms + 1
                      : 1,
                  }))
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="">
            <BiBath style={{ fontSize: "25px", padding: "5px" }} />
            <div className="room-number-section">
              <button
                onClick={() =>
                  setFilterableField((prev) => ({
                    ...prev,
                    bathrooms: filterableField?.bathRooms
                      ? filterableField?.bathRooms - 1
                      : 0,
                  }))
                }
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={`${
                  filterableField?.bathRooms || filterableField?.bathRooms > 0
                    ? filterableField?.bathRooms
                    : ""
                }`}
              />
              <button
                onClick={() =>
                  setFilterableField((prev) => ({
                    ...prev,
                    bathRooms: filterableField?.bathRooms
                      ? filterableField?.bathRooms + 1
                      : 1,
                  }))
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="button-section">
          <button className="" onClick={handleSubmit}>
            Submit
          </button>
          <button className="" onClick={() => setFilterableField({})}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default HouseFilter;
