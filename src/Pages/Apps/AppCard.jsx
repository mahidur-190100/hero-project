import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, downloads, ratingAvg, title, companyName,id } = app;
  return (
    <div>
      <Link to={`/AppDetails/${id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              {title} : {companyName}
            </h2>
            <div className="card-actions">
              <button className="btn btn-primary">{downloads}</button>
              <button className="btn btn-primary">{ratingAvg}</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
