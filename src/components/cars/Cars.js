import {useEffect, useState} from "react";

import Car from "../car/Car";
import {carService} from "../../services";
import CarForm from "../carForm/CarForm";
import css from './Cars.module.css'

export default function Cars(effect, deps){
    let[cars, setCars] = useState([])


    useEffect(()=>{
        carService.getAll().then(value=>setCars(value.data))
    },[])


    return(<div className={css.container}>
        <CarForm/>

        {cars.map(car => <Car car={car} key={car.id}/>)}
    </div>)
}