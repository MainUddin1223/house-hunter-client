import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { useAppContext } from "../contextProvider/useAppContext";

const RenterBookings = () => {
  const [bookedHouses, setBookedHouses] = useState([]);
  const { appLoading, setAppLoading } = useAppContext();
  const [deleteSuccessful, setDeleteSucessful] = useState(false);

  const handleDelete = async (id) => {
    setAppLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      method: "DELETE",
      url: `https://house-hunter-server-psi.vercel.app/api/renter/house/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const result = await axios(config);
      if (result?.status === 200) {
        setDeleteSucessful(true);
        Swal.fire("Deleted!", "", "success");
      }
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };
  const handleConfirmation = (id) => {
    Swal.fire({
      title: "Do you want to Delete the house?",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Don't delete`,
      confirmButtonText: "Confirm",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  useEffect(() => {
    handleHouseList();
  }, [deleteSuccessful]);
  
  const handleHouseList = async () => {
    setAppLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      url: "https://house-hunter-server-psi.vercel.app/api/renter/houses",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const result = await axios(config);
      console.log(bookedHouses);
      setBookedHouses(result?.data);
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };

  appLoading && <Loader />;

  return (
    <div className="">
      <h1 className="my-4 text-center uppercase text-2xl font-semibold">
        Your Booked houses
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
                      Room Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookedHouses.map((house, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium uppercase">
                        {house?.house?.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {house?.house?.address}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {house?.house?.rent}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {house?.house?.bedrooms}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {house?.house?.bathrooms}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {house?.house?.roomSize}
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
};
export default RenterBookings;
