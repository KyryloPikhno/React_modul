import {useReducer, useRef} from "react";

import {Cat, Dog} from "../../components";
import css from './mainLayout.module.css'


const MainLayout=()=> {

    const reducer=(state, action)=>{
       switch (action.type) {
           case 'addCat':
               return {...state, cats: [...state.cats, {id: Date.now(), name: action.payload}]}
           case 'deleteCat':
               return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}
           case 'addDog':
               return {...state, dogs: [...state.dogs, {id: Date.now(), name: action.payload}]}
           case 'deleteDog':
               return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}
       }
    }

    const [state, dispatch] = useReducer(reducer,{cats:[], dogs:[]})

    const catInput = useRef()

    const dogInput = useRef()

    const createCat = () =>{
        dispatch({type:'addCat', payload: catInput.current.value})
    }

    const createDog = () =>{
        dispatch({type:'addDog', payload: dogInput.current.value})
    }

    return (
        <div className={css.box}>
            <div className={css.cats}>
                <div>
                    <label>Cats names: <input type='text' ref={catInput}/></label>
                    <button onClick={createCat}>Save</button>
                </div>
                <div>
                {
                    state.cats.map((cat) => <Cat key={cat.id} dispatch={dispatch} cat={cat}/>)
                }
                 </div>
            </div>

            <div className={css.animals}>
                <div>
                    <label>Dods names: <input type='text' ref={dogInput}/></label>
                    <button onClick={createDog}>Save</button>
                </div>
                <div>
                {
                    state.dogs.map((dog) => <Dog key={dog.id} dispatch={dispatch} dog={dog}/>)
                }
                 </div>
            </div>
        </div>
    );
}

export {MainLayout};