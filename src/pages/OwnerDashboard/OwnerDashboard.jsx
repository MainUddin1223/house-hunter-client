import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillFileEarmarkBarGraphFill,
  BsFillHouseAddFill,
} from "react-icons/bs";
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from "react-icons/fi";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contextProvider/useAppContext";
import './OwnerDashboard.css';
const OwnerDashboard = () => {
  const [isHideNav,setIsHideNav] = useState(false)
  const { userData,setUserData } = useAppContext();
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.clear();
    setUserData({})
    navigate('/')
  }
console.log(userData)
  return (
    <div>
      <div className="owner-dashboard">
        <div className="side-bar-container">
          <div className="icon-bar">
            <AiFillHome className="nav-icon" />
            <BsFillHouseAddFill className="nav-icon" />
            <BsFillFileEarmarkBarGraphFill className="nav-icon" />
            <FiLogOut onClick={handleLogout} className="nav-icon" />
          </div>
          <div className={`side-bar ${isHideNav && "hide-side-bar"}`}>
            <PiArrowsClockwiseBold
              className="arrow-clock"
              onClick={() => setIsHideNav(!isHideNav)}
            />
            <CgProfile className="profile-icon" />
            <h2>{userData.fullName ?? "Owner"}</h2>
            <div className="dashboard-nav-list ">
              <Link to="/" className="dashboard-nav-item">
                Home
              </Link>
              <Link to="/" className="dashboard-nav-item">
                Add a house
              </Link>
              <Link to="/" className="dashboard-nav-item">
                Analytics
              </Link>
              <Link to="/" className="dashboard-nav-item">
                Upgrade
              </Link>
              <Link to="/" className="dashboard-nav-item">
                Profile
              </Link>
              <Link to="/" className="dashboard-nav-item">
                Payment
              </Link>
              <Link to="/" className="dashboard-nav-item">
                Profile
              </Link>
              <a className="dashboard-nav-item" onClick={handleLogout}>
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className={`content-container ${isHideNav && "is-nav-closed"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default OwnerDashboard;
