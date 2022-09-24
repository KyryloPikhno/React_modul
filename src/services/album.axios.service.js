import {axiosService} from "./axios.service";
import {urls} from "../configs";


const albumAxiosService = {
    getAll:()=>axiosService.get(urls.albums)
}

export {albumAxiosService}