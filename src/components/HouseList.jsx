/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "../contextProvider/useAppContext";
import House from "./House";
import HouseFilter from "./HouseFilters";
import Loader from "./Loader";

const HouseList = () => {
  const [houseList, setHouseList] = useState([]);
  const { setAppLoading, appLoading } = useAppContext();
  const [filterableField, setFilterableField] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [totalData,setTotalData] = useState({})
  const totalPages = Math.ceil(Number(totalData?.total) / 10);

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
      setTotalData(result?.data.meta)
      setHouseList(result?.data);
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);
  const handleSearch = () => {
    if (searchTerm) {
      const params = { searchTerm };
      getHouses(params);
      setSearchTerm("");
    }
  };

  const handleFilter = () => {
    const params = {};

  for (const key in filterableField) {
    if (Object.prototype.hasOwnProperty.call(filterableField, key)) {
      const value = filterableField[key];

      if (value) {
        params[key] = value;
      }
    }
  }
  
 if( Object.keys(params).length>0){
  getHouses(params);
  setFilterableField({})
 }
  };

  const handlePagination = (index)=>{
   const page = index+1
   getHouses({page});
  }

  if (appLoading) {
    return <Loader />;
  }
  return (
    <>
      <hr className="my-4" />
      <h1 className="text-2xl font-semibold">
        Find your House from uncountable options
      </h1>
      <div className="grid grid-cols-5">
        <div className="lg:col-span-4 md:col-span-3 grid grid-col-1 md:grid-col-2 lg:grid-cols-2">
          {houseList?.data?.map((house, index) => (
            <House houseData={house} key={index + 1} />
          ))}
        </div>
        <div className="grid-2">
          <HouseFilter
            setSearchTerm={setSearchTerm}
            setFilterableField={setFilterableField}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <div className="flex justify-center gap-8 my-4">
  {
    Array.from({ length: totalPages }, (_, index) => (
      // Map function logic goes here
      // You can use the index to perform operations or render content
      <button onClick={()=>{handlePagination(index)}}  className={` px-3 py-2 text-white ${totalData?.page==index+1?'bg-red-700':'bg-button-color'}`} key={index}> {index + 1}</button>
    ))
  }
        </div>
    </>
  );
};

export default HouseList;
