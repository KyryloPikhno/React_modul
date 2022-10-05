import  css from './user.module.css'


const User = ({user}) => {

    return (
        <div className={css.box}>
            <h3>{user.id} - {user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.username}</h3>
            <h3>{user.website}</h3>
        </div>
    );
};

export {User};