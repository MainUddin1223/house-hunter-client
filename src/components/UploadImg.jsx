import { useEffect, useRef } from "react";

const UploadImg = () => {
  const cloudinaryRef = useRef(null);
  const widgetRef = useRef(null);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef?.current?.createUploadWidget(
      {
        cloudName: "dld6ete1x",
        uploadPreset: "orz0h6jl",
        multiple: true,
        maxFiles: 1,
      },
      function (error, result) {
        if (result && result.event === "queues-end") {
          result.info.files.map((info) => console.log(info.uploadInfo.url));
        }
      }
    );
  }, []);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(widgetRef,cloudinaryRef)
          widgetRef?.current.open();
        }}
        className="block uppercase tracking-widetext-xs font-bold  m-3 my-4 bg-button-color rounded text-white p-2 "
      >
        Choose a Photo
      </button>
    </div>
  );
};
export default UploadImg;
