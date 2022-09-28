import {Header} from "../../components";

import {Outlet} from 'react-router-dom'
import css from './main.module.css'

const MainLayout = () => {
    return (
        <div className={css.container}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export  {MainLayout};