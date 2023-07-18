// import Loader from "../components/Loader"
import heroImage from "../assets/house-cover.jpg";
import HouseList from "../components/HouseList";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      {/* <Loader/> */}
      <div className="md:container mx-auto">
        {/* hero section */}
        <div className="grid grid-cols-2 mt-8">
          <div className="font-semibold flex flex-col items-center justify-center">
            <h1 className="text-md md:text-3xl lg:text-5xl py-2">
              Find or List your House
            </h1>
            <h2 className="text-sm md:text-2xl lg:text-3xl py-2">
              Get your disired House
            </h2>
            <h2 className="text-sm md:text-2xl lg:text-3xl">
              Rent your house{" "}
            </h2>
          </div>
          <div>
            <img src={heroImage} alt="" className="max-h-80" />
          </div>
        </div>
        {/* property section */}
        <HouseList/>
        <div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
