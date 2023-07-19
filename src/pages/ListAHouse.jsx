import axios from "axios";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HouseForm from "../components/HouseForm";
import { useAppContext } from "../contextProvider/useAppContext";

const ListAHouse = () => {
  const picture =
    "https://images.freeimages.com/images/previews/675/house-3-1232901.jpg";
   const [listHoueForm,setListHouseForm] = useState({picture,availableFrom:new Date().toISOString().slice(0, 10)})
   const [phoneNumberValid,setPhoneNumberValid] = useState(true);
   const [isValidData, setIsValidData] = useState(false);
   const {setAppLoading} = useAppContext()
   const navigate = useNavigate();
   
   useMemo(()=>{
    if(listHoueForm?.name &&
      listHoueForm?.phoneNumber &&
      listHoueForm?.address &&
      listHoueForm?.city &&
      listHoueForm?.rent &&
      listHoueForm?.phoneNumber &&
      listHoueForm?.bedrooms &&
      listHoueForm?.bathrooms &&
      listHoueForm?.roomSize &&
      listHoueForm?.availableFrom &&
      listHoueForm?.description &&
      phoneNumberValid ){
      setIsValidData(true)
      } else{
          setIsValidData(false)
      }
   },[listHoueForm, phoneNumberValid])

   const handleListHouse = async()=>{
    const token = localStorage.getItem('token')
    const config={
        method:"POST",
         url :'https://house-hunter-server-psi.vercel.app/api/owner/list-house',
         data:listHoueForm,
         headers: {
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`
          },
    }
    try {
        const res = await axios(config);
        setAppLoading(false);
        if (res.status == 200) {
          await Swal.fire({
            icon: "success",
            title: "House listed successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/owner");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wromg",
            showConfirmButton: false,
            timer: 1500,
          });
          setAppLoading(false);
        }
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
   return (
    <>
      <h1 className="my-4 text-center uppercase text-2xl font-semibold">
        Add a new house
      </h1>
      <hr className="mx-4" />
      <HouseForm formData={listHoueForm} setFormData={setListHouseForm} setPhoneNumberValid={setPhoneNumberValid} phoneNumberValid={phoneNumberValid}/>
      <button
         className={`mx-auto block mb-4 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none dark:focus:ring-primary ${
          !isValidData ? 'bg-gray-400' : 'bg-button-color hover:bg-primary dark:bg-blue-600 dark:hover:bg-blue-700'
        }`}
        disabled={!isValidData && true}
      onClick={handleListHouse}>
            Submit
          </button>
    </>
  );
};
export default ListAHouse;
