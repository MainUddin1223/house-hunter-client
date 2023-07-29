/* eslint-disable react/prop-types */
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './HouseFilter.css';
const HouseFilter = ({filterableField, setSearchTerm, handleSearch ,setFilterableField,handleFilter}) => {
 
  const HandleRentRange = (e) => {
    setFilterableField((prev)=>({...prev,minRent:e[0],maxRent:e[1]}))
  }
 
  return (
    <div className="filter-container">
      <div>
        <label className="relative block">
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
          </div>
        </label>
        <div className="filter-section">
          <div className="price-slider-container">
            <div className="rent-range-section">
              <div className="amount-div">
                <p>Minimum Rent</p>
                <input
                  type="number"
                  readOnly
                  value={filterableField?.minRent ?? ""}
                />
              </div>
              <div className="amount-div">
                <p>Maximum Rent</p>
                <input
                  type="number"
                  readOnly
                  value={filterableField?.maxRent ?? ""}
                />
              </div>
            </div>
            <div className="price-slider">
              <p>Range</p>
              <Slider
                range
                min={1000}
                max={100000}
                allowCross={false}
                defaultValue={[20000, 50000]}
                onChange={(e) => HandleRentRange(e)}
              />
            </div>
          </div>
          <div className="filter-items">
            <div>
              <div className="">
                <p>City</p>
                <input
                  type="text"
                  className=""
                  onChange={(event) =>
                    setFilterableField((prev) => ({
                      ...prev,
                      city: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="">
                <p>Bedrooms</p>
                <input
                  type="text"
                  className=""
                  onChange={(event) =>
                    setFilterableField((prev) => ({
                      ...prev,
                      bedrooms: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div>
              <div className="">
                <p>Bathrooms</p>
                <input
                  type="text"
                  className=""
                  onChange={(event) =>
                    setFilterableField((prev) => ({
                      ...prev,
                      bathrooms: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="">
                <p>House size</p>
                <input
                  type="text"
                  className=""
                  onChange={(event) =>
                    setFilterableField((prev) => ({
                      ...prev,
                      roomSize: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-section">
          <button className="" onClick={handleFilter}>
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
