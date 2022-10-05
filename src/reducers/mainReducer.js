import {combineReducers} from "redux";

import {userReducer} from "./userReducer";
import {postReducer} from "./postReducer";
import {commentReducer} from "./commentReducer";


const reducer = combineReducers({
    userReducer:userReducer,
    postReducer:postReducer,
    commentReducer:commentReducer
})

export{reducer}
