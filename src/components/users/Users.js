import {useEffect, useState} from "react";

import {User} from "../user/User";
import {userAxiosService} from "../../services";

const Users = (props) =>{
    let {getUserId} = props

    const  [users, setUsers] = useState([])

    useEffect(()=>{
        // fetch('http://jsonplaceholder.typicode.com/users')
        //     .then(value=>value.json())
        //     .then(value=>setUsers(value))
        userAxiosService.getAll()
            .then(({data}) => setUsers(data))
    },[])


    return(<div>
        <div>
            {/*<UserForm/>*/}
        </div>
        {
            users.map(user => <User user={user} key={user.id} getUserId={getUserId}/>)
        }
    </div>)
}

export{
    Users
}