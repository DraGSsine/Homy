import React from "react";
import Image from "next/image";
function SmallCard({ img, location, distance }) {
  return (
    <div className="flex cursor-pointer hover:scale-105 ease-out transition transform duration-200 gap-2 m-5 hover:bg-gray-100">
      <div className="relative h-16 w-16 ">
        <Image className="rounded-lg" alt="img" src={img} layout="fill" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
