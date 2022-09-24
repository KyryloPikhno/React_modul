import {axiosService} from "./axios.service";
import {urls} from "../configs";


const commentAxiosService ={
    getAll:()=>axiosService(urls.comments)
}

export {commentAxiosService}