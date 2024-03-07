import React from "react";
import cta from "../assets/assets/cta.png";
const Cta = () => {
  return (
    <>
      <div className="max-w-full h-[500px] bg-[#F0FBF7]">
        <div className="max-w-[1220px]  mx-auto ">
          <div className="flex flex-row ">
            <img className="h-[370px]" src={cta} alt="Cta" />

            <div className="flex flex-col ml-44 mt-32 mr-56">
              <h1 className="text-4xl font-bold w-[620px]  ">
                Join World's largest learning platform today{" "}
              </h1>
              <p className="py-4">Start learning by registering for free</p>
              <button className="px-4 py-2 text-white font-semibold bg-green-400 font-sans rounded-md w-[50%]">
                Sign Up For Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
