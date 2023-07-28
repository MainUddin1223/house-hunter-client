// import Loader from "../components/Loader"
import axios from "axios";
import { useEffect, useState } from "react";
import HomeProperyList from "../components/HomeProperty/HomePropertyList";
import Loader from "../components/Loader";
import Hero from "../components/hero/Hero";
import Invesment from "../components/investmentGuide/Investment";
import Services from "../components/services/Services";
import { useAppContext } from "../contextProvider/useAppContext";
import Layout from "../layout/Layout";

const Home = () => {

  const [houseList, setHouseList] = useState([]);
  const { setAppLoading, appLoading } = useAppContext();
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
       console.log(result)
       setHouseList(result?.data.data);
       setAppLoading(false);
     } catch (error) {
       setAppLoading(false);
     }
   };

   useEffect(() => {
     getHouses({limit:6});
   }, []);

  if (appLoading) {
    return <Loader/>
  }
    return (
      <Layout>
        {/* <Loader/> */}
        <div className="md:container mx-auto">
          {/* hero section */}
          <Hero />
          <h1 style={{ textAlign: "center",color:"var(--primary-color)",fontSize:"3em" }}>Top Properties</h1>
          <hr style={{ width: "50%", margin: "50px auto" }} />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
          >
            {/* property section */}
            {houseList &&
              houseList?.map((house) => (
                <HomeProperyList house={house} key={house._id} />
              ))}
          </div>
          <div></div>
          <hr style={{ width: "50%", margin: "50px auto" }} />
          <Services />
          <hr style={{ width: "50%", margin: "50px auto" }} />
          <Invesment />
        </div>
      </Layout>
    );
};
export default Home;
