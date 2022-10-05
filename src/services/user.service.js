import {axiosService} from "./axios.service";

import {urls} from "../config";


const userService ={
    getAll: ()=>axiosService.get(urls.users),
    getById: (userId)=>axiosService.get(urls.users+'userId')
}

export {userService}