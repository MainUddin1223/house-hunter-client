import axios from "axios";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AppLoader from "../../components/appLoader/AppLoader";
import HouseForm from "../../components/houseForm/HouseForm";
import { useAppContext } from "../../contextProvider/useAppContext";
import './AddHouse.css';
const AddHouse = () => {
  const picture =
    "https://images.freeimages.com/images/previews/675/house-3-1232901.jpg";
   const [listHoueForm,setListHouseForm] = useState({picture,availableFrom:new Date().toISOString().slice(0, 10)})
  //  const [phoneNumberValid,setPhoneNumberValid] = useState(true);
   const [isValidData, setIsValidData] = useState(false);
   const { appLoading,setAppLoading } = useAppContext();
   const navigate = useNavigate();
   
   useMemo(()=>{
    if(listHoueForm?.name &&
      listHoueForm?.phoneNumber &&
      listHoueForm?.address &&
      listHoueForm?.city &&
      listHoueForm?.rent &&
      listHoueForm?.bedrooms &&
      listHoueForm?.bathrooms &&
      listHoueForm?.roomSize &&
      listHoueForm?.availableFrom &&
      listHoueForm?.description){
      setIsValidData(true)
      } else{
          setIsValidData(false)
     }
   },[listHoueForm])

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
  if (appLoading) {
    return <AppLoader />;
  }
   return (
     <>
       <h2 className="owner-add-house-header">Add a new house</h2>
       <div className="add-house-container">
         <HouseForm
           formData={listHoueForm}
           setFormData={setListHouseForm}
          //  setPhoneNumberValid={setPhoneNumberValid}
          //  phoneNumberValid={phoneNumberValid}
         />
         <button
           className={`submit-button ${
             !isValidData
               && "submit-button-disabled "
              
           }`}
           disabled={!isValidData && true}
           onClick={handleListHouse}
         >
           Submit
         </button>
       </div>
     </>
   );
};
export default AddHouse;
