import {axiosService} from "./axios.service";

import {urls} from "../configs";


const userService ={
    getAll: ()=>axiosService.get(urls.users),
    getById: (userId)=>axiosService.get(urls.users+'userId')
}

export {userService}