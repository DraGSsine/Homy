import React, { forwardRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/homy-logo.png";
import {
  SearchIcon,
  GlobeIcon,
  UserIcon,
  UserCircleIcon,
  MenuIcon,
} from "@/public/Icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const router = useRouter()
  const [SearchInput, setSearchInput] = useState("");
  const [startDate, setstarteDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [numberOfGuests, setNmberOfGuests] = useState(1);

  const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (range) => {
    setstarteDate(range.selection.startDate);
    setendDate(range.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput('')
  };
  const searchInput = () => {
    router.push({
      pathname:'/search',
      query:{
        location:SearchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        numberOfGuests,
      }
    })
    setSearchInput('')
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
     bg-white shadow-md px-5 py-3 md:px-10"
    >
      <div onClick={()=> router.push('/')} className=" cursor-pointer relative">
        <Image width={150} height={150} alt="Website logo" src={logo} />
      </div>
      <div className=" md:shadow-sm flex items-center md:border-2 rounded-full pl-5">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className=" placeholder-gray-400 text-gray-500 flex-grow pl-5 bg-transparent outline-none"
          type="text"
          value={SearchInput}
          placeholder={placeholder || "Search For Rent or Buy"}
        />
        <i className=" md:mx-2 hidden md:inline-flex bg-red-400 p-2 cursor-pointer text-white rounded-full">
          <SearchIcon />
        </i>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <i>
          <GlobeIcon />
        </i>
        <div className="flex space-x-4 border-2 rounded-full p-2">
          <MenuIcon />
          <UserCircleIcon />
        </div>
      </div>
      {SearchInput && (
        <div className="top-20  bg-white absolute w-[400px] left-1/2 transform -translate-x-1/2">
          <DateRangePicker
            ranges={[selectRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center pb-3">
            <h2 className=" flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UserIcon />
            <input
              onChange={(e) => setNmberOfGuests(e.target.value)}
              value={numberOfGuests}
              type="number"
              className="w-12 outline-none ml-2 text-red-400"
              min={1}
            />
          </div>
          <div className="flex pb-3">
            <button onClick={resetInput} className="flex-grow">Cancel</button>
            <button onClick={searchInput} className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
