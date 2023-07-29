/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ProperyList from "../propertyList/PropertyList";
import './HomePropertyList.css';
const HomeProperyList = ({ houseList }) => {
  return (
    <div className="">
      <h1
        style={{
          textAlign: "center",
          color: "var(--primary-color)",
          fontSize: "3em",
        }}
      >
        Top Properties
      </h1>
      <ProperyList houseList={houseList} />
      <button className="explore-btn">Explore more</button>
    </div>
  );
};
export default HomeProperyList