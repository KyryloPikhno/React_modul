import {Outlet} from 'react-router-dom'

import {Users} from "../../components";


const UserPage = () => {


    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Users/>
            </div>
        </div>
    );
};

export {UserPage};