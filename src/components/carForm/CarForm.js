import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../validators";
import {carService} from "../../services";
import css from './CarForm.module.css'
import {useEffect} from "react";

export default function CarForm(props){

    const{setCars} = props

    const{register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({
         resolver:joiResolver(carValidator),
         mode:'all'
    })

    useEffect(()=>{
        setValue('model', 'bmw')
        setValue('price',2000)
        setValue('year',1991)
    },[])

    const submit = async (car)=>{
      const {data} = await carService.create(car)
        console.log(data)
        setCars(cars=>[...cars,data])
        reset()
    }





    return(<form className={css.box} onChange={()=>console.log(errors)} onSubmit={handleSubmit(submit)}>
        <input type='text' placeholder={'model'} {...register('model' )} />
        {errors.model && <span>{errors.model.message}</span>}
        <input type='text' placeholder={'price'} {...register('price', {valueAsNumber:true})} />
        {errors.price && <span>{errors.price.message}</span>}
        <input type='text' placeholder={'year'} {...register('year',{valueAsNumber:true})} />
        {errors.year && <span>{errors.year.message}</span>}
        <button className={!isValid? css.noValid:css.button} disabled={!isValid}>Save</button>
    </form>)
}