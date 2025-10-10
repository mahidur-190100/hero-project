// Components/Spinner/Spinner.jsx
import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-3xl">I am loading</p>
    </div>
  );
};

export default Spinner;
