import './App.css';
import Persons from "./components/personComponents/Persons";
import Characters from "./components/RickAndMortyComponents/Characters";

function App() {
  return(
      <div className={'app'}>
        <h1>{'task_1'}</h1>
    <Persons/>
          <h1>{'task_2'}</h1>
          <Characters/>
  </div>)
}

export default App;
