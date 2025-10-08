import React from "react";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";



const InstallDetails = ({ app }) => {
  // console.log(app);
  const { image, title, downloads, ratingAvg, size } = app;
 
 
  return (
    <div className="bg-[#D9D9D9] py-5">
      <div>
        <div className="hero flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
          {/* Left side content */}
          <div className="hero-content flex-col lg:flex-row gap-10 justify-start">
            {/* Smaller image */}
            <img
              src={image}
              className="w-24 h-24 object-cover rounded-lg shadow-2xl"
              alt={title}
            />
            <div>
              <h1 className="text-xl font-bold">{title}</h1>

              <div className="flex gap-14 mt-4">
                {/* Downloads with icon */}
                <div className="flex items-center gap-2 text-xl font-bold inter-font">
                  <PiDownloadSimpleThin className="text-[#00D390]" />
                  <span>{downloads}</span>
                </div>

                {/* Rating with icon */}
                <div className="flex items-center gap-2 text-xl font-bold inter-font">
                  <IoIosStar className="text-yellow-500" />
                  <span>{ratingAvg}</span>
                </div>

                {/* Size */}
                <div className="flex items-center gap-2 text-xl font-bold inter-font">
                  <span>{size} MB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side button */}
          <div>
            <div className="btn bg-[#00D390] inter-font text-white mt-10 ">
              Uninstall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallDetails;