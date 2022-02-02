import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-gradient-to-r mx-2 my-5 rounded-lg from-blue-500 to-blue-800 w-1/3 h-auto text-white mx-auto max-w-md overflow-hidden cursor-pointer md:max-w-2xl">
      <div className="md:flex">
        <div
          className="md-shrink"
          style={{
            width: "200px",
            height: "20rem",
            position: "relative",
          }}
        >
          <Image src="/mydressupdarliing.jpg" objectFit="cover" layout="fill" />
        </div>
        <div className="p-8">
          <h1 className="text-xl font-extrabold h-1/4">My Dress-up Darling</h1>
          <p className="h-1/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
          </p>
          <button className="border-2 border-white p-5 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
