/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ProperyList from "../propertyList/PropertyList";
import './HomePropertyList.css';
const HomeProperyList = ({ houseList }) => {
  const navigate = useNavigate()
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
      <button className="explore-btn" onClick={() => navigate("/houses")}>
        Explore more
      </button>
    </div>
  );
};
export default HomeProperyList