
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contextProvider/useAppContext";

const Header = () => {
    const navigate = useNavigate();
    const {userData} = useAppContext()
  return (
    <div className="bg-primary p-2">
      <div className=" container mx-auto text-white flex justify-between font-semibold">
        <div className=" md:text-2xl text-lg">
          <h1>HOUSE RENTER</h1>
        </div>
        <div>
            {
               userData?.email ?
          <button className="bg-button-color px-4 py-1 rounded" onClick={()=>navigate('/login')}>Dashboard</button>
          :<button className="bg-button-color px-4 py-1 rounded" onClick={()=>navigate('/login')}>Login</button>
            }
        </div>
      </div>
    </div>
  );
};
export default Header;
