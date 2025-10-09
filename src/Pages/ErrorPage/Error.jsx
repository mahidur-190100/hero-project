import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import errorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen mx-auto">
        <div className="col-span-full flex flex-col items-center justify-center gap-4 py-10 text-center">
          <img src={errorImg} alt="" />
          <p className="text-center text-4xl col-span-full inter-font font-bold">
            OPPS!! PAGE NOT FOUND
          </p>
          <Link to="/">
            <button
              type="button"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inter-font text-white"
            >
              Go Back!
            </button>
          </Link>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Error;
