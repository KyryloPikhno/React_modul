import {createStore} from "redux";


const initState ={users:[]}

const userReducer = createStore((state = initState, action)=>{

    switch (action.type){
        case'LOAD_USERS':
            return {...state, users: action.payload}

        default:
            return {...state}
    }

})

export {userReducer}
