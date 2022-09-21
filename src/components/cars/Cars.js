import {useEffect, useState} from "react";

import Car from "../car/Car";
import {carService} from "../../services";
import CarForm from "../carForm/CarForm";
import css from './Cars.module.css'



export default function Cars(){
    const [cars, setCars] = useState([])
    const [car, setCar] = useState(null)


    useEffect(()=>{
        carService.getAll().then(value=>setCars(value.data))
    },[])


    return(<div className={css.container}>

        <CarForm setCars={setCars} setCar={setCar} />

        {cars.map(car => <Car car={car} key={car.id} setCars={setCars} setCar={setCar} />)}
    </div>)
}