import {axiosService} from "./axios.service";

import {urls} from "../configs";


const postService ={
    getAll : ()=>axiosService(urls.posts)
}

export {
    postService
}