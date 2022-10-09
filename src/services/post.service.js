import {axiosService} from "./axios.service";

import {urls} from "../configs";


const postService ={
    getAll: () =>axiosService(urls.posts),
    getById: (id) =>axiosService(`${urls.posts}/${id}`)
}

export {
    postService
}