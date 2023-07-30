import axios from "axios";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AppLoader from "../../components/appLoader/AppLoader";
import { useAppContext } from "../../contextProvider/useAppContext";
import Layout from "../../layout/Layout";
import './Login.css';

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
        } else if(res.data?.result?.role === "renter"){
          navigate("/renter");
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
    return <AppLoader />;
  }

  return (
    <Layout>
      <div className="login-section">
        <div className="login-container">
          <h2>Sign in to House Hunter</h2>
          <div className="">
            <form className="" action="#">
              <div className="email-div">
                <label htmlFor="email" className="">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=""
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
              <div className="email-div">
                <label htmlFor="password" className="">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=""
                  onChange={(event) => {
                    setLoginForm((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }));
                  }}
                  required
                />
              </div>
              <a href="#" className="lost-password">
                Lost Password?
              </a>
              <button
                type="submit"
                className={`login-button ${
                  !isValidData ?  "isInvalid-login-info":"isValid-login-info " 
                }`}
                disabled={!isValidData && true}
                onClick={(event) => handleLogin(event)}
              >
                Login
              </button>
              <div className="not-registered-section">
                Not registered?{" "}
                <Link to="/register" className="text-blue-500">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
