import React from "react";
import Logo from "next/image";

const navigationBar = () => {
  return (
    <nav className="bg-black flex">
      <div className="h-20 ml-20 p-5 flex cursor-pointer">
        <Logo className="" src="/logo.png" width={70} height={70} />
        <h1 className="text-4xl text-blue-400 font-extrabold">kon</h1>
      </div>
      <div className=" h-20 p-7 w-full">
        <a className="text-lg mx-5 float-right tracking-wider text-white hover:text-blue-400 font-bold transition-all cursor-pointer">
          about
        </a>
        <a className="text-lg mx-5 float-right tracking-wider text-white hover:text-blue-400 font-bold transition-all cursor-pointer">
          manga
        </a>
        <a className="text-lg mx-5 float-right tracking-wider text-white hover:text-blue-400 font-bold transition-all cursor-pointer">
          anime
        </a>
        <a className="text-lg mx-5 float-right tracking-wider text-white hover:text-blue-400 font-bold transition-all cursor-pointer">
          home
        </a>
      </div>
    </nav>
  );
};

export default navigationBar;
