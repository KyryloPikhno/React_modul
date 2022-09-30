import {useNavigate} from 'react-router-dom'

import css from './header.module.css'

const Header = () => {

    let navigate = useNavigate()

    return (
        <div className={css.header}>
            <div className={css.button}>
                <button onClick={()=>navigate('/login')}>Login</button>
                <button onClick={()=>navigate('/register')}>Register</button>
            </div>
        </div>
    );
};

export {Header};