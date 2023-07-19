/* eslint-disable react/prop-types */

const HouseForm = ({
  formData,
  setFormData,
  setPhoneNumberValid,
  phoneNumberValid,
}) => {
  const handlePhoneNumber = (event) => {
    const phoneNumber = event.target.value;
    const regex = /^\+88\d{11}$/;
    if (!regex.test(phoneNumber) && formData?.phoneNumber) {
      setPhoneNumberValid(false);
    } else {
      setPhoneNumberValid(true);
    }
  };

  return (
    <>
      <div className="p-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
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
            value={formData?.name??''}
            required
          />
        </div>
        <div className="flex gap-4 my-4">
          <div className="flex-auto">
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
              value={formData?.address ?? ''}
              required
            />
          </div>
          <div className="flex-auto">
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
              value={formData?.city ?? ''}
              required
            />
          </div>
        </div>
        <div className="flex gap-4 my-4">
          <div className="flex-auto">
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
              value={formData?.rent ?? ''}
              required
            />
          </div>
          <div className="flex-auto">
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
              onBlur={handlePhoneNumber}
              value={formData?.phoneNumber ?? ""}
              required
            />
            {!phoneNumberValid && (
              <p className="text-red-700">Invalid phone number</p>
            )}
          </div>
        </div>
        <div className="flex gap-4 my-4">
          <div className="flex-auto">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bedrooms *
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Bedrooms"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  bedrooms: event.target.value,
                }));
              }}
              value={formData?.bedrooms ?? ''}
              required
            />
          </div>
          <div className="flex-auto">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bathrooms *
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Bathrooms"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  bathrooms: event.target.value,
                }));
              }}
              value={formData?.bathrooms ?? ''}
              required
            />
          </div>
          <div className="flex-auto">
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
              value={formData?.roomSize ?? ''}
              required
            />
          </div>
        </div>
        <div className="my-4">
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
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description *
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description..."
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                description: event.target.value,
              }));
            }}
            value={formData?.description ?? ''}
          />
        </div>
      </div>
    </>
  );
};
export default HouseForm;
