import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices";
import css from'./User.module.css'



const User = ({user}) => {

    const {id,name,email,username} = user

    const dispatch = useDispatch()

    return (
        <div className={css.box}>
            <h3>{id} - {username}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>show name</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>Get from API</button>
        </div>
    );
};

export {User};