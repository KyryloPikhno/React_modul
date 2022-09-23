import {useForm} from "react-hook-form";
import {commentAxiosService} from "../services";

const CommentForm =(props)=>{

    const {setComment,post} = props

   const {register,handleSubmit} = useForm({
        mode: "all",
        defaultValues:{
          body:'body' ,
          email:'email'
        }
    })

const push = (obg) => {

    commentAxiosService.createComment(post.id)
        .then(({data}) => console.log(data))
        .then(value => setComment(value))
}


    return(<form onSubmit={handleSubmit(push)}>
      <input type='text' {...register('body')}/>
      <input type='text' {...register('email')}/>
        <button >Submit</button>
    </form>)
}

export {CommentForm}