import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import css from './users.module.css'


const Users = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.userReducer)

    useEffect(()=>{
        userService.getAll()
            .then(({data})=>{
                dispatch({type: 'LOAD_USERS', payload: data})
            })
    },[dispatch])

    console.log(state.users)
    return (
        <div className={css.container}>
            {
                state.users.map((user,index) =><User key={index} user={user}/>)
            }
        </div>
    );
};

export {Users};