import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux/slices";
import {User} from "../User/User";
import css from './Users.module.css'


const Users = () => {

    const dispatch = useDispatch()

    const {users} = useSelector(store => store.userReducer)

    useEffect(()=>{
        dispatch(userActions.getAll())
    },[dispatch])

    return (
        <div className={css.container}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};