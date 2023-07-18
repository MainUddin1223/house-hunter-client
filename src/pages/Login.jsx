import axios from "axios";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { useAppContext } from "../contextProvider/useAppContext";
import Layout from "../layout/Layout";

const Login = () => {
  const { setAppLoading, appLoading, setUserData } = useAppContext();
  const [loginForm, setLoginForm] = useState({});
  const [isValidData, setIsValidData] = useState(false);
  const navigate = useNavigate();

  useMemo(() => {
    if (loginForm?.email && loginForm?.password) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }
  }, [loginForm]);
  
  const handleLogin = async (event) => {
    event.preventDefault();
    setAppLoading(true);
    const config = {
      method: "POST",
      url: "https://house-hunter-server-psi.vercel.app/api/auth/login",
      data: loginForm,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios(config);
      setAppLoading(false);
      if (res.status == 200) {
        await Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setUserData(res.data.result);
        localStorage.setItem("token", res.data.accessToken);
        if (res.data?.result?.role === "owner") {
          navigate("/owner");
        } else {
          navigate("/");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed",
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
  };

  if (appLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="">
        <div className="w-full mx-auto md:mt-16 mt-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to House Hunter
            </h5>
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
                  setLoginForm((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                }}
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
                  setLoginForm((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                }}
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5"></div>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none dark:focus:ring-primary ${
                !isValidData
                  ? "bg-gray-400"
                  : "bg-button-color hover:bg-primary dark:bg-blue-600 dark:hover:bg-blue-700"
              }`}
              disabled={!isValidData && true}
              onClick={(event) => handleLogin(event)}
            >
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link to="/register" className="text-blue-500">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
