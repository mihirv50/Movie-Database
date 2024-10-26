export { removetv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";


export const asyncloadtv = (id) => async (dispatch,getState) => {
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);
        const videos = await axios.get(`/tv/${id}/videos`);

        let thefinaldata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.name),
            watchprovider: watchprovider.data.results.IN,
            videos: videos.data.results.find(m=>m.type === "Trailer")
        }; 
        dispatch(loadtv(thefinaldata));
        console.log(thefinaldata)
    } catch (error) {
        console.log("Error",error)
    }
}