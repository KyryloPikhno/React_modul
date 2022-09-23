import {User} from "../user/User";
import {useEffect, useState} from "react";
import {postService, userService} from "../services";
import {UserForm} from "../userForm/UserForm";
import {Post} from "../post/Post";

const Users=(props)=>{

    const {addComment} = props

   const [users,setUsers] = useState([])
const[posts,setPosts] = useState([])

    useEffect(()=>{
        userService.getAll()
            .then(({data})=>setUsers(data))
    },[])

    const getPosts = (id) =>{
       postService.getAllPostsOfUser(id).then(({data})=>setPosts(data))
    }





    return(<div>
        <div>
         <UserForm setUsers={setUsers}/>
        </div>
        {users.map((user, index) => <User user={user} key={index} getPosts={getPosts}/>)}

        <div>
            {posts.map((post)=> <Post post={post} key={post.id}/>)}
        </div>
    </div>)
}

export {Users}