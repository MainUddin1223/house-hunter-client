import UploadImg from "../components/UploadImg";

const ListAHouse = () => {
  const image =
    "https://images.freeimages.com/images/previews/675/house-3-1232901.jpg";
  return (
    <>
      <h1 className="my-4 text-center uppercase text-2xl font-semibold">
        Add a new house
      </h1>
      <hr className="mx-4" />
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
            // onChange={(event) => {
            //   setLoginForm((prev) => ({
            //     ...prev,
            //     email: event.target.value,
            //   }));
            // }}
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
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
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
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
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
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
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
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="+8801863802270"
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
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
              Bedrooms *
            </label>
            <input
              type="number"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Bedrooms"
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
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
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
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
              // onChange={(event) => {
              //   setLoginForm((prev) => ({
              //     ...prev,
              //     email: event.target.value,
              //   }));
              // }}
              required
            />
          </div>
        </div>
        <UploadImg />
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
          ></textarea>
          <button   className="block mx-auto px-8 uppercase tracking-widetext-xs font-bold  m-3 my-4 bg-button-color rounded text-white p-2 "
      >Submit</button>
        </div>
      </div>
    </>
  );
};
export default ListAHouse;
