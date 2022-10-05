import {axiosService} from "./axios.service";

import {urls} from "../configs";


const postService ={
    getAll: ()=>axiosService.get(urls.posts),
    getById: (postId)=>axiosService.get(urls.posts+'postId')
}

export {postService}