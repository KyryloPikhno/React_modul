// import React from 'react';
import css from './header.module.css'

import {NavLink} from "react-router-dom";



const Header = () => {
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
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export {Header};