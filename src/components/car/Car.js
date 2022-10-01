import {carService} from "../../services";

import css from './car.module.css'


const Car = ({car, setCars}) => {
    let{id, model, price, year, photo}=car

    let sendPhoto=async (e)=>{
        let formData = new FormData()
        let [file] = e.target.files
        formData.append('photo', file)
        let {data} = await carService.addPhotoById(id, formData)

        setCars(cars=>{
         let find = cars.find(car => car.id === id)
            Object.assign(find, {...data, photo: URL.createObjectURL(file)})
            return[...cars]
        })
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            {
                photo?
                    <img className={css.photo} src={photo} alt={model}/>
                   :
                    <input type='file' onChange={sendPhoto}/>
            }
        </div>
    );
};

export {Car};