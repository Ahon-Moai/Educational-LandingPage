import React from "react";
import node from "../assets/assets/node.jpg";
import python from "../assets/assets/python.jpg";
import reacts from "../assets/assets/Untitled.png";
import "./cerd.css";
const Caard = () => {
  return (
    <>
      <div className="w-full  py-[2px] h-[1000px] bg-[#F0FBF7]">
        <div className=" max-w-[1220px] mx-auto">
          <div className="mb-14">
            <h1 className="mb-4  mt-28 font-medium text-4xl">
              Most Recent <span className="text-green-600">Courses</span>
            </h1>
            <p className="text-stone-500">
              Various versions have envolved over the years, sometimes by
              acccident,
            </p>
          </div>

          <div>
            <ul className="cards">
              <li className="cards__item">
                <div className="card">
                  <img
                    className="card__image card__image--fence"
                    src={node}
                    alt="C programming course"
                  ></img>

                  <div className="card__content">
                    <div className="card__title">NODEJS COURSE</div>
                    <p className="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.{" "}
                    </p>
                    <button className="btn btn--block card__btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <img
                    className="card__image card__image--fence"
                    src={python}
                    alt="C programming course"
                  ></img>

                  <div className="card__content">
                    <div className="card__title">PYTHON COURSE</div>
                    <p className="card__text">
                      This defines the ability for a flex item to grow if
                      necessary. It accepts a unitless value that serves as a
                      proportion. It dictates what amount of the available space
                      inside the flex container the item should take up.
                    </p>
                    <button className="btn btn--block card__btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <img
                    className="card__image card__image--fence"
                    src={reacts}
                    alt="C programming course"
                  ></img>

                  <div className="card__content">
                    <div className="card__title">REACTJS COURSE </div>
                    <p className="card__text">
                      This defines the ability for a flex item to shrink if
                      necessary. Negative numbers are invalid.
                    </p>
                    <button className="btn btn--block card__btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="absolute left-[46%] hover:bg-green-500 hover:animate-none  hover:text-white mt-[56px] text-green-700 border border-green-800 py-2 px-4">
          Load More
        </button>
      </div>
    </>
  );
};

export default Caard;
