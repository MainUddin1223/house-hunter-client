
import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './PropertyList.css';
const ProperyList = ({ houseList }) => {
  const navigate = useNavigate();
  return (
    <div className="property-container">
      {houseList.map((house) => (
        <div
          className="property-item "
          onClick={() => {
            navigate(`/house/details/${house._id}`);
          }}
        >
          <img src={house.picture} alt="" />
          <div className="property-description">
            <p style={{ fontWeight: "bold" }}>Monthly rent $ {house.rent}</p>
            <span
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <MdOutlineLocationOn
                style={{ color: "black", fontSize: "25px" }}
              />
              {house.address}
            </span>
            <p>{house.description}</p>
            <div className="property-details">
              <p>Apartment</p>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <BiBed />
                {house.bedrooms}
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <BiBath />
                {house.bathrooms}
              </span>
              <p>Area : {house.roomSize} sqft</p>
            </div>
            {house.isBooked ? (
              <p className="property-status" style={{ backgroundColor: "red" }}>
                Not Available
              </p>
            ) : (
              <p
                style={{ backgroundColor: "green" }}
                className="property-status"
              >
                Available
              </p>
            )}
            <p>
              {" "}
              Available from :{house.isBooked ? "Unknown" : house.availableFrom}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProperyList