import {Outlet} from "react-router-dom";

import {Posts} from "../../components";


const PostPage = () => {


    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Posts/>
            </div>
        </div>
    );
};

export {PostPage};