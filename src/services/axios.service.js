import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({
    // baseURL: {baseURL} or
    baseURL
})

export {axiosService}