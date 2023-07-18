import axios from "axios";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useAppContext } from "../contextProvider/useAppContext";
import Layout from "../layout/Layout";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({});
  const [isPhoneNumberValid,setIsPhoneNumberValid] = useState(true);
  const [isValidData,setIsValidData]=useState(false);
  const {setAppLoading,setUserData} = useAppContext()
  const navigate = useNavigate();
  
  useMemo(()=>{
    
    if(registerForm?.fullName &&
        registerForm?.phoneNumber &&
        registerForm?.email &&
        registerForm?.role &&
        registerForm?.password &&
        isPhoneNumberValid ){
        setIsValidData(true)
        } else{
            setIsValidData(false)
        }
            
  },[registerForm,isPhoneNumberValid])
  
  const handlePhoneNumber = (event) => {
    const phoneNumber = event.target.value;
    const regex = /^\+88\d{11}$/;
    if (regex.test(phoneNumber)) {
        setIsPhoneNumberValid(true)
    }else{
        setIsPhoneNumberValid(false)

    }
  };

  const handleRegister = async()=>{
    const config={
        method:"POST",
         url :'https://house-hunter-server-psi.vercel.app/api/auth/register',
         data:registerForm,
         headers: {
            'Content-Type': 'application/json'
          },
    }
    try {
        const res = await axios(config);
        setAppLoading(false);
        if (res.status == 200) {
          await Swal.fire({
            icon: "success",
            title: "Registration successfull",
            showConfirmButton: false,
            timer: 1500,
          });
           setUserData(res.data.result);
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration failed",
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
    <Layout>
      <div className="">
        <div className="w-full mx-auto md:mt-16 mt-4 max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Register in to House Hunter
            </h5>
            <div>
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
            <div className="flex gap-8">
                <p>Your Role</p>
              <select onChange={(event)=>setRegisterForm((prev)=>({...prev,role:event.target.value}))}>
                <option value="">Select one</option>
                <option value="owner">Owner</option>
                <option value="renter">Renter</option>
              </select>
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
                  setRegisterForm((prev) => ({
                    ...prev,
                    phoneNumber: event.target.value,
                  }));
                }}
                onBlur={handlePhoneNumber}
                value={registerForm?.phoneNumber ?? ""}
                required
              />
              {
                !isPhoneNumberValid && <p className="text-red-700">Invalid phone number</p>
              }
            </div>
            <div>
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
            <div>
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
              className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none dark:focus:ring-primary ${
                !isValidData ? 'bg-gray-400' : 'bg-button-color hover:bg-primary dark:bg-blue-600 dark:hover:bg-blue-700'
              }`}
              disabled={!isValidData && true}
              onClick={handleRegister}
            >
              Register
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link to='/login' className="text-blue-500">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Register;
