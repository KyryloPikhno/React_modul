import {variable} from "../../config";


const Cat = ({cat, dispatch}) =>{

    return(
        <div>
            <p>Cat name: {cat.name}</p>
            <button onClick={()=>dispatch({type: variable.delete, payload: {id: cat.id}})}>delete</button>
        </div>
    )}

export {Cat}