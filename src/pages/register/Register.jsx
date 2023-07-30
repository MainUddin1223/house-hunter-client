import axios from "axios";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import AppLoader from "../../components/appLoader/AppLoader";
import { useAppContext } from "../../contextProvider/useAppContext";
import Layout from "../../layout/Layout";
import './Register.css';

const Register = () => {
  const [registerForm, setRegisterForm] = useState({});
  // const [isPhoneNumberValid,setIsPhoneNumberValid] = useState(true);
  const [isValidData,setIsValidData]=useState(false);
  const { setUserData } = useAppContext();
  const [isLoadig,setIsLoading] = useState(false)
  const navigate = useNavigate();
  
  useMemo(()=>{
    
    if(registerForm?.fullName &&
        registerForm?.phoneNumber &&
        registerForm?.email &&
        registerForm?.role &&
        registerForm?.password ){
        setIsValidData(true)
        } else{
            setIsValidData(false)
        }
            
  },[registerForm])
  
  // const handlePhoneNumber = (event) => {
  //   const phoneNumber = event.target.value;
  //   const regex = /^\+88\d{11}$/;
  //   if (regex.test(phoneNumber)) {
  //       setIsPhoneNumberValid(true)
  //   }else{
  //       setIsPhoneNumberValid(false)

  //   }
  // };

  const handleRegister = async(event)=>{
    event.preventDefault()
    const config={
        method:"POST",
         url :'https://house-hunter-server-psi.vercel.app/api/auth/register',
         data:registerForm,
         headers: {
            'Content-Type': 'application/json'
          },
    }
    try {
      setIsLoading(true);
        const res = await axios(config);
      if (res.status == 200) {
                setIsLoading(false);
          localStorage.setItem("token", res.data.accessToken);
          await Swal.fire({
            icon: "success",
            title: "Registration successfull",
            showConfirmButton: false,
            timer: 1500,
          });
           setUserData(res.data.result);
           if(res.data?.result?.role === 'owner'){
             navigate("/owner");
           }else if(res.data?.result?.role === 'renter'){
            navigate("/renter");
           }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration failed",
            showConfirmButton: false,
            timer: 1500,
          });
                setIsLoading(false);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      }
    
  }

  if (isLoadig) {
    return<AppLoader/>
  }
  return (
    <Layout>
      <div className="register-section">
        <div className="register-container">
          <h2>Register in to House Hunter</h2>
          <form className="=" action="#">
            <div className="email-div">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                onChange={(event) => {
                  setRegisterForm((prev) => ({
                    ...prev,
                    fullName: event.target.value,
                  }));
                }}
                value={registerForm?.fullName ?? ""}
                required
              />
            </div>
            <div className="role-div">
              <p>Your Role</p>
              <select
                onChange={(event) =>
                  setRegisterForm((prev) => ({
                    ...prev,
                    role: event.target.value,
                  }))
                }
              >
                <option value="">Select one</option>
                <option value="owner">Owner</option>
                <option value="renter">Renter</option>
              </select>
            </div>
            <div className="email-div">
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
                  setRegisterForm((prev) => ({
                    ...prev,
                    phoneNumber: event.target.value,
                  }));
                }}
                value={registerForm?.phoneNumber ?? ""}
                required
              />
            </div>
            <div className="email-div">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                onChange={(event) => {
                  setRegisterForm((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                }}
                value={registerForm?.email ?? ""}
                required
              />
            </div>
            <div className="email-div">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(event) => {
                  setRegisterForm((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                }}
                value={registerForm?.password ?? ""}
                required
              />
            </div>
            <button
              type="submit"
              className={`register-button  ${
                !isValidData
                  ? "isInvalid-register-info"
                  : "isValid-register-info"
              }`}
              disabled={!isValidData && true}
              onClick={handleRegister}
            >
              Register
            </button>
            <div className="already-registered">
              Already registered?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Register;
