import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import HouseForm from "../components/HouseForm";
import Loader from "../components/Loader";
import { useAppContext } from "../contextProvider/useAppContext";

const EditHouse = () => {
  const params = useParams();
  const [houseData, setHouseData] = useState({});
  const { setAppLoading, appLoading } = useAppContext();
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const navigate = useNavigate();

  const getHouseById = async () => {
    setAppLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      url: `https://house-hunter-server-psi.vercel.app/api/owner/house/${params?.id}`,
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

  const handleUpdateHouse = async () => {
    const payload = {
      name: houseData?.name,
      phoneNumber: houseData?.phoneNumber,
      address: houseData?.address,
      city: houseData?.city,
      rent: houseData?.rent,
      bedrooms: houseData?.bedrooms,
      bathrooms: houseData?.bathrooms,
      roomSize: houseData?.roomSize,
      availableFrom: houseData?.availableFrom,
      description: houseData?.description,
    };
    setAppLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      method: "PATCH",
      url: `https://house-hunter-server-psi.vercel.app/api/owner/house/${params?.id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: payload,
    };
    try {
      const result = await axios(config);
      if (result?.status === 200) {
        Swal.fire("Updated!", "", "success");
        navigate("/owner");
      }
      setAppLoading(false);
    } catch (error) {
      setAppLoading(false);
    }
  };
  const handleConfirmation = () => {
    Swal.fire({
      title: "Do you want to Delete the house?",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Don't Update`,
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        handleUpdateHouse();
      }
    });
  };
  useEffect(() => {
    getHouseById();
  }, []);
  appLoading && <Loader />;
  return (
    <div>
      <h1 className="my-4 text-center uppercase text-2xl font-semibold">
        Update House
      </h1>
      <hr className="mx-4" />
      <HouseForm
        formData={houseData}
        setFormData={setHouseData}
        setPhoneNumberValid={setPhoneNumberValid}
        phoneNumberValid={phoneNumberValid}
      />
      <button
        className={`mx-auto block mb-4 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none dark:focus:ring-primary ${"bg-button-color hover:bg-primary dark:bg-blue-600 dark:hover:bg-blue-700"}`}
        onClick={handleConfirmation}
      >
        Submit
      </button>
    </div>
  );
};
export default EditHouse;
