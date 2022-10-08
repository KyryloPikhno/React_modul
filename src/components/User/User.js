import {useDispatch} from "react-redux";

import css from'./User.module.css'
import {userActions} from "../../redux/slices";


const User = ({user}) => {
    const dispatch = useDispatch();

    const {id, name, username, email} = user;

    return (
        <div className={css.box}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>getFromAPI</button>
            <button onClick={()=>dispatch(userActions.deleteById(id))}>delete</button>
        </div>
    );
};

export {User};