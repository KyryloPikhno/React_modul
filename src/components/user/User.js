export function User(props){
    let {user,lift} = props

    return(
        <div className={'box'}>
            <h3>id: {user.id} {user.name}</h3>
            <p>username: {user.username}</p>
            <p>{user.email}</p>

            <button onClick={()=>{
                lift(user)
            }
            }>{'info'}</button>
        </div>
    )
}