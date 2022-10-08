import {useSelector} from "react-redux";

import css from './Header.module.css'



const Header = () => {

    const {currentUser} = useSelector(state => state.userReducer)

    console.log(currentUser);

    return (
        <div className={css.Header}>
            {currentUser && currentUser.name}
        </div>
    );
};

export {Header};