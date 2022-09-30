import {useReducer} from "@types/react";

import {dec, inc, reset, set} from "./count.actions";


let reducer =(state, action) =>{
    switch (action.type) {
        case inc:
            return {count2:state.count2 + 1}
        case dec:
            return {count2:state.count2 - 1}
        case reset:
            return {count2: 0}
        case set:
            return {count2: action.payload}
    }
    // return{...state}
}



const useCount2Reducer = () => useReducer(reducer, {count2: 0})

export {reducer,useCount2Reducer}