import {comments} from "../../data";
import Comment from "../comment/Comment";

export default function Comments(){
    return(<div className={'container'}>
        {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
    </div>)
}