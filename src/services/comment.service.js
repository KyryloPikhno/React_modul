import {axiosService} from "./axios.service";

import {urls} from "../configs";


const commentService ={
    getAll: ()=>axiosService.get(urls.comments),
    getById: (commentId)=>axiosService.get(urls.comments+'commentId')
}

export {commentService}