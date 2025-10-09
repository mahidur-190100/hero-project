import React from "react";
import { Link } from "react-router";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

const BannerCard = ({ app }) => {
  // console.log( typeof app);

  const { image, downloads, ratingAvg, title, companyName, id } = app;
  return (
    <Link to={`/AppDetails/${id}`}>
      <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              {title} : {companyName}
            </h2>
            <div className="flex items-center justify-between w-full mt-2">
              <span className="inline-flex w-fit items-center rounded-xl bg-[#F1F5E8] px-2 py-0.5 text-lg  text-[#00D390] inter-font">
                <PiDownloadSimpleThin /> {downloads}
              </span>
              <span className="inline-flex w-fit items-center rounded-xl  bg-[#FFF0E1] px-2 py-0.5 text-lg  text-[#FF8811] inter-font">
                <IoIosStar /> {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
