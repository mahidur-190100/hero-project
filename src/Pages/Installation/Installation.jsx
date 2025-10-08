import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp } from "../../Utility/addToDB";
import InstallDetails from "./installDetails";

const Installation = () => {
  const [installAppList, setInstallAppList] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  const [sort,setSort]= useState("");
  useEffect(() => {
    const storeAppData = getStoreApp();
    // console.log(storeAppData)
    const ConvertedStoreAppData = storeAppData.map((app) => parseInt(app));
    // console.log(ConvertedStoreAppData)
    const installApp = data.filter((app) =>
      ConvertedStoreAppData.includes(app.id)
    );
    setInstallAppList(installApp);
  }, [data]);














const handleSort =(type)=>{
  setSort(type)
  if (type == "High-Low"){
    const sortedByHigh =[...installAppList].sort((a,b)=>b.downloads-a.downloads)
    setInstallAppList (sortedByHigh)
  }
  else{
    const sortedByHigh =[...installAppList].sort((a,b)=>a.downloads-b.downloads)
    setInstallAppList (sortedByHigh)
  }
}









  return (
    <div className="bg-[#D9D9D9]">
      <div className=" w-11/12 mx-auto">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold inter-font mb-5">
            Your Installed Apps
          </h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold inter-font">
              <span>{installAppList.length} Apps Found</span>
            </h1>
            <details className="dropdown">
              <summary className="btn m-1">Sort by : {sort?sort:""}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={()=>handleSort("High-Low")}>High-Low</a>
                </li>
                <li>
                  <a onClick={()=>handleSort("Low-High")}>Low-High</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div>
          {installAppList.map((app) => (
            <InstallDetails key={app.id} app={app}>
              {" "}
            </InstallDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
