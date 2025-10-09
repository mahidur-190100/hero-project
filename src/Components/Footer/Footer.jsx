import React from "react";
import logoImg from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full m-0 mt-auto bg-neutral text-neutral-content">
      <div className="w-11/12 mx-auto py-8 flex flex-col sm:flex-row items-start justify-between gap-8">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <img className="h-10 w-10" src={logoImg} alt="HERO.IO logo" />
          <h1 className="text-xl font-semibold tracking-wide">HERO.IO</h1>
        </div>

        {/* Right: Social */}
        <div className="flex flex-col items-start">
          <h6 className="uppercase tracking-wide text-sm font-semibold mb-3">Social</h6>
          <div className="flex items-center gap-4">
            <a href="#">
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center py-2 inter-font">Copyright © 2025 - All right reserved</p>
    </footer>
  );
};

export default Footer;