/* eslint-disable react/prop-types */
import './HomePropertyList.css';
const HomeProperyList = ({ house }) => {
    console.log(house)
    return (
        <div className="property-item">
          <img src={house.picture} alt="" />
        </div>
    );
};
export default HomeProperyList