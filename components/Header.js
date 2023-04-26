import React, { forwardRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/homy-logo.png";
import {
  SearchIcon,
  GlobeIcon,
  UserIcon,
  UserCircleIcon,
  MenuIcon
} from "@/public/Icons";
function Header() {
  const [SearchPlaceholder, setSearchPlaceholder] = useState(
    "Search For Rent or Buy"
  );
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
     bg-white shadow-md px-5 py-3 md:px-10"
    >
      <div className=" cursor-pointer relative">
        <Image width={150} height={150} alt="Website logo" src={logo} />
      </div>
      <div className=" md:shadow-sm flex items-center md:border-2 rounded-full pl-5">
        <input className=" placeholder-gray-400 text-gray-500 flex-grow pl-5 bg-transparent outline-none" type="text" placeholder={SearchPlaceholder} />
        <i className=" md:mx-2 hidden md:inline-flex bg-red-400 p-2 cursor-pointer text-white rounded-full">
          <SearchIcon />
        </i>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <i>
          <GlobeIcon/>
        </i>
        <div className="flex space-x-4 border-2 rounded-full p-2">
          <MenuIcon/>
          <UserCircleIcon/>
        </div>
      </div>
    </header>
  );
}

export default Header;
