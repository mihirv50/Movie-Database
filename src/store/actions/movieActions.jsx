export { removemovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";


export const asyncloadmovie = (id) => async (dispatch,getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
        const videos = await axios.get(`/movie/${id}/videos`);

        let thefinaldata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.name),
            watchprovider: watchprovider.data.results.IN,
            videos: videos.data.results.find(m=>m.type === "Trailer")
        }; 
        dispatch(loadmovie(thefinaldata));
        console.log(thefinaldata)
    } catch (error) {
        console.log("Error",error)
    }
}