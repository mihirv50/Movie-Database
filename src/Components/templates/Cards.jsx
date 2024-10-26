import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap justify-center w-full px-[5%] bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="w-[30vh] h-auto mr-4 mb-6"
          key={i}
        >
          <img
            className="w-full h-[40vh] object-cover rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.poster_path || c.profile_path
            }`}
            alt={c.title || c.name}
          />
          <h1 className="text-center text-lg text-zinc-400 mt-2 font-semibold">
            {c.name || c.original_title || c.original_name || c.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
