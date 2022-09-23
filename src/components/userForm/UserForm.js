import {useForm} from "react-hook-form";
import {userService} from "../services";

const UserForm = (props) =>{
    const{setUsers}= props

const{register,handleSubmit,formState:{errors,isValid}} = useForm({
    mode:'all',
    defaultValues:{
        name:'name',
        surname:'surname',
        email:'email'
    }
})

    const submit = (obj)=>{
       userService.createUser(obj)
           .then(({data}) => setUsers(users=>[...users,data]))
    }

    return(<form onSubmit={handleSubmit(submit)}>
        <input type='text' {...register( 'name',{required :{value:true,message:'err'}})}/>
        {errors.name && <span>{errors.name.message}</span>}
        <input type='text' {...register('surname' )}/>
        <input type='text' {...register('email' )}/>
        <button>Submit</button>
    </form>)
}

export{UserForm}