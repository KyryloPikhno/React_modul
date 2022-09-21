import {useEffect, useState} from "react";

import Car from "../car/Car";
import {carService} from "../../services";
import CarForm from "../carForm/CarForm";
import css from './Cars.module.css'

export default function Cars(){
    const [cars, setCars] = useState([])

    useEffect(()=>{
        carService.getAll().then(value=>setCars(value.data))
    },[])

    return(<div className={css.container}>
        <CarForm setCars={setCars}/>

        {cars.map(car => <Car car={car} key={car.id} setCars={setCars}/>)}
    </div>)
}