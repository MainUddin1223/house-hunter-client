import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AppLoader from "../components/appLoader/AppLoader";
import HouseForm from "../components/houseForm/HouseForm";
import { useAppContext } from "../contextProvider/useAppContext";

const EditHouse = () => {
  const params = useParams();
  const [houseData, setHouseData] = useState({});
  const { setAppLoading, appLoading } = useAppContext();
   const [isValidData, setIsValidData] = useState(false);
  const navigate = useNavigate();

     useMemo(() => {
       if (
         houseData?.name &&
         houseData?.phoneNumber &&
         houseData?.address &&
         houseData?.city &&
         houseData?.rent &&
         houseData?.bedrooms &&
         houseData?.bathrooms &&
         houseData?.roomSize &&
         houseData?.availableFrom &&
         houseData?.description
       ) {
         setIsValidData(true);
       } else {
         setIsValidData(false);
       }
     }, [houseData]);

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
  if (appLoading) {
    return <AppLoader/>
  }
  return (
    <div>
      <h2 className="owner-add-house-header">Update House</h2>
      <div className="add-house-container">
        <HouseForm
          formData={houseData}
          setFormData={setHouseData}
          // setPhoneNumberValid={setPhoneNumberValid}
          // phoneNumberValid={phoneNumberValid}
        />

        <button
          className={`submit-button ${
            !isValidData && "submit-button-disabled "
          }`}
          disabled={!isValidData && true}
          onClick={handleConfirmation}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default EditHouse;
