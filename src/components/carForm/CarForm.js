import {useForm} from "react-hook-form";

const CarForm = () => {

     let{register,handleSubmit}= useForm()

    let submit = async ()=>{

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'car'} {...register('car')}/>
        </form>
    );
};

export {CarForm};