import {axiosService} from "./axios.service";
import {urls} from "../configs";


const todoAxiosService ={
    getAll:()=>axiosService(urls.todos)
}

export {todoAxiosService}