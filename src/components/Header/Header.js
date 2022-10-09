import {useSelector} from "react-redux";

import css from './Header.module.css'


const Header = () => {

    const {currentUser, error, loading, userFromAPI} = useSelector(state => state.userReducer)

    return (
        <div className={css.Header}>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Error</h3>}
            {userFromAPI && <h3>{userFromAPI.email}</h3>}
            {currentUser && <h3>{currentUser.name}</h3>}
        </div>
    );
};

export {Header};