import React from "react";
import HeroImg from "../assets/assets/heroImg.png";
import compLogo1 from "../assets/assets/company-logo-1.png";
import compLogo2 from "../assets/assets/company-logo-2.png";
import compLogo3 from "../assets/assets/company-logo-3.png";
import compLogo4 from "../assets/assets/company-logo-4.png";
import { CiSearch } from "react-icons/ci";
const Hero = () => {
  return (
    <>
      <div className="max-w-full h-[800px] bg-white ">
        <div className="max-w-[1220px] mx-auto">
          <p className="mt-28 text-green-700  text-3xl font-medium">
            START TO SUCCESS
          </p>

          <h3 className="py-8 text-[56px] w-[700px] font-semibold ">
            Access To <span className="text-green-600">5000+</span> Courses from{" "}
            <span className="text-green-600">300+</span> Instructors &
            Institutions
          </h3>
          <img
            src={HeroImg}
            className="absolute right-0 top-[30%] h-[420px]"
            alt="IMG"
          ></img>
          <p className="text-stone-800">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <div className="flex">
            <input
              className="mt-9 w-[40%] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              placeholder="What do you want to learn?"
            ></input>
            <CiSearch
              className="bg-green-900 flex mt-10 rounded-sm hover:cursor-pointer "
              color={"#FFF"}
              size={32}
            />
          </div>
        </div>

        <div className="text-center mt-40 text-[#536E96]">
          <h1 className="text-3xl font-bold">
            Trusted by over 25,000 teams around the world
          </h1>
          <p className="py-7">
            Leading companies use the same courses to help employees keep their
            skills fresh.
          </p>
          <div className="flex absolute left-[27%] ">
            <img
              src={compLogo1}
              className="hover:ml-10 hover:cursor-pointer  duration-300"
              alt="company logo"
            ></img>
            <img
              src={compLogo2}
              className="hover:ml-10  hover:cursor-pointer hover:mr-10 duration-300"
              alt="company logo"
            ></img>
            <img
              src={compLogo3}
              className="hover:ml-10 hover:cursor-pointer duration-300"
              alt="company logo"
            ></img>
            <img
              src={compLogo4}
              className="hover:ml-10 hover:cursor-pointer duration-300"
              alt="company logo"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
