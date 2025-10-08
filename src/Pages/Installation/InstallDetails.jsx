import React from "react";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

const InstallDetails = ({ app, onUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className="bg-[#D9D9D9] py-5">
      <div>
        <div className="hero flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between bg-white p-4 md:p-6 rounded-xl shadow-md gap-4">
          <div className="hero-content w-full flex flex-col lg:flex-row gap-6 md:gap-10 justify-start">
            <img
              src={image}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-2xl"
              alt={title}
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold break-words">{title}</h1>
              <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-14 mt-4">
                <div className="flex items-center gap-2 text-base md:text-xl font-bold inter-font">
                  <PiDownloadSimpleThin className="text-[#00D390]" />
                  <span>{downloads}</span>
                </div>
                <div className="flex items-center gap-2 text-base md:text-xl font-bold inter-font">
                  <IoIosStar className="text-yellow-500" />
                  <span>{ratingAvg}</span>
                </div>
                <div className="flex items-center gap-2 text-base md:text-xl font-bold inter-font">
                  <span>{size} MB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <div
              className="btn bg-[#00D390] inter-font text-white mt-4 sm:mt-10 w-full sm:w-auto"
              onClick={() => onUninstall?.(id)}
            >
              Uninstall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallDetails;