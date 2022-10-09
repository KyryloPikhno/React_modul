import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices";
import css from'./User.module.css'


const User = ({user}) => {

    const {id, name, username, email} = user;

    const dispatch = useDispatch()

    return (
        <div className={css.box}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>

            <button onClick={()=> dispatch(userActions.setCurrentUser(user))}>Set user</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>Get from API</button>
            <button onClick={()=> dispatch(userActions.deleteById(id))}>Delete by id</button>
        </div>
    );
};

export {User};