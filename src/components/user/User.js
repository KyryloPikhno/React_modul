export function User(props){
    let {user,lift} = props

    return(
        <div>
            <h3>{user.name}</h3>
            <button onClick={()=>{
                lift(user.email)
            }
            }>{'info'}</button>
        </div>
    )
}