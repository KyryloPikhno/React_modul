import './App.css';
import Users from "./components/users/Users";
import Rockets from "./componentsSpaceX/rockets/Rockets";


function App(){
  return (
    <div className="App">
      <h1>task_1</h1>
    <Users/>
        <h1>task_2</h1>
        <Rockets/>
    </div>
  );
}

export default App ;

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
//
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)