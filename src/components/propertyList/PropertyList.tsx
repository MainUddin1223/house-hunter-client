
import React from "react";
import { BiBath, BiBed, BiShareAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
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
          <div className="property-img-div">
             <img src={house.picture} alt="" />
              {house.isBooked ? (
              <p className="property-status" style={{ backgroundColor: "red" }}>
                 Sold
              </p>
            ) : (
              <p
                style={{ backgroundColor: "green" }}
                className="property-status"
              >
                Sale
              </p>
            )}
                      <div className="share-icons">
              <BiShareAlt className="share-icon"/>
              <BsHeart className="share-icon"/>
            </div>
          </div>
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