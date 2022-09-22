const User = (props) => {

    const {user} = props

    return(<div>
        <div>id :{user.id}</div>
        <div>name :{user.name}</div>
        <div>username :{user.username}</div>
        <div>email :{user.email}</div>
    </div>)
}

export {
    User
}