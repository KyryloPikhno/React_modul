import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postAxiosService ={
    getPosts: (userId)=>axiosService.get(`${urls.posts}/?userId=${userId}`)
}

export {postAxiosService}