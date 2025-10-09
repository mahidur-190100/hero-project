import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { addToStoreApp } from "../../Utility/addToDB";
import { ToastContainer, toast } from "react-toastify";


import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { Id } = useParams();
  const data = useLoaderData();
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
    description,
    ratings,
  } = AppCard;

  const handleInstall = (id) => {
    const res = addToStoreApp(id);
    if (res?.status === "added") {
      toast.success("Added to Installation");
    } else if (res?.status === "exists") {
      toast.info("Already Installed");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-[#D9D9D9] pb-10">
      {/* Place ToastContainer once (root is ideal) */}
      <ToastContainer position="bottom-right" autoClose={1600} theme="colored" />

      <div className=" mx-auto w-11/12">
        <div className="hero min-h-screen items-center justify-items-start border-b-2 border-gray-500">
          <div className="hero-content w-full flex-col lg:flex-row gap-6 lg:gap-10">
            <img
              src={image}
              className="w-full h-auto max-w-full sm:max-w-sm rounded-lg shadow-2xl"
            />
            <div className="w-full">
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

              <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-20 mt-6">
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

              <div
                className="btn bg-[#00D390] inter-font text-white mt-10"
                onClick={() => handleInstall(AppCard.id)}  // pass numeric id to avoid type issues
              >
                Install Now<span className="inter-font">({size}</span>MB)
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <h3 className="inter-font text-4xl font-bold"> Ratings</h3>
          <div className=" p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratings} layout="vertical" margin={{ top: 8, right: 20, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" activeBar={<Rectangle stroke="orange" />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border-t-2  border-gray-500 mt-10">
          <h1 className="inter-font text-4xl font-bold mt-10">Description </h1>
          <p className="inter-font mt-10  text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;












// import React, { useState, useEffect } from "react";

// function Card({ app }) {
//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     // Check if this app is already in localStorage
//     const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     setIsInstalled(installedApps.some(item => item.id === app.id));
//   }, [app.id]);

//   const handleInstall = () => {
//     if (isInstalled) return; // prevent double click

//     const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     installedApps.push(app);
//     localStorage.setItem("installedApps", JSON.stringify(installedApps));

//     setIsInstalled(true);
//   };

//   return (
//     <div className="card">
//       <h3>{app.name}</h3>
//       <button
//         onClick={handleInstall}
//         disabled={isInstalled}
//         className={`px-4 py-2 rounded ${
//           isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white"
//         }`}
//       >
//         {isInstalled ? "Installed" : "Install"}
//       </button>
//     </div>
//   );
// }

// export default Card;