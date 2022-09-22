import css from './Car.module.css'
import {carService} from "../../services";




export default function Car(props){

    let{car,setCars} = props

    const deleteCar = async ()=>{
       await carService.deleteById(car.id)
        setCars(cars=>{
           const index = cars.findIndex(value => value.id === car.id)
            cars.splice(index, 1)
            return[...cars]
        })
    }

    const updateCar = async ()=>{
        const data = await carService.getById()
        console.log(data)
        // setCars(cars=>[...cars,data])
    }


    return(<div className={css.box} >
        <div>id: {car.id}</div>
        <div>model: {car.model}</div>
        <div>price: {car.price}</div>
        <div>year: {car.year}</div>

        <button className={css.button} onClick={()=>updateCar()}>Update</button>
        <button className={css.button} onClick={()=>deleteCar()}>Delete</button>
    </div>)
}