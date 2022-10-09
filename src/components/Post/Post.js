import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices";
import css from './Post.module.css'


const Post = ({post}) => {

    const{id,title,body}= post

    const dispatch = useDispatch()

    return (
        <div className={css.box}>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <h3>body: {body}</h3>

            <button onClick={()=> dispatch(postActions.setCurrentPost(post))}>Set post</button>
            <button onClick={()=> dispatch(postActions.getById({id}))}>Get From API</button>
            <button onClick={()=> dispatch(postActions.deleteById(id))}>Delete by id</button>
        </div>
    );
};

export {Post};