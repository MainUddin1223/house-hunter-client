import { GiCrystalGrowth, GiExpense, GiModernCity } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Statics.css";
const Statics = () => {
  return (
    <div className="statics">
      <div className="statics-section">
        <h1>The future of property managemnet is here</h1>
        <div className="statics-container">
          <div>
            <span className="growth-rate">
              <GiCrystalGrowth style={{ marginRight: "10px" }} />5
            </span>
            %<p>AVERAGE ROI FOR OUR CLIENTS</p>
          </div>
          <div>
            <span className="growth-rate">
              <GiExpense style={{ marginRight: "10px" }} />
              10
            </span>
            years
            <p>OF PROFESSIONAL EXPERIENCE</p>
          </div>
          <div>
            <span className="growth-rate">
              <GiModernCity style={{ marginRight: "10px" }} />
              35
            </span>
            Cities
            <p>Where we have clients</p>
          </div>
          <div>
            <span className="growth-rate">
              <MdOutlineLocationOn style={{ marginRight: "10px" }} />
              150
            </span>
            <p>We have strong position</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statics;
