const User = (props) => {

    const {user, getUserId} = props

    return(<div>
        <div>id :{user.id} name: {user.name}</div>
        <button onClick={()=> getUserId(user.id)}>show posts</button>
    </div>)
}

export {
    User
}