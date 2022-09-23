const User = (props) =>{
    let {user,getPosts}= props

    return(
        <div>
            <p>{user.name}</p>
            <button onClick={()=>getPosts(user.id)}>GetPosts</button>
        </div>
    )
}

export {User}