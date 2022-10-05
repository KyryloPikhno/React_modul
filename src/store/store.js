import {createStore} from "redux";

const initState ={users:[]}

const store = createStore((state = initState, action)=>{

    return state
})

export {store}
