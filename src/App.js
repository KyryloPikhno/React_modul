import './App.css';
import Persons from "./components/personComponents/persons/Persons";
import Characters from "./components/RickAndMortyComponents/characters/Characters";
import Users from "./components/userComponents/users/Users";
import Comments from "./components/commentsComponents/comments/Comments";

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
