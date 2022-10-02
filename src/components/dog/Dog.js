import {variable} from "../../config";


const Dog = ({dog, dispatch}) =>{

    return(
        <div>
            <p>Dog name: {dog.name}</p>
            <button onClick={()=>dispatch({type: variable.delete, payload: {id: dog.id}})}>delete</button>
        </div>
    )}

export {Dog}