import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "top [10%]",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] bg-red-100 flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-4xl font-semibold text-white">
        {data.name || data.original_title || data.original_name || data.title}
      </h1>
      <p className="w-[70%] text-white mt-3 mb-3">
        {data.overview.slice(0, 200)}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-500">...more</Link>
      </p>
      <p className="text-white">
        <i className="ri-calendar-fill text-yellow-400"></i> {data.release_date || "No Information"}
        <i className="ri-megaphone-fill text-yellow-400 ml-5"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-4 rounded-md text-white font-semibold tracking-tight mt-5 hover:bg-violet-900 duration-300 bg-[#6556cd]">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
