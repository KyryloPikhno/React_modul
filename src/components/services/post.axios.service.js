
import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService={
    getAllPostsOfUser:(id)=> axiosService(urls.users+'/'+id+urls.posts)
}

export {postService}