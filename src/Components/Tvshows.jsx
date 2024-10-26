import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import Topnav from "./templates/Topnav";
import Loading from "./Loading";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, settvshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const gettv = async () => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${page}`);
      //   setTrending(data.results);
      if (data.results.length > 0) {
        settvshows((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const refreshHandler = () => {
    if (tvshows.length > 0) {
      gettv();
    } else {
      setPage(1);
      settvshows([]);
      gettv();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center px-[5%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] mr-3"
          ></i>
          Tv Shows
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["popular","on_the_air","top_rated","airing_today"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={tvshows.length}
        next={gettv}
        hasMore={true}
      >
        <Cards data={tvshows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
