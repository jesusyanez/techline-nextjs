import React from "react";
import Image from "next/image";
import Link from "next/link";

const Drumkits = ({ drumkit }) => {
  return (
    <a href={drumkit.url}>
      <div className="card w-full bg-purple-600 shadow-xl mb-3 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-102 hover:bg-white duration-300">
        <div class="flex items-center justify-between  text-white bg-purple-600 rounded-lg shadow-md mb-3">
          <div class="card-body flex flex-col px-4">
            <span class="text-xs text-purple-300">Breaking news</span>
            <p class="text-xl md:text-2xl font-semibold uppercase ">
              {drumkit.text}
            </p>
          </div>
          <img class="h-full py-2 pr-4 ml-8" src={drumkit.image}></img>
        </div>

        {/* <div className="flex px-6 justify-start h-16 pt-3">
          <img className="rounded-xl" src={drumkit.image} />
        </div>
        <div className="card-body p-6">
          <h2 className="card-title text-sm md:text-lg text-white">
            {drumkit.text}
          </h2>
        </div> */}
      </div>

      {/* <div class="flex items-center justify-center">
        <div class="flex items-center justify-between h-24 text-white bg-purple-600 rounded-lg shadow-md mb-3">
          <div class="flex flex-col px-4">
            <span class="text-xs text-purple-300">Breaking news</span>
            <p class="text-xl md:text-2xl font-semibold uppercase ">
              {drumkit.text}
            </p>
          </div>
          <img class="h-full py-2 pr-4 ml-8" src={drumkit.image}></img>
        </div>
      </div> */}
    </a>
  );
};

export default Drumkits;
