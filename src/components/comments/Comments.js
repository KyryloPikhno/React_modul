import {useEffect, useState} from "react";

import {commentAxiosService} from "../../services";
import {Comment} from "../comment/Comment";
import css from './comments.module.css';


const Comments = () => {

const [comments, setComments] = useState([])

    useEffect(()=>{
        commentAxiosService.getAll()
            .then(({data})=>setComments(data))
    },[])




    return(<div className={css.comments}>
        {
            comments.map(comment => <Comment comment={comment} key={comment.id}/>)
        }
    </div>)
};

export{Comments}