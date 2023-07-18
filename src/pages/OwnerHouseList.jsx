import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useAppContext } from "../contextProvider/useAppContext";

const OwnerHouseList = () =>{
    const [listedHouseList,setListedHouseList] = useState([]);
    const {appLoading,setAppLoading} =useAppContext()

    useEffect(()=>{
        handleHouseList()
    },[]);

    const handleHouseList = async()=>{
        setAppLoading(true)
        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            url: "https://house-hunter-server-psi.vercel.app/api/owner/houses",
            headers: {
              "Content-Type": "application/json",
              'authorization':`Bearer ${token}`
            },
          };
          try {
            const result = await axios(config);
            setListedHouseList(result?.data?.result)
            setAppLoading(false)
          } catch (error) {
            setAppLoading(false)
          }
    }
    appLoading && <Loader/>
    return(
<div className="">
    <h1>{listedHouseList.length}</h1>
    <h1 className="my-4 text-center uppercase text-2xl font-semibold">Your listed house</h1>
<hr className="mx-4"/>
</div>
    )
}

export default OwnerHouseList