import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

import {postAxiosService} from "../../services";
import css from './post.module.css'


const Post = () => {
    const {state} = useLocation()

    let [post, setPost] = useState(state);

    let id = state.postId

    useEffect(()=>{
        if(!state){
            postAxiosService.getPost(id)
                .then(({data})=>setPost(data))
        }else{
            setPost(state)
        }

    },[id,state])

    return(<div className={state? css.post : css.postHidden}>
            <h2>Post</h2>
            <h3>userId {post.userId}</h3>
            <h3>id {post.id}</h3>
            <h3>title {post.title}</h3>
            <h3>body {post.body}</h3>

            <NavLink to={'/comments'}>back</NavLink>
        </div>
    )
};

export {Post}