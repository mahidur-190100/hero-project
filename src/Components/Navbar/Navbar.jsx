import React from "react";
import logoImg from "../../assets/logo.png";
import { Link, Links } from "react-router";
import { SiGithub } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to={"/Apps"}>
                <li>App</li>
              </Link>
              <Link to="/Installation">
                <li>Installation</li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center items-center gap-3">
              <img className="h-10" src={logoImg} alt="" />
              <h1 className="inter-font text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                HERO.IO
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 inter-font text-md gap-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to={"/Apps"}>
              <li>App</li>
            </Link>
            <Link to="/Installation">
              <li>Installation</li>
            </Link>
          </ul>
        </div>
        <Link className="navbar-end" to="https://github.com/mahidur-190100">
          <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inter-font text-white">
            <SiGithub />
            <span>Contribute</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
