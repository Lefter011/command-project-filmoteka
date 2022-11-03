import ApiService from "../ApiService";
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from "axios";





export async function onViewTrailer() {
    const api = new ApiService();
    const fetchTrailer = api.fetchTrailer()
}

