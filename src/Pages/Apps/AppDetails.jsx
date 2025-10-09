import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { addToStoreApp } from "../../Utility/addToDB";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
    description,
    ratings,
  } = AppCard;

  const handleInstall = (Id) => {
    // store with id
    // where to stroe
    // array of collection
    // exist check
    // not exist push
    addToStoreApp(Id);
  };
  return (
    <div className="bg-[#D9D9D9] pb-10">
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

              {/* Allow wrap on mobile */}
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

              <Link to="/Installation">
                <div
                  className="btn bg-[#00D390] inter-font text-white mt-10"
                  onClick={() => handleInstall(Id)}
                >
                  Install Now<span className="inter-font">({size}</span>MB)
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* barchart */}
        <div className="space-y-3 mt-4">
          <h3 className="inter-font text-4xl font-bold"> Ratings</h3>
          <div className="p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratings} // <-- use the ratings array
                layout="vertical" // <-- vertical layout puts names on Y axis
                margin={{ top: 8, right: 20, left: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar
                  dataKey="count" // <-- bar value is count
                  fill="#FF8811"
                  activeBar={<Rectangle stroke="orange" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* description */}
        <div className="border-t-2  border-gray-500 mt-10">
          <h1 className="inter-font text-4xl font-bold mt-10">Description </h1>
          <p className="inter-font mt-10  text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

// "ratings": [
//       { "name": "1 star", "count": 70 },
//       { "name": "2 star", "count": 120 },
//       { "name": "3 star", "count": 500 },
//       { "name": "4 star", "count": 1300 },
//       { "name": "5 star", "count": 1950 }
//     ]
