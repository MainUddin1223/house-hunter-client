/* eslint-disable react/prop-types */
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const HouseFilter = ({ setSearchTerm, handleSearch ,setFilterableField,handleFilter}) => {
  return (
    <div className="sticky top-0 bg-secondary text-white p-2 w-full">
      <h1 className="py-2 text-sm">Find your house by your prefrence</h1>
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <div className="flex gap-2">
            <input
              onChange={(e)=>(setSearchTerm(e.target.value))}
              className=" placeholder:text-slate-400 block bg-white w-full text-black border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search a house"
              type="text"
              name="search"
            />
            <button onClick={handleSearch} className="bg-button-color px-2 rounded font-semibold">
              Search
            </button>
          </div>
        </label>
        <h1 className="text-center py-2 text-sm ">Filter as prefrences</h1>

        <div>
          <div className="flex gap-4 items-center">
            <p>Range</p>
            <Slider
              range
              min={1000}
              max={100000}
              allowCross={false}
              defaultValue={[20000, 50000]}
              tipFormatter={(value) => `${value}!`}
            />
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between my-2">
            <p>City</p>
            <input type="text" className="w-1/2 text-black" onChange={(event)=>(setFilterableField((prev)=>({...prev,city:event.target.value})))}/>
          </div>
          <div className="flex gap-4 items-center justify-between my-2 ">
            <p>Bedrooms</p>
            <input type="text" className="w-1/2  text-black" onChange={(event)=>(setFilterableField((prev)=>({...prev,bedrooms:event.target.value})))} />
          </div>
          <div className="flex gap-4 items-center justify-between my-2">
            <p>Bathrooms</p>
            <input type="text" className="w-1/2  text-black" onChange={(event)=>(setFilterableField((prev)=>({...prev,bathrooms:event.target.value})))} />
          </div>
          <div className="flex gap-4 items-center justify-between my-2">
            <p>House size</p>
            <input type="text" className="w-1/2  text-black" onChange={(event)=>(setFilterableField((prev)=>({...prev,houseSize:event.target.value})))}/>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button className="bg-button-color py-1 px-4 rounded" onClick={handleFilter}>Submit</button>
          <button className="bg-button-color py-1 px-4 rounded" onClick={()=>setFilterableField({})}>Reset</button>
        </div>
      </div>
    </div>
  );
};
export default HouseFilter;
