import {useReducer} from "react";

import {cats} from "./count.actions";
import {name} from '../components/count1/Count1'
import {Cat} from "../components/cat/Cat";



let reducer = (state, action) => {

    switch (action.type) {
        case name.cats:
        return  {...state, count1:[name.cats]}
    }
    // return{...state}
}



const useCount1Reducer = () => useReducer(reducer, {count1:[]})

export {reducer, useCount1Reducer}