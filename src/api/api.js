import axios from "axios";

export const BASE_URL =
 `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=`


 export const IMAGE_URL='https://image.tmdb.org/t/p/original'




export const fetchDataFromApi = async (query) => {
    const url = BASE_URL+query;
    console.log(url);
    try {
        const { data } = await axios.get(BASE_URL+query)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
