import React from "react";
import heroImg from "../../assets/hero.png";
import Banner2 from "./Banner2";
import BannerCard from "./BannerCard";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const Banner = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <div className="text-center flex flex-col justify-center items-center gap-6 px-4  bg-gray-300 ">
        <h1 className="inter-font text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold mt-15">
          <span className="text-[#001931] ">We Build</span>
          <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <div className="flex justify-center items-center gap-4">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
             <IoLogoGooglePlaystore /> Play Store
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
            <IoLogoAppleAppstore /> App Store
          </button>
        </div>
        <img className="w-100%" src={heroImg} alt="" />
      </div>
      <Banner2> </Banner2>
      <div className="text-center my-10">
        <h1>Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
        {data.map((app) => (
          <BannerCard key={app.id} app={app}>
            {" "}
          </BannerCard>
        ))}
      </div>
      {/* // show more button */}
      <Link to="/Apps">
        <div className="w-full flex justify-center">
          <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inter-font text-white justify-center">
            <span>Show All</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
