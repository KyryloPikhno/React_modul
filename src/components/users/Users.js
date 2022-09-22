import {useEffect, useState} from "react";

import {User} from "../user/User";
import {userAxiosService} from "../../services";

const Users = () =>{
    const  [users, setUsers] = useState([])

    useEffect(()=>{
        userAxiosService.getAll.then(({data})=>setUsers(data))
    },[])


    return(<div>
        {
            users.map(user => <User user={user} key={user.id}/>)
        }
    </div>)
}

export{
    Users
}

