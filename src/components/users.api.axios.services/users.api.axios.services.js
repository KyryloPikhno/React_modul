import axios from "axios";

let axiosService = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})

let getUsersAxios = () =>{
    return axiosService()
}

export {getUsersAxios}