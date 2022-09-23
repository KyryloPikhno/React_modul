import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postAxiosService ={
    createComment:(id,comment)=>axiosService.post(urls.posts+id+urls.comments ,comment)
}

export {postAxiosService}

// https://jsonplaceholder.typicode.com/posts/2/comments