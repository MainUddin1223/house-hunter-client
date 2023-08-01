/* eslint-disable react/prop-types */
import './HouseForm.css';

const HouseForm = ({
  formData,
  setFormData,
  // setPhoneNumberValid,
  // phoneNumberValid,
}) => {
  // const handlePhoneNumber = (event) => {
  //   const phoneNumber = event.target.value;
  //   const regex = /^\+88\d{11}$/;
  //   if (!regex.test(phoneNumber) && formData?.phoneNumber) {
  //     setPhoneNumberValid(false);
  //   } else {
  //     setPhoneNumberValid(true);
  //   }
  // };
  return (
    <>
      <div className=" form-container">
        <div className="house-name-container">
          <label htmlFor="name" className="">
            House Name *
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-3/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="House name"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                name: event.target.value,
              }));
            }}
            value={formData?.name ?? ""}
            required
          />
        </div>
        <div className="house-name-container">
          <label htmlFor="message" className="">
            Description *
          </label>
          <textarea
            id="message"
            rows="4"
            className="description-box"
            placeholder="Description..."
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                description: event.target.value,
              }));
            }}
            value={formData?.description ?? ""}
          />
        </div>
        <div className="flex gap-4 my-4">
          <div className="house-name-container">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address *
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Address"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  address: event.target.value,
                }));
              }}
              value={formData?.address ?? ""}
              required
            />
          </div>

          <div className="house-name-container">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City *
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="City"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  city: event.target.value,
                }));
              }}
              value={formData?.city ?? ""}
              required
            />
          </div>
        </div>
        <div className="rent-phone-container">
          <div className="phone-container ">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rent amount *
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Rent aount"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  rent: event.target.value,
                }));
              }}
              value={formData?.rent ?? ""}
              required
            />
          </div>
          <div className="phone-container ">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number *
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="+8801545464568"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  phoneNumber: event.target.value,
                }));
              }}
              // onBlur={handlePhoneNumber}
              value={formData?.phoneNumber ?? ""}
              required
            />
            {/* {!phoneNumberValid && (
              <p className="text-red-700">Invalid phone number</p>
            )} */}
          </div>
        </div>
        <div className="rooms-containers">
          <div className="rooms">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bedrooms *
            </label>
            <div className="room-buttons">
              <button
                onClick={() => {
                  formData?.bedrooms && formData?.bedrooms > 1
                    ? setFormData((prev) => ({
                        ...prev,
                        bedrooms: Number(formData?.bedrooms) - 1,
                      }))
                    : setFormData((prev) => ({
                        ...prev,
                        bedrooms: "",
                      }));
                }}
              >
                -
              </button>
              <input
                type="number"
                name="name"
                id="name"
                placeholder="Bedrooms"
                onChange={(event) => {
                  setFormData((prev) => ({
                    ...prev,
                    bedrooms: event.target.value,
                  }));
                }}
                value={formData?.bedrooms ?? ""}
                required
              />
              <button
                onClick={() => {
                  formData?.bedrooms
                    ? setFormData((prev) => ({
                        ...prev,
                        bedrooms: Number(formData?.bedrooms) + 1,
                      }))
                    : setFormData((prev) => ({
                        ...prev,
                        bedrooms: 1,
                      }));
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="rooms">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bathrooms *
            </label>
            <div className="room-buttons">
              <button
                onClick={() => {
                  formData?.bathrooms && formData?.bathrooms > 1
                    ? setFormData((prev) => ({
                        ...prev,
                        bathrooms: Number(formData?.bathrooms) - 1,
                      }))
                    : setFormData((prev) => ({
                        ...prev,
                        bathrooms: "",
                      }));
                }}
              >
                -
              </button>
              <input
                type="number"
                name="name"
                id="name"
                placeholder="bathrooms"
                onChange={(event) => {
                  setFormData((prev) => ({
                    ...prev,
                    bathrooms: event.target.value,
                  }));
                }}
                value={formData?.bathrooms ?? ""}
                required
              />
              <button
                onClick={() => {
                  formData?.bathrooms
                    ? setFormData((prev) => ({
                        ...prev,
                        bathrooms: Number(formData?.bathrooms) + 1,
                      }))
                    : setFormData((prev) => ({
                        ...prev,
                        bathrooms: 1,
                      }));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="room-size-container">
          <div className="room-abailable-container">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Room size *
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Room size"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  roomSize: event.target.value,
                }));
              }}
              value={formData?.roomSize ?? ""}
              required
            />
          </div>
          <div className="room-abailable-container">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Available from *
            </label>
            <input
              type="date"
              id="start"
              name="trip-start"
              value={formData?.availableFrom}
              min={formData?.availableFrom}
              max="3000-12-31"
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  availableFrom: event.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HouseForm;
