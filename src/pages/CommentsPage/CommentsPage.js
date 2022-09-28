
import {Outlet} from 'react-router-dom'

import {Comments} from "../../components";


const CommentsPage = () => {
    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Comments/>
            </div>
        </div>
    );
};

export {CommentsPage};