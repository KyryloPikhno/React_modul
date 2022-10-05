import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from './comments.module.css'


const Comments = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.commentReducer)

    useEffect(()=>{
        commentService.getAll()
            .then(({data})=>{
                dispatch({type: 'LOAD_COMMENTS', payload: data})
            })
    },[dispatch])

    console.log(state.comments)
    return (
        <div className={css.container}>
                {
                    state.comments.map((comment,index) =><Comment key={index} comment={comment}/>)
                }
        </div>
    );
};

export {Comments};