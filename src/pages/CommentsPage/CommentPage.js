import {Outlet} from "react-router-dom";

import {Comments} from "../../components";


const CommentPage = () => {


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

export {CommentPage};