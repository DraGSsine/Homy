import React from "react";
import Image from "next/image";
import { HeartIcons, StarIcons } from "@/public/Icons";
function InfoCard({ img, location, description,title, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b hover:shadow-lg cursor-pointer hover:opacity-80 transition ease-out duration-300">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          className="rounded-lg"
          objectFit="cover"
          src={img}
          layout="fill"
          alt="img"
        />
      </div>
      <div className="flex flex-col flex-grow pl-4">
        <div className="flex justify-between pb-2">
            <p>{location}</p>
            <HeartIcons/>
        </div>
        <h4 className="text-xl">{title}</h4>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between pt-5">
            <p className="flex items-center">
                <StarIcons/>
                {star}
            </p>
            <div>
            <p className="text-lg font-semibold pb-b lg:text-2xl">{price}</p>
            <p className=" text-right font-extralight">{total}</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default InfoCard;
