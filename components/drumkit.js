import React from "react";
import Image from "next/image";
import Link from "next/link";

const Drumkits = ({ drumkit }) => {
  return (
    <a href={drumkit.url}>
      <div className="card w-full bg-base-100 shadow-xl mb-3 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-102 hover:bg-accent duration-300">
        <div className="flex px-6 justify-start h-16 pt-3">
          <img className="rounded-xl" src={drumkit.image} />
        </div>
        <div className="card-body p-6">
          <h2 className="card-title text-sm md:text-lg text-black">
            {drumkit.text}
          </h2>
          <p className="text-info text-xs truncate ...">{drumkit.url}</p>
        </div>
      </div>
    </a>
  );
};

export default Drumkits;
