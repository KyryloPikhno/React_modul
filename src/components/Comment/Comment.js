import  css from './comment.module.css'


const Comment = ({comment}) => {

    return (
        <div className={css.box}>
            <h3>{comment.id} - {comment.name}</h3>
            <h3>{comment.email}</h3>
            <h3>{comment.body}</h3>
        </div>
    );
};

export {Comment};