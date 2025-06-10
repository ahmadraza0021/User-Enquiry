import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (

      <div className="flex gap-x-72 items-center justify-around h-20 bg-[#00181F] text-white font-semibold">
          <img className="w-12 h-12" src="logo1.png" alt="" />
        <div className="flex gap-x-8 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/service"}>Services</Link>
          <Link to={"/career"}>Careers</Link>
          <Link to={"/contact"}><button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md">Contact Us</button></Link>

        </div>
      </div>
  );
};

export default Navbar;
