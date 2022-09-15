import './App.css';
import Persons from "./components/personComponents/Persons";
import Characters from "./components/RickAndMortyComponents/Characters";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

function App() {
  return(
      <div className={'app'}>
        <h1>{'task_1'}</h1>
    <Persons/>
          <h1>{'task_2'}</h1>
          <Characters/>
          <h1>{'additional task with fetch'}</h1>
          <Users/>
          <h1>{'additional task with data'}</h1>
          <Comments/>
  </div>)
}

export default App;
