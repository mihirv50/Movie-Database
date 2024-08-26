import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-semibold">
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
        <span className="">Movie DB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <hr className="mb-5" />
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-fire-fill"></i>
          <h4 className="text-2xl">Trending</h4>
        </Link>
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-gemini-fill"></i>
          <h4 className="text-2xl">Popular</h4>
        </Link>
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-film-fill"></i>
          <h4 className="text-2xl">Movies</h4>
        </Link>
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-tv-2-fill"></i>
          <h4 className="text-2xl">TV Shows</h4>
        </Link>
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-group-fill"></i>
          <h4 className="text-2xl">People</h4>
        </Link>
      </nav>
      <nav className="flex flex-col text-zinc-400">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <hr className="mb-5" />
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-account-box-fill"></i>
          <h4 className="text-2xl">About</h4>
        </Link>
        <Link className="flex w-full hover:bg-[#6556cd] p-5 rounded-lg duration-300 items-center justify-start gap-5">
          <i className="ri-phone-fill"></i>
          <h4 className="text-2xl">Contact</h4>
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
