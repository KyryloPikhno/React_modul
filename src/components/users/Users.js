// import {getUser,getUsers} from "../services/user.api.service";
import{getUsersAxios} from "../services/user.api.axios.service";
import {useEffect, useState} from "react";
import {User} from "../user/User";

export default function Users(){

    let [users,setUsers] = useState([])
    let [user,setUser] = useState(null)

   const lift =(user)=>{
        setUser(user)
   }

    useEffect(()=>{

        getUsersAxios()
            .then(value => {

                setUsers(value.data)
            })
    },[])

    return(

        <div>
            <hr/>
            <div>{user}</div>
<hr/>
            {users.map((user,index)=>(<User user={user} key={index} lift={lift}/>))}
        </div>
    )
}
