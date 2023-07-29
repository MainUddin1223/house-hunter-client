/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({});
const AppContextProvider = (props) => {

  const [appLoading,setAppLoading] = useState(false)
  const [isInviteModal, setIsInviteModal] = useState(false);
  const [userData, setUserData] = useState({})
    const [houseList, setHouseList] = useState([]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const getAuth= async()=>{
    setAppLoading(true);
    const token = localStorage.getItem('token')
    const config = {
        method: "GET",
        url: "https://house-hunter-server-psi.vercel.app/api/auth",
        headers: {
          "Content-Type": "application/json",
          'authorization':`Bearer ${token}`
        },
      };
      try {
        const res = await axios(config);
        if (res.status == 200) {
      setAppLoading(false);
       setUserData(res.data.result);
        }else{
            setAppLoading(false); 
        }
      } catch (error) {
        setAppLoading(false);
      }
}

useEffect(()=>{
  const token = localStorage.getItem('token')

  token && getAuth()
},[])

    const getHouses = async (params = {}) => {
      setAppLoading(true);
      const config = {
        method: "GET",
        url: "https://house-hunter-server-psi.vercel.app/api/house",
        headers: {
          "Content-Type": "application/json",
        },
        params,
      };
      try {
        const result = await axios(config);
        console.log(result);
        setHouseList(result?.data.data);
        setAppLoading(false);
      } catch (error) {
        setAppLoading(false);
      }
    };

    useEffect(() => {
      getHouses({ limit: 6 });
    }, []);

  const { children, values = {} } = props;
  return (
   <>
    <AppContext.Provider
      value={{
        appLoading,
        setAppLoading,
        // authData,
        houseList,
        isInviteModal,
        setIsInviteModal,
        setUserData,
        userData,
        scrollToTop,
        ...values,
      }}
    >
      {children}
    </AppContext.Provider>
   </>
  );
};
const useAppContext = () => useContext(AppContext);
export { AppContextProvider, useAppContext };

