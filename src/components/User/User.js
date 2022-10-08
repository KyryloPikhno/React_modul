import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices";
import css from'./User.module.css'



const User = ({user}) => {

    const dispatch = useDispatch()

    return (
        <div className={css.box}>
            <h3>{user.id} {user.username}</h3>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>show name</button>
        </div>
    );
};

export {User};