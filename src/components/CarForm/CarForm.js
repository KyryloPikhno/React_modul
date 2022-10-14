import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux/slices";


const CarForm = () => {

    const{handleSubmit, register, reset, setValue}= useForm()

    const {carForUpdate, error} = useSelector(state => state.carReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[setValue,carForUpdate])

    const submit = async (obj)=>{
        if(carForUpdate){
            await dispatch(carActions.updateById({id: carForUpdate.id, car: obj}))
        }else{
            await dispatch(carActions.createCar({car:obj}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'model'} {...register('model')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate? 'Update':'Create'}</button>

            {error && <h3>Error...</h3>}
        </form>
    );
};

export {CarForm};