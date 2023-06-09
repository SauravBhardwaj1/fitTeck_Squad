import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute ">
              <div className="">
                <h1 className="mt-32 text-gray-800 font-bold text-4xl">
                  Good health starts with what you eat.
                </h1>
                <p className="mt-16 text-gray-800 text-xl">
                  Want to eat more mindfully? Track meals, learn about your
                  habits, and reach your goals with us.
                </p>
                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  <Link to="/register" className="cursor-pointer z-10">
                    Join Now!
                  </Link>
                </button>
              </div>
            </div>
            <div className="pl-16">
              <a href="/register">
                <img
                  src="https://img.icons8.com/?size=512&id=849FtKgMBZe1&format=png"
                  className="opacity-10 z-0"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=828&q=75"
            alt="healthy"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
