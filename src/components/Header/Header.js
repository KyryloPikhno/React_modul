import {useSelector} from "react-redux";

import css from './Header.module.css'


const Header = () => {

    const {currentUser, error, loading, userFromAPI} = useSelector(state => state.userReducer)

    const {currentPost, postFromAPI, loadingPosts, errorPosts} = useSelector(state=> state.postReducer)

    return (
        <div className={css.Header}>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {userFromAPI && <p>Email: {userFromAPI.email}</p>}
            {currentUser && <p>User: {currentUser.name}</p>}

            {errorPosts && <p className={css.post}>Posts error</p>}
            {loadingPosts && <p className={css.post}>Loading posts...</p>}
            {currentPost && <p className={css.post}>title: {currentPost.title}</p>}
            {postFromAPI && <p className={css.post}>post id: {postFromAPI.id}</p>}
        </div>
    );
};

export {Header};