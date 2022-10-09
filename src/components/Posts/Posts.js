import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Post} from "../Post/Post";
import {postActions} from "../../redux/slices";
import css from './Posts.module.css'


const Posts = () => {

    const {posts} = useSelector(state=> state.postReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(postActions.getAll())
    },[dispatch])

    return (
        <div className={css.container}>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};