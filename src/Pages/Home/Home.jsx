import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#D9D9D9]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
