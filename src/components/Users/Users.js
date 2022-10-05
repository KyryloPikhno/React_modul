import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../services";


const Users = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state)
    console.log(state)

    useEffect(()=>{
        userService.getAll()
            .then(value=>console.log(value.data))
    },[])


    return (
        <div>

        </div>
    );
};

export {Users};