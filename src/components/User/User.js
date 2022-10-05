import  css from './user.module.css'


const User = ({user}) => {

    return (
        <div className={css.box}>
            <div>{user.id}-{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
};

export {User};