// import React from 'react';
import css from './header.module.css'

import {NavLink, useNavigate} from "react-router-dom";



const Header = () => {

   const navigate = useNavigate()

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div>
                <button onClick={()=>navigate(-1)}>Prev</button>
                <button onClick={()=>navigate(1)}>Next</button>
            </div>
        </div>
    );
};

export {Header};