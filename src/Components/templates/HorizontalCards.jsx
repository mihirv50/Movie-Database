import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex h-[40vh]  overflow-y-hidden mb-5 p-5">
      {data.length>0 ? data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] h-[45vh] overflow-y-auto mr-5 mb-7">
          <img
            className="w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <h1 className="text-xl font-black text-white">
            {d.title || d.original_title || d.name || d.original_name}
          </h1>
          <p className="mt-3 mb-3 text-white">
            {d.overview.slice(0, 100)}...
            <span className="text-blue-400">more</span>
          </p>
        </Link>
      )) : <h1 className="text-3xl text-white font-black text-center">Nothing to show</h1>}
    </div>
  );
};

export default HorizontalCards;
