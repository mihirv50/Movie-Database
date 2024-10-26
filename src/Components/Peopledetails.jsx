import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removepeople } from "../store/actions/peopleActions";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

const Peopledetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.people);
  const [Category, setCategory] = useState("tv");
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  return info ? (
    <>
      <div className="px-[10%] h-[150vh] bg-[#1F1E24] w-screen  ">
        {/* part 1 */}
        <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 text-2xl items-center">
          <Link
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] mr-3"
          ></Link>
        </nav>
        <div className="w-full flex">
          {/* part 2 */}
          <div className="w-[20%]">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
              src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
              alt=""
            />
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            {/* Soocials */}
            <div className="text-white text-2xl flex gap-x-5">
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              >
                <i className="ri-earth-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                target="_blank"
                href={`https://x.com/${info.externalid.twitter_id}`}
              >
                <i className="ri-twitter-x-line"></i>
              </a>
            </div>
            {/* Personal Details */}
            <h1 className="text-2xl text-zinc-400 font-semibold my-5">
              Personal info
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold">Known for</h1>
            <h1 className=" text-zinc-400 ">
              {info.detail.known_for_department}
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
            <h1 className=" text-zinc-400 ">
              {info.detail.gender === 2 ? "Male" : "Female"}
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Birthday
            </h1>
            <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Place of birth
            </h1>
            <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Also Known as
            </h1>
            <h1 className=" text-zinc-400 ">
              {info.detail.also_known_as.join(",")}
            </h1>
          </div>
          {/* part 3 */}
          <div className="w-[80%] ml-[5%]">
            <h1 className="text-6xl text-zinc-400 font-black">
              {info.detail.name}
            </h1>
            <h1 className="text-xl text-zinc-400 font-semibold my-5">
              Overview
            </h1>
            <p className="text-zinc-400 font-semibold text-lg">
              {info.detail.biography}
            </p>
            <h1 className="text-xl text-zinc-400 font-semibold mt-5">
              Famous For
            </h1>
            <HorizontalCards data={info.combinedcredits.cast} />

            
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Peopledetails;
