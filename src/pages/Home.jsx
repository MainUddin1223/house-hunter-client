// import Loader from "../components/Loader"
import HomeProperyList from "../components/HomeProperty/HomePropertyList";
import AppLoader from "../components/appLoader/AppLoader";
import Hero from "../components/hero/Hero";
import Invesment from "../components/investmentGuide/Investment";
import Services from "../components/services/Services";
import Statics from "../components/statics/Statics";
import { useAppContext } from "../contextProvider/useAppContext";
import Layout from "../layout/Layout";

const Home = () => {

  const { appLoading, houseList } = useAppContext();

  if (appLoading) {
    return <AppLoader/>
  }
  console.log(appLoading);
    return (
      <Layout>
        {/* <Loader/> */}
        <div className="md:container mx-auto">
          {/* hero section */}
          <Hero />
          <Statics />
          <hr style={{ width: "50%", margin: "auto", marginTop: "25px" }} />
          <HomeProperyList houseList={houseList} />
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
