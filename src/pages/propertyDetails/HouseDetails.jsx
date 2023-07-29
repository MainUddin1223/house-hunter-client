import axios from "axios";
import { useEffect, useState } from "react";
import { BiBath, BiBed, BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";
import { useAppContext } from "../../contextProvider/useAppContext";
import Layout from "../../layout/Layout";
import "./HouseDetails.css";

const HouseDetails = () => {
  const params = useParams();
  const [houseData, setHouseData] = useState({});
  const { setAppLoading, appLoading, userData } = useAppContext();
  const navigate = useNavigate();

  //get house by id
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


  //Book house function
  const handleBooking = async () => {
    const bookingData = {
      phoneNumber:userData.phoneNumber
    };
    setAppLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      method: "POST",
      url: `https://house-hunter-server-psi.vercel.app/api/renter/house/${params?.id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: bookingData,
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
  };

  useEffect(() => {
    getHouseById();
  }, []);
  
  if (appLoading) {
    return <Loader />;
  }

  //confirmation modal
  const handleButtonClick = () => {
    Swal.fire({
      title: "Do you want rent this house?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: `Not now`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleConfirm()
      } else if (result.isDenied) {
        Swal.fire('Request cenceled');
      }
    });
  };


  const handleConfirm = () => {
if (userData?.role === 'owner') {
      Swal.fire({
        icon: "error",
        title: "You are owner!",
        text: "You can not book a house",
      });
    } else {
      handleBooking();
    }
  };
  
  return (
    <>
      <Layout>
        <div className="house-container">
          <div className="house-details-container">
            <div className="property-img">
              <img src={houseData?.picture} alt="" className="max-full" />
            </div>
            <div>
              {houseData.isBooked ? (
                <div className="house-tags">
                  <p style={{ color: "red" }}>#Not_available</p>
                  <p style={{ color: "pink" }}>#Booked</p>
                </div>
              ) : (
                <div className="house-tags">
                  <p style={{ color: "green" }}>#Available</p>
                  <p style={{ color: "pink" }}>#Book_now</p>
                  <p style={{ color: "indigo" }}>#Ready_to_handover</p>
                  <p style={{ color: "red" }}>#Limited</p>
                </div>
              )}
            </div>
            <h1 className="details-header">The information you need to know</h1>
            <div className="details-section">
              <p className="house-name">{houseData.name}</p>
              <div className="">
                <p style={{ fontWeight: "600" }}>{houseData.description}</p>
              </div>
              <div className="more-details-section">
                <div>
                  <BiPhoneCall />
                  <p>{houseData.phoneNumber}</p>
                </div>
                <div>
                  <MdOutlineLocationOn />
                  <p>{houseData.city}</p>
                </div>
                <div>
                  <BiBath />
                  <p>{houseData.bathrooms}</p>
                </div>
                <div>
                  <BiBed />
                  <p>{houseData.bedrooms}</p>
                </div>
              </div>
            </div>
            <button className="house-book-button">Explore more</button>
          </div>
          <div className="book-house-section">
            <div className="booking-status">
              <p className="rent-amount">
                <span> ${houseData.rent}</span>/Month
              </p>
              <p>
                {houseData.sisBooked ? (
                  <span>Not available</span>
                ) : (
                  <span className="house-status">Available</span>
                )}
              </p>
            </div>
            <hr style={{ width: "90%", color: "gray" }} />

            <div className="bath-bed-rooms">
              <div className="house-area">
                <BiBath />
                <input type="text" value={houseData.bathrooms} readOnly />
              </div>
              <div className="house-area">
                <BiBed />
                <input type="text" value={houseData.bathrooms} readOnly />
              </div>
            </div>
            <div className="house-area">
              <p>Area</p>
              <input type="text" value={`${houseData.roomSize}sqft`} readOnly />
            </div>
            <div className="userInfo">
              <p>Email</p>
              <input type="text" value={userData.email} readOnly />
            </div>
            <div className="userInfo">
              <p>Phone</p>
              <input type="text" value={userData.phoneNumber} readOnly />
            </div>
            <div className="userInfo">
              <p>Name</p>
              <input type="text" value={userData.fullName} readOnly />
            </div>
            <div>
              {houseData.isBooked ? (
                <button
                  className="house-book-button"
                  style={{ backgroundColor: "gray" }}
                  disabled={true}
                >
                  Not available
                </button>
              ) : (
                <button
                  className="house-book-button"
                  onClick={handleButtonClick}
                >
                  Book the House
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HouseDetails;
