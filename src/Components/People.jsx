import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Cards from "./templates/Cards";
import Topnav from "./templates/Topnav";
import Loading from "./Loading";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getpeople = async () => {
    try {
      const { data } = await axios.get(`person/${category}?page=${page}`);
      //   setTrending(data.results);
      if (data.results.length > 0) {
        setpeople((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const refreshHandler = () => {
    if (people.length > 0) {
      getpeople();
    } else {
      setPage(1);
      setpeople([]);
      getpeople();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center px-[5%]">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] mr-3"
          ></i>
          People
        </h1>
        <Topnav />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        dataLength={people.length}
        next={getpeople}
        hasMore={true}
      >
        <Cards data={people} title="people" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
