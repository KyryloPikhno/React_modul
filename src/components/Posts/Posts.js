import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";
import css from './posts.module.css'


const Posts = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.postReducer)

    useEffect(()=>{
        postService.getAll()
            .then(({data})=>{
                dispatch({type: 'LOAD_POSTS', payload: data})
            })
    },[dispatch])

    console.log(state.posts)
    return (
        <div className={css.container}>
                {
                    state.posts.map((post,index) =><Post key={index} post={post}/>)
                }
        </div>
    );
};

export {Posts};