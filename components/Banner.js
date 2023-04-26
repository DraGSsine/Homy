import React from "react";
import Image from "next/image";
import BannerBackground from "@/public/Banner.jpg";
function Banner() {
  return (
    <div className=" relative h-screen">
        <Image  layout="fill" src={BannerBackground} alt="Banner Image" />
      <div className=" w-full absolute top-1/4 text-center">
        <p className=" text-white mb-10 text-4xl font-bold">
          Not sure Where To Go? Perfect
        </p>
        <button className=" text-lg text-white rounded-full px-7 font-bold py-3 bg-red-500">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
