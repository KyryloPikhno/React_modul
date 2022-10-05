import axios from "axios";
import {baseURl} from "../config";


const axiosService = axios.create({baseURL})

export {axiosService}