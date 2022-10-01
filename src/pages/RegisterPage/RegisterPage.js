import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const RegisterPage = () => {

    let{register,handleSubmit}= useForm()

    let[error, setError] =useState(null)

    let navigate = useNavigate()

    let submit= async (user)=>{
        try{
            await authService.register(user)
            navigate('/login')
        }catch (e){
            setError(e.response.data?.username)
        }
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='text' placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            {error && <h3>{error}</h3>}
        </form>
    );
};

export {RegisterPage};