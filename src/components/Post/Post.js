import css from './post.module.css'


const Post = ({post}) => {

    return (
        <div className={css.box}>
            <h3>{post.id} - {post.title}</h3>
            <h3>{post.body}</h3>
        </div>
    );
};

export {Post};