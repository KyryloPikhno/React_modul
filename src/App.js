
import {useForm} from "react-hook-form";
import {useReducer} from "react";


const init =(initialValue)=>{
    return{cats:initialValue, dogs:initialValue}
}

const reducer =(state, action)=>{
    switch (action.type){
        case 'createCar':
            return {...state, state.cats.concat([action,payload]) }
    }


}

function App() {

    const[state,dispatch] = useReducer(reducer, {cats:[], dogs:[]})

    const{register, handleSubmit} = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>cats:{state.cats}</h1>
        <input type='text' placeholder={'cats'} {...register('cats')}/>
        <button>Submit</button>
    </form>
  );
}

export default App;
