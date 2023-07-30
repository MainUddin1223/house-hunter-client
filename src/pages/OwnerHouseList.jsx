import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AppLoader from "../components/appLoader/AppLoader";
import { useAppContext } from "../contextProvider/useAppContext";

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
        <div className="">
          <h1 className="my-4 text-center uppercase text-2xl font-semibold">
            Your listed house
          </h1>
          <hr className="mx-4" />
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Address
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Rent amount
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Bedrooms
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Bathrooms
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Room Size
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Room Size
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listedHouseList.map((house, index) => (
                        <tr
                          key={index}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium uppercase">
                            {house?.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {house?.address}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {house?.rent}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {house?.bedrooms}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {house?.bathrooms}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {house?.isBooked ? "Booked" : "Available"}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {house?.roomSize}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <button
                              className="bg-button-color px-3 py-1 rounded text-white font-semibold"
                              onClick={() =>
                                navigate(`/owner/house/${house?._id}`)
                              }
                            >
                              Edit
                            </button>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <button
                              className="bg-button-color px-3 py-1 rounded text-white font-semibold"
                              onClick={() => handleConfirmation(house?._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default OwnerHouseList