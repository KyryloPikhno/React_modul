
export default function User(props){
    let{user} = props

    return(
        <div className={'box'}>
            <h3>id: {user.id} {user.name}</h3>
            <p>username: {user.username}</p>
            <a href={'mailto'}>{user.email}</a>
            <img className={'pic'} alt={'pic'} src={'https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-021.jpg'}/>
        </div>
    )
}