import {useEffect, useState} from "react";
import User from '../user/User'

export default function Users(){
    let[users,setUsers]= useState([])
    let[user,setUser]= useState(null)

       let lift=(obj) => {
            setUser(obj)
        }

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value=> value.json())
        .then(value => setUsers(value.splice(0,8)))
    },[])
    return(<div className={'containerForUsers'}>
        <div className={'box'}>
           <p>{'id:'} {user?.id}</p>
            <p>{'phone:'} <a href={'user?.phone'}>{user?.phone}</a></p>
        </div>
        {users.map((user,index)=> (<User user={user} key={index} lift={lift}/>))}
    </div>)
}