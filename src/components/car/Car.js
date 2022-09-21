import css from './Car.module.css'
import {carService} from "../../services";




export default function Car(props){
    let{car,setCars,setValue} = props

    const deleteCar = async ()=>{
       await carService.deleteById(car.id)
        setCars(cars=>{
           const index = cars.findIndex(value => value.id === car.id)
            cars.splice(index, 1)
            return[...cars]
        })
    }


    const updateCar = async ()=> {
        await carService.updateById(car.id)
        setCars(cars=>{
            const index = cars.findIndex(value => value.id === car.id)
            cars.findIndex(value => value.model === 'hui')
        })

        // setCars(cars=>{
        //     const index = cars.findIndex(value => value.id === car.id)
        //     cars.splice(index, 1)
        //     return[...cars]
        // })



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