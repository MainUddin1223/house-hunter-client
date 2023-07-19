import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { useAppContext } from "../contextProvider/useAppContext";
import Layout from "../layout/Layout";

const HouseDetails = () => {
  const params = useParams();
  const [houseData, setHouseData] = useState({});
  const { setAppLoading, appLoading,userData } = useAppContext();
  const [bookingData,setBookingData] = useState({phoneNumber:""})
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isPhoneNumberValid,setIsPhoneNumberValid] = useState(true)
const navigate = useNavigate();

  const getHouseById = async () => {
    setAppLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      url: `https://house-hunter-server-psi.vercel.app/api/house/${params?.id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const result = await axios(config);
      if (result?.status === 200) {
        setHouseData(result?.data);
      }
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };

  const handleBooking = async()=>{
    setAppLoading(true);
    const token = localStorage.getItem("token");
    console.log('token',token)
    const config = {
      method: "POST",
      url: `https://house-hunter-server-psi.vercel.app/api/renter/house/${params?.id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data:bookingData
    };
    try {
        const result = await axios(config);
        if (result?.status === 200) {
          await Swal.fire({
              icon: "success",
              title: "House Booked",
              showConfirmButton: false,
              timer: 1500,
            });
          navigate("/renter");
        }
        setAppLoading(false);
      } catch (error) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
        setAppLoading(false);
      }
  }
  const handlePhoneNumber = (event) => {
    const phoneNumber = event.target.value;
    const regex = /^\+88\d{11}$/;
    if (regex.test(phoneNumber)) {
        setIsPhoneNumberValid(true)
    }else{
        setIsPhoneNumberValid(false)

    }
  };

  useEffect(() => {
    getHouseById();
  }, []);
  if (appLoading) {
    return <Loader />;
  }

  const handleButtonClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleDivClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; 
  };
  
  const handleConfirm = ()=>{
    if(!isPhoneNumberValid || !bookingData?.phoneNumber){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Inavlid phone number'
          })
    }else if(userData?.owner){
        Swal.fire({
            icon: 'error',
            title: 'You are owner!',
            text: 'You can not book a house'
          })
    }
    else{
        handleBooking()
        handleDivClose()
    }
  }

  return (
    <>
      <Layout>
        <div className="w-3/4 mx-auto my-4 shadow-md py-4">
          <h1 className="text-center uppercase border-b-2 m-4  text-2xl font-semibold">
            House details
          </h1>
          <div className="w-1/4 mx-auto my-4">
          <img src={houseData?.picture} alt="" className="max-full" />
          </div>
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Name
              </label>
              <p>{houseData.name}</p>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Description
              </label>
              <p>{houseData.description}</p>
            </div>
          </div>
          <div className="flex justify-center gap-16 my-8">
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Address
              </label>
              <p>{houseData.address}</p>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                City
              </label>
              <p>{houseData.city}</p>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Rent
              </label>
              <p>{houseData.rent}</p>
            </div>
          </div>
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Status
              </label>
              <p>{houseData.isBooked ? "Not available" : "Available"}</p>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Phone Number
              </label>
              <p>{houseData.phoneNumber}</p>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-lg font-semibold">
                Area
              </label>
              <p>{houseData.roomSize}sqm</p>
            </div>
          </div>
          <div>
            {
                houseData.isBooked?<button disabled={true} className="mx-auto block bg-gray-600 px-4 py-2 mt-4 text-white font-semibold rounded">Not available</button>:<button className="mx-auto block bg-button-color px-4 py-2 mt-4 text-white font-semibold rounded" onClick={handleButtonClick}>Book the House</button>
            }
          </div>
          {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 lg:w-1/2 rounded">
            <h1 className="text-2xl font-semibold mb-4 text-center">Confirmation</h1>
            <div className="my-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={userData.email} 
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={userData.fullName} 
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Phone *
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="+8801545464568"
                onChange={(event) => {
                    setBookingData((prev) => ({
                    ...prev,
                    phoneNumber: event.target.value,
                  }));
                }}
                onBlur={handlePhoneNumber}
                value={bookingData?.phoneNumber ?? ""}
                required
              />
              {
                (!isPhoneNumberValid )&& <p className="text-red-700">Invalid phone number</p>
              }
            </div>
            <div className="flex justify-center gap-8 my-4">
            <button
            className="py-2 px-4 bg-button-color text-white rounded" onClick={handleConfirm}>Confirm</button>
            <button onClick={handleDivClose} className="py-2 px-4 bg-button-color text-white rounded">Close</button>
            </div>
          </div>
        </div>
      )}
        </div>
      </Layout>
    </>
  );
};

export default HouseDetails;
