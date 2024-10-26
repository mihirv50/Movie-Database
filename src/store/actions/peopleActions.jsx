export { removepeople } from "../reducers/peopleSlice";
import axios from "../../utils/axios";
import { loadpeople } from "../reducers/peopleSlice";


export const asyncloadperson = (id) => async (dispatch,getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
        const tvcredits = await axios.get(`/person/${id}/tv_credits`);
        const moviescredits = await axios.get(`/person/${id}/movie_credits`);

        let thefinaldata = {
            detail: detail.data,
            externalid: externalid.data,
            combinedcredits: combinedcredits.data,
            tvcredits: tvcredits.data,
            moviescredits: moviescredits.data,
        }; 
        dispatch(loadpeople(thefinaldata));
    } catch (error) {
        console.log("Error",error)
    }
}