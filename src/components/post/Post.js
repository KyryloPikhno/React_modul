import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {postAxiosService} from "../../services";
import css from './post.module.css'


const Post =()=>{
    const[post,setPost]= useState(null)

     const location = useLocation()
     const {state} = location
     let id = state.postId

    useEffect(()=>{
        postAxiosService.getPost(id)
            .then(({data})=>setPost(data))
    },[id])

    return(<div className={css.post}>
        <h3>userId {post?.userId}</h3>
        <h3>id {post?.id}</h3>
        <h3>title {post?.title}</h3>
        <h3>body {post?.body}</h3>
        {/*<div className={css.buttonBox}>*/}
        {/*    <button>prev</button>*/}
        {/*    <button>next</button>*/}
        {/*</div>*/}
    </div>)
}

export {Post}