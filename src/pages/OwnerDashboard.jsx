import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../contextProvider/useAppContext";

const OwnerDashboard = () => {
  const { userData,setUserData } = useAppContext();
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.clear();
    setUserData({})
    navigate('/')
  }

  return (
    <div>
      <div className="flex relative">
        <div className="w-48 h-screen bg-secondary sticky top-0">
          <div className="text-white font-semibold text-center mt-4">
            <h1>Welcome {userData?.fullName}</h1>
            <p>{userData?.email}</p>
          </div>
          <hr className="mx-1 my-4" />
          <div className="text-white text-center">
            <p className="bg-button-color py-2 my-1 cursor-pointer" onClick={()=>navigate('/')}>Home</p>
            <p className="bg-button-color py-2 my-1 cursor-pointer" onClick={()=>navigate('/owner/list-house')}>Add New</p>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button className="block mx-auto bg-button-color px-8 py-2 text-white font-semibold" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="flex-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default OwnerDashboard;
