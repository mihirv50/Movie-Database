import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top [10%]",
        backgroundSize: "cover",
      }}
      className="relative w-screen h-[150vh] px-[10%]"
    >
      {/* part 1 */}
      <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] mr-3"
        ></Link>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imDB
        </a>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
      </nav>
      {/* part 2 */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black">
            {info.detail.name ||
              info.detail.original_title ||
              info.detail.original_name ||
              info.detail.title}

            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>
          <div className="flex items-center gap-x-5 mt-7 mb-5">
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
          <h1 className="text-zinc-200 text-xl italic font-semibold mb-5">
            {info.detail.tagline}
          </h1>
          <h1 className="text-2xl">Overview</h1>
          <p className="mt-3 mb-10">{info.detail.overview}</p>

          <Link
            className="mt-5 p-5 bg-[#6556cd] rounded-lg"
            to={`${pathname}/trailer`}
          >
            Play Trailer
          </Link>
        </div>
      </div>
      {/* part 3 */}
      <div className="w-[80%] mt-10 mb-20">
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 items-center">
            <h1 className="flex items-center justify-center text-2xl text-zinc-300">
              Available on Platforms
            </h1>
            {info.watchprovider &&
              info.watchprovider.flatrate &&
              info.watchprovider.flatrate.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
          </div>

          {info.watchprovider && info.watchprovider.rent && (
            <div className="flex gap-10 items-center">
              <h1 className="flex items-center justify-center text-2xl text-zinc-300">
                Available on rent
              </h1>
              {info.watchprovider.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchprovider && info.watchprovider.buy && (
            <div className="flex gap-10 items-center">
              <h1 className="flex items-center justify-center text-2xl text-zinc-300">
                Available to buy
              </h1>
              {info.watchprovider.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* part 4 */}
      <h1 className="text-2xl text-white font-semibold">
        Recommendations and Similar
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
