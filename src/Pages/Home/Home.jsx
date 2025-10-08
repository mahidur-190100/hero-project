import React from "react";
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
      
    </div>
  )
};

export default Home;
