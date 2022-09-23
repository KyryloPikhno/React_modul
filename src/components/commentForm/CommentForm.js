import {useForm} from "react-hook-form";

const CommentForm =()=>{

   const [register,handleSubmit] = useForm({
        mode: "all",
        defaultValues:{
          body:'body' ,
          email:'email'
        }
    })




    return(<form onSubmit={handleSubmit()}>
<input type='text' {...register('email')}/>
  <input type='text' {...register('body')}/>
    </form>)
}

export {CommentForm}