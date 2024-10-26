import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start pl-[20%]">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-400"
        type="text"
        placeholder="Search Anything..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-line text-zinc-400 text-3xl"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] absolute bg-zinc-200 top-[80%] overflow-auto">
        {searches.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="w-[100%] p-10 flex justify-start border-b-2 border-zinc-100 items-center text-zinc-800 font-semibold hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img
              className="w-[10vh] h-[10vh] rounded mr-5 object-cover shadow-lg"
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.poster_path || item.profile_path
              }`}
              alt=""
            />
            <span>
              {item.name ||
                item.original_title ||
                item.original_name ||
                item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
