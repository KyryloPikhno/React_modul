import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsersAxios} from "../users.api.axios.services/users.api.axios.services";

export default function Users(){
    let [users,setUsers] = useState([])
    let [user,setUser] = useState(null)

    function lift(obj){
        setUser(obj)
    }


    useEffect(()=>{

        getUsersAxios()
            .then(value=> setUsers(value.data))
    },[])


    return(<div className={'container'}>
        <div className={'boxInfo'}>
           <h3>{user?.email}</h3>
            <p>{user?.username}</p>
            <p>{user?.address.street}</p>
            <p> {user?.address.suite}</p>
        </div>

        {users.map((user,index)=> <User user={user} key={index} lift={lift}/>)}
        </div>)
}