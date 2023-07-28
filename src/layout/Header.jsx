
import { useEffect, useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import useScrollListener from "../Hooks/useAcrillListener";
import { useAppContext } from "../contextProvider/useAppContext";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
  const { userData } = useAppContext()
    const [navClassList, setNavClassList] = useState([]);
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
  return (
    <nav className={navClassList.join(" ")}>
      <div className="nav-container">
        <h1 onClick={() => navigate("/")}>HOUSE RENTER</h1>
        <div>
          {userData?.email ? (
            <CgProfile onClick={handleNavigate} className="profile-icon" />
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
