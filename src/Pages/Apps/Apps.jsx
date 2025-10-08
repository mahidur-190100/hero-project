import React from "react";
import AppCard from "./AppCard";
import { useLoaderData } from "react-router";


const Apps = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-[#D9D9D9]">
      <div className=" w-11/12 mx-auto">
        <div className="text-center py-8 inter-font ">
          <h1 className="text-4xl font-bold mt-10 mb-6 md:mb-7">
            Our All Applications
          </h1>
          <p className="text-[#627382] inter-font">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center py-5">
          <h1 className="font-bold">
            <span>{data.length}</span> Apps Found
          </h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto justify-items-center">
          {data.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
