import {axiosService} from "./axios.service";
import {urls} from "../configs";


const postAxiosService ={
    getPost:(postId)=>axiosService(urls.posts+'/'+postId)
}

export{postAxiosService}