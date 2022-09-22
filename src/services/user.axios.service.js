import {axiosService} from "./axios.service";

import {urls} from "../configs";


const userAxiosService ={
    getAll:()=>axiosService.get(urls.users),
    post:(user)=>axiosService.post(urls.users, user)
}

export {
    userAxiosService
}