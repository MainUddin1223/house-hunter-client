import { useState } from "react"
import House from "./House"
import HouseFilter from "./HouseFilters"

const HouseList = ()=>{
    const [houseList,setHouseList] = useState([])
    return(
<>
<hr className="my-4"/>
<h1 className="text-2xl font-semibold">Find your House from uncountable options</h1>
<div className="grid grid-cols-5">
    <div className="col-span-4">
        <House/>
    </div>
    <div className="grid-1">
        <HouseFilter/>
    </div>
</div>
</>
    )
}
export default HouseList