import {useReducer} from "react";

import {dec, inc, reset ,set} from "./count.actions";



let reducer = (state, action) =>{
    switch (action.type) {
        case inc:
            return {count1:state.count1 + 1}
        case dec:
            return {count1:state.count1 - 1}
        case reset:
            return {count1: 0}
        case set:
            return {count1: action.payload}
    }
    // return{...state}
}



const useCount1Reducer = () => useReducer(reducer, {count1: 0})

export {reducer, useCount1Reducer}