import {useReducer, useRef} from "react";
import {Cat} from "../../components";

const MainLayout=()=> {

    const reducer=(state, action)=>{
       switch (action.type) {
           case 'addCat':
               return {...state, cats: [...state.cats, {id: Date.now, name: payload}]}
           case 'delete':
               return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
       }
    }

    const [state, dispatch] = useReducer(reducer,{cats:[], dogs:[]})

    const catInput = useRef()

    const createCat = () =>{
        dispatch({type:'addCat', payload: catInput.current.value})
    }

    return (
        <div>
            <div className={'cats'}>
                <label>Cats name: <input type='text' ref={catInput}/></label>
                <button onClick={createCat}>Save</button>
            </div>
            <div>
                {
                    state.cats.map(cat => <Cat key={cat.id} dispatch={dispatch} cat={cat}/>)
                }
            </div>
        </div>
    );
}

export {MainLayout};