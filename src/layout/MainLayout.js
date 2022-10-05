import {Outlet} from 'react-router-dom'

import {Header} from "../components";
import css from './layout.module.css'


const MainLayout = () => {


    return (
        <div className={css.container}>
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};