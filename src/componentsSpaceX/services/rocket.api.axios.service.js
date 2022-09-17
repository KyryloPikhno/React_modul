import axios from "axios";


let axiosService = axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches/'
})

let getAllRockets =()=>{
    return axiosService.get()
}

export {getAllRockets}


