import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen pt-20 items-center  flex flex-col space-y-6">
      <h1 className="pt-20 text-5xl md:text-7xl font-bold text-blue-500 text-center">
        Navigate to a Page
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-evenly w-full h-full lg:p-0 px-10 gap-6">
        <div className="h-1/2 w-4/5 md:w-full lg:w-1/3 hover:scale-105 duration-300 hover:cursor-pointer bg-slate-400 border-8 shadow-md shadow-black/30 text-center text-4xl md:text-6xl font-bold flex items-center justify-center">
          <a href="/courses" className="">
            Courses
          </a>
        </div>
        <div className="h-1/2 w-4/5 md:w-full lg:w-1/3 hover:scale-105 duration-300 hover:cursor-pointer bg-slate-400 border-8 shadow-md shadow-black/30 text-center text-4xl md:text-6xl font-bold flex items-center justify-center">
          <a href="/dashboard" className="">
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
