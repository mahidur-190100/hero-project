
import React, { useState } from "react";
import AppCard from "./AppCard";
import { Link, useLoaderData } from "react-router";
import appErrorImg from "../../assets/App-Error.png";

const Apps = () => {
  const data = useLoaderData();
  // console.log(data);
  const [search, setSearch] = useState("");
  // console.log(search)
  const term = search.trim().toLocaleLowerCase();
  const searchedApp = term
    ? data.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : data;
  // console.log(searchedApp);

  return (
    <div className="bg-[#D9D9D9] pb-6">
      <div className="w-11/12 mx-auto">
        <div className="text-center py-8 inter-font ">
          <h1 className="text-4xl font-bold mt-10 mb-6 md:mb-7">
            Our All Applications
          </h1>
          <p className="text-[#627382] inter-font">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center py-5">
          <h1 className="font-bold inter-font text-xl">
            <span>{searchedApp.length}</span> Apps Found
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
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 place-items-stretch">
          {searchedApp.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center gap-4 py-10 text-center">
              <img src={appErrorImg} alt="" />
              <p className="text-center text-4xl col-span-full inter-font font-bold">
                OPPS!! APP NOT FOUND
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inter-font text-white"
              >
                Go Back!
              </button>
            </div>
          ) : (
            searchedApp.map((app) => <AppCard key={app.id} app={app} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
