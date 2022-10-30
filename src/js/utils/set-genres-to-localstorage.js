import axios from "axios";
import { API_KEY } from "./config";
import { urls } from "./config";


const getGenres = async () => {
    const url = `${urls.BASE_URL}${urls.GENRES_PATH_URL}?api_key=${API_KEY}&language=en-US`;
        try {
            const response = await axios.get(url),
                genres = response.data.genres;
            return genres;
            
        } catch (error) {
            console.error(error);
        }
} 
getGenres().then(genres => localStorage.setItem("genres", JSON.stringify(genres)))

localStorage.getItem("genres")