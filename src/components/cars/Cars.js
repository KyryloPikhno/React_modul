import {useEffect, useState} from "react";
import CarForm from "../carForm/CarForm";
import carService from "../../services";

export default function Cars(){
    let [cars, setCars] = useState([])

    useEffect({
        carService.getAll().then(({data})=>setCars(data))
      // carService.getAll().then(({data})=>setCars(data))
    },[])

    return(<div>

           <CarForm/>
               <hr/>
    {cars.map(car => <Car car={car} key={car.id}/>)}
    </div>
)
}
