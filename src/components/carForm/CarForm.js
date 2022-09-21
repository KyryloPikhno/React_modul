import css from './CarForm.module.css'
import {useForm} from "react-hook-form";

export default function CarForm(){

    const{register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm()

    const submit = (data)=>{
        console.log(data);
    }


    return(<form className={css.box} onSubmit={handleSubmit(submit)}>

        <input type='text' placeholder={'model'} {...register('model' ,{required:true ,minLength:{value:2,message:'min two'}} )} />
        <input type='text' placeholder={'price'} {...register('price', {valueAsNumber:true})} />
        <input type='text' placeholder={'year'} {...register('year',{valueAsNumber:true})} />
        <button disabled={!isValid}>Save</button>
    </form>)
}