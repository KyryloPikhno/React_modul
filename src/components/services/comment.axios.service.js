import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentAxiosService ={
    createComment:(id,comment)=>axiosService.post(urls.posts+'/'+id+urls.comments ,comment)
}

export {commentAxiosService}

// https://jsonplaceholder.typicode.com/posts/2/comments