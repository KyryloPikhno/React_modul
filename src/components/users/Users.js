import {User} from "../user/User";
import {useEffect, useState} from "react";
import {userService} from "../services";
import {UserForm} from "../userForm/UserForm";

const Users=()=>{
   const [users,setUsers] = useState([])

    useEffect(()=>{
        userService.getAll()
            .then(({data})=>setUsers(data))
    },[])

    return(<div>
        <div>
         <UserForm setUsers={setUsers}/>
        </div>
        {users.map((user, index) => <User user={user} key={index}/>)}
    </div>)
}

export {Users}