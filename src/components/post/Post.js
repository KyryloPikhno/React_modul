import {CommentForm} from "../commentForm/CommentForm";
import {useState} from "react";


const Post =(props)=>{

    const [comment, setComment]=useState([])

    const {post} = props


console.log(comment)


    return(<div>
        <p>{comment}</p>
        <div>
            <CommentForm setComment={setComment} post={post}/>
        </div>
        <p>{post.id} - {post.title}</p>
    </div>)
}


export {Post}