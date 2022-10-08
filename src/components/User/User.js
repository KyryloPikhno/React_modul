const User = ({user}) => {


    return (
        <div>
            <h3>{user.id} {user.username}</h3>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
        </div>
    );
};

export {User};