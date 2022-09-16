import {useEffect, useState} from "react";
import User from '../user/User'

export default function Users(){
    let[users,setUsers]= useState([])

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value=> value.json())
        .then(value => setUsers(value.splice(0,8)))
    },[])
    return(<div className={'container'}>
        {users.map((user,index)=> (<User user={user} key={index}/>))}
    </div>)
}