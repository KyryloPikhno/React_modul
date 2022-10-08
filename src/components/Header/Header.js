import {useSelector} from "react-redux";

import css from './Header.module.css'



const Header = () => {

    const {currentUser, userFromAPI} = useSelector(state => state.userReducer)

    return (
        <div className={css.Header}>
            <div>{currentUser && currentUser.name}</div>
            <div>{userFromAPI && <h3>{userFromAPI.email}</h3>}</div>
        </div>
    );
};

export {Header};