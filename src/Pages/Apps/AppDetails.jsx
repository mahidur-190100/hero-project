import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";

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

  const { image, downloads, ratingAvg, title, companyName, reviews,size } = AppCard;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <div className="border-b-2 border-gay pb-6">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-6">Developed by: {companyName}</p>
            </div>

            <div className="flex gap-4 mt-6">
              <div>
                <img src={downloadImg} alt="" />
                <h1>Downloads</h1>
                <p>{downloads}</p>
              </div>
              <div>
                <img src={ratingsImg} alt="" />
                <h1>Average Ratings</h1>
                <p>{ratingAvg}</p>
              </div>
              <div>
                <img src={reviewImg} alt="" />
                <h1>Total Reviews</h1>
                <p>{reviews}</p>
              </div>
            </div>
            <div className="btn bg-[#00D390] inter-font text-white">
              Install<span>{size}</span>MB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
