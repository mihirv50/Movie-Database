import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5">
        <h1 className="text-3xl text-zinc-400 font-semibold ">Trending</h1>
      </div>
      <div className="w-[100%] flex h-[40vh] overflow-y-hidden">
        {data.map((d, i) => (
          <div key={i} className="min-w-[15%] mr-5">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
