import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { addToStoreApp } from "../../Utility/addToDB";

const AppDetails = () => {
  const { Id } = useParams();
  // console.log(Id)
  const data = useLoaderData();
  // Ensure data is an array before using .find
  const items = Array.isArray(data) ? data : data?.apps ?? [];
  const AppCard = items.find((app) => app.id === parseInt(Id));

  if (!AppCard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center">App not found.</p>
      </div>
    );
  }

  const {
    image,
    downloads,
    ratingAvg,
    title,
    companyName,
    reviews,
    size,
    description
  } = AppCard;

  const handleInstall =Id =>{
    // store with id
    // where to stroe
    // array of collection
    // exist check
    // not exist push
    addToStoreApp(Id)
  }
  return (
    <div className="bg-[#D9D9D9]">
      <div className=" mx-auto w-11/12">
        <div className="hero min-h-screen items-center justify-items-start">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <div className="border-b-2 border-gray-500 ">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6 inter-font font-bold">
                  Developed by:
                  <span className="inter-font text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    {" "}
                    {companyName}{" "}
                  </span>{" "}
                </p>
              </div>

              <div className="flex gap-20 mt-6">
                <div>
                  <img src={downloadImg} alt="" />
                  <h1 className="inter-font">Downloads</h1>
                  <p className="text-3xl font-bold inter-font">{downloads}</p>
                </div>
                <div>
                  <img src={ratingsImg} alt="" />
                  <h1 className="inter-font">Average Ratings</h1>
                  <p className="text-3xl font-bold inter-font">{ratingAvg}</p>
                </div>
                <div>
                  <img src={reviewImg} alt="" />
                  <h1 className="inter-font">Total Reviews</h1>
                  <p className="text-3xl font-bold inter-font">{reviews}</p>
                </div>
              </div>
              <Link to="/Install">
                <div className="btn bg-[#00D390] inter-font text-white mt-10" onClick={()=>handleInstall(Id)} >
                    Install Now<span className="inter-font">({size}</span>MB)
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="border-t-2  border-gray-500">
          <h1 className="inter-font text-xl font-semibold">Description </h1>
          <p className="inter-font mt-10  text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
