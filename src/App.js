import {useReducer} from "react";


const init=(initialValue)=>{
    return {counter1:initialValue, counter2:initialValue}
}

const reducer =(state, action)=>{
    console.log(action)

    switch (action.type){
        case 'inc1':
            return {...state, counter1: state.counter1 + 1}
        case 'dec1':
            return {...state, counter1: state.counter1 - 1}
        case 'reset1':
            return {...state, counter1: 0}
        case 'set1':
            return {...state, counter1: action.payload}
    }
    return {...state}
}

function App() {
   let [state, dispatch] = useReducer(reducer, 0,init)

  return (
    <div>
        <h1>counter1: {state.counter1}</h1>
        <h1>counter2: {state.counter2}</h1>
         <hr/>
        <button onClick={()=>dispatch({type: 'inc1'})}>INC</button>
        <button onClick={()=>dispatch({type: 'dec1'})}>DEC</button>
        <button onClick={()=>dispatch({type: 'reset1'})}>RESET</button>
        <button onClick={()=>dispatch({type: 'set1', payload: 10})}>SET</button>
    </div>
  );
}

export default App;
