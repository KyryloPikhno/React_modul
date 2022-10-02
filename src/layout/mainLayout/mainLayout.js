import {useReducer, useState} from "react";

import {Cat, Dog} from "../../components";
import {variable} from "../../config";


const MainLayout=()=> {

    const reducer=(state, action)=>{
        switch (action.type){
            case variable.cat:
                return [...state, newCatName(action.payload.name)]
            case variable.dog:
                return [...state, newDogName(action.payload.name)]
            case variable.delete:
                return state.filter(animal => animal.id !== action.payload.id)
        }
    }

    const newCatName=(name)=>{
        return {id: Date.now(), animal:'cat', name: name}
    }

    const newDogName=(name)=>{
        return {id: Date.now(), animal:'dog', dogName: name}
    }

    const[state, dispatch] = useReducer(reducer, [])
    const[name, setName] = useState('')
    // const[dogName, setDogName] = useState('')

    const handleSubmitCat = (e) =>{
        e.preventDefault()
        dispatch({type: variable.cat, payload: {name: name}})
        setName('')
    }

    const handleSubmitDog = (e) =>{
        e.preventDefault()
        dispatch({type: variable.dog, payload: {name: name}})
        setName('')
    }

    console.log(state)

    return (
        <div>
            <div>
                <form onSubmit={handleSubmitCat}>
                    <input type='text' value={name} placeholder={'catName'} onChange={(e)=>setName(e.target.value)}/>
                    <button>save</button>
                </form>
                {state.filter(cat=>cat.animal==='cat').map((cat, index) => <Cat cat={cat} key={index} dispatch={dispatch}/>)}
            </div>

            <div>
                <form onSubmit={handleSubmitDog}>
                    <input type='text' value={name} placeholder={'dogName'} onChange={(e)=>setName(e.target.value)}/>
                    <button>save</button>
                </form>
                {state.filter(dog=>dog.animal==='dog').map((dog, index) => <Dog dog={dog} key={index} dispatch={dispatch}/>)}
            </div>
         </div>
    );
}

export {MainLayout};