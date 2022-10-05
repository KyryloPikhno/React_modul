import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";
import {User} from "../User/User";


const Users = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state)

    useEffect(()=>{
        userService.getAll()
            .then(({data})=>{
                dispatch({type: 'LOAD_USERS', payload: data})
            })
    },[])

    console.log(state.users)
    return (
        <div>
            <h3>users</h3>
            <div>
            {
                state.users.map((user,index) =><User key={index} user={user}/>)
            }
            </div>
        </div>
    );
};

export {Users};