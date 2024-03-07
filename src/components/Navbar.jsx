import React from "react";
import logo from "../assets/assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="w-full py-2 h-[80px] bg-white border-b">
        <div className="mt-4 max-w-[1220px] mx-auto">
          <div className="flex justify-between">
            <img src={logo} className="h-[24px] mt-2" alt="logo" />
            <ul className="flex gap-4 absolute left-[40%] mt-2">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platform</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex absolute right-0 top-[0] mt-6 mr-16">
            <button className="mr-4 ">Login</button>
            <button
              className="bg-green-800
          rounded-md hover:rounded-none duration-300  py-2 px-6 text-gray-300"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
