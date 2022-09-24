import {Link} from "react-router-dom";

import css from'./comment.module.css'

const Comment = ({comment}) => {

    return(<div className={css.comment}>
        <h3>post id: {comment.postId}</h3>
        <h3>id: {comment.id}</h3>
        <h3>name: {comment.name}</h3>
        <h3>email: {comment.email}</h3>
        <h3>body: {comment.body}</h3>
        <Link to={`/comments/post/${comment.postId}`}  state={{...comment}} >see post</Link>
    </div>)
};

export{Comment}