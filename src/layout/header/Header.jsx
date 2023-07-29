
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from "react-router-dom";
import useScrollListener from "../../Hooks/useAcrillListener";
import { useAppContext } from "../../contextProvider/useAppContext";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
  const { userData } = useAppContext()
  const [navClassList, setNavClassList] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);
    const scroll = useScrollListener();
    useEffect(() => {
      const _classList = [];

      if (scroll.y > 250 && scroll.y - scroll.lastY > 0)
      { _classList.push("nav-bar--hidden"); }
      else if (scroll.y > 250) {
        _classList.push("nav-bar-color");
      }

      setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    const handleNavigate=()=>{
        if(userData?.role == 'owner'){
            navigate('/owner')
        }else if(userData?.role == 'renter'){
            navigate('/renter')
        }
  }
  
  useEffect(() => {
    if (isDropdown) {
        document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
      }
    }, [isDropdown]);

  return (
    <nav className={navClassList.join(" ")}>
      {isDropdown && (
        <div
          className="dropdown-wrapper"
          onClick={() => {
            setIsDropdown(false);
          }}
        ></div>
      )}
      <div className="nav-container">
        <h1 onClick={() => navigate("/")}>HOUSE RENTER</h1>
        <div className="nav-list">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/">
            Houses
          </Link>
          {userData?.email ? (
            <Link className="nav-item" onClick={handleNavigate}>
              Dashboard
            </Link>
          ) : (
            <Link className="nav-item" to="/register">
              Registration
            </Link>
          )}
        </div>
        <GiHamburgerMenu
          className="ham-menu"
          onClick={() => setIsDropdown(!isDropdown)}
        />
        <div
          className={`nav-list-mobile ${
            isDropdown ? "nav-show" : "nav-hidden"
          }`}
        >
          <Link className="nav-item nav-item-mobile" to="/">
            Home
          </Link>
          <Link className="nav-item nav-item-mobile" to="/">
            Houses
          </Link>
          {userData?.email ? (
            <Link className="nav-item nav-item-mobile" onClick={handleNavigate}>
              Dashboard
            </Link>
          ) : (
            <Link className="nav-item nav-item-mobile" to="/register">
              Registration
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
