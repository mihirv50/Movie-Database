import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import Topnav from "./templates/Topnav";
import Loading from "./Loading";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getmovies = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      //   setTrending(data.results);
      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const refreshHandler = () => {
    if (movies.length > 0) {
      getmovies();
    } else {
      setPage(1);
      setMovies([]);
      getmovies();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center px-[5%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] mr-3"
          ></i>
          Movies
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["popular", "top_rated","upcoming","now_playing"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={movies.length}
        next={getmovies}
        hasMore={true}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
