import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux/slices";
import {User} from "../User/User";
import css from './Users.module.css'


const Users = () => {
    const dispatch = useDispatch();
    const {users, error, loading} = useSelector(state => state.userReducer);

    useEffect(() => {
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])

    return (
        <div className={css.container}>
            {loading&&<h1>Loading...</h1>}
            {error&& <h1>Error</h1>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};