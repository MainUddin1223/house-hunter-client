import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AppLoader from "../../components/appLoader/AppLoader";
import { useAppContext } from "../../contextProvider/useAppContext";
import './OwnerHouseList.css';

const OwnerHouseList = () =>{
    const [listedHouseList,setListedHouseList] = useState([]);
    const {appLoading,setAppLoading} =useAppContext();
    const [deleteSuccessful,setDeleteSucessful] = useState(false)
    const navigate = useNavigate()

    const handleDelete = async(id)=>{
      setAppLoading(true)
      const token = localStorage.getItem('token');
      const config = {
          method: "DELETE",
          url: `https://house-hunter-server-psi.vercel.app/api/owner/house/${id}`,
          headers: {
            "Content-Type": "application/json",
            'authorization':`Bearer ${token}`
          },
        };
        try {
          const result = await axios(config);
          if(result?.status === 200){
            setDeleteSucessful(true)
            Swal.fire('Deleted!', '', 'success')
          }
          setAppLoading(false)
        } catch (error) {
          setAppLoading(false)
        }
    }
    const handleConfirmation = (id)=>{
      Swal.fire({
        title: 'Do you want to Delete the house?',
        showDenyButton: true,
        showCancelButton: true,
        denyButtonText: `Don't delete`,
        confirmButtonText: 'Confirm',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          handleDelete(id)
        }
      })
    }

    useEffect(()=>{
        handleHouseList()
    },[deleteSuccessful]);
    
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

  if (appLoading) {
      return <AppLoader/>
    }
      return (
        <div className="table-container">
          <h3 className="owner-house-list-header">Your listed house</h3>
          {/* demo */}
          <div className="container">
            <div className="list-container">
              <ul className="responsive-table">
                <li className="table-header">
                  <div className="col col-1"> Name</div>
                  <div className="col col-2"> Address</div>
                  <div className="col col-3">Rent amount</div>
                  <div className="col col-4">Bedrooms</div>
                  <div className="col col-5">Bathrooms</div>
                  <div className="col col-6">Status</div>
                  <div className="col col-7">House Size</div>
                  <div className="col col-8">Edit</div>
                  <div className="col col-9">Delete</div>
                </li>
                {listedHouseList.map((house, index) => (
                  <li className="table-row" key={index}>
                    <div className="col col-1" data-label="Name">
                      {house?.name}
                    </div>
                    <div className="col col-2" data-label="Address">
                      {house?.address}
                    </div>
                    <div className="col col-3" data-label="Rent">
                      $ {house?.rent}
                    </div>
                    <div className="col col-4" data-label="Bed rooms">
                      {house?.bedrooms}
                    </div>
                    <div className="col col-5" data-label="Bath rooms">
                      {house?.bathrooms}
                    </div>
                    <div className="col col-6" data-label="Status">
                      {house?.isBooked ? "Booked" : "Available"}
                    </div>
                    <div className="col col-7" data-label="House size">
                      {house?.roomSize} sqft
                    </div>
                    <div className="col col-8" data-label="">
                      <button
                        className="bg-button-color px-3 py-1 rounded text-white font-semibold"
                        onClick={() => navigate(`/owner/house/${house?._id}`)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="col col-9" data-label="">
                      <button
                        className="bg-button-color px-3 py-1 rounded text-white font-semibold"
                        onClick={() => handleConfirmation(house?._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
}

export default OwnerHouseList