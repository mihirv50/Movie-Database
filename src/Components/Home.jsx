import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import HorizontalCards from "./templates/HorizontalCards";

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null)

  const getwallpaper = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day`);
      let random = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(random);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const gettrending = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    !wallpaper && getwallpaper();
    !trending && gettrending();
  }, []);
  console.log(trending);
  
  document.title = "Home";
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending}/>
      </div>
    </>
  ):<h1>Loading</h1>
};

export default Home;
