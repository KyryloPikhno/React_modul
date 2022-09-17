
export default function User(props){
    let{user,lift} = props

    return(<div className={'box'}>
        <h3>{user.id} {user.name}</h3>
        <p>{user.phone}</p>

        <button className={'button'} onClick={()=>{
           lift(user)
        }}>info</button>
    </div>)
}