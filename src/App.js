import './App.css';
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
<h1>task_1</h1>
      <Users/>
    </div>
  );
}

export default App;




// 1 Отримати всіх користувачів з jsonplaceholder, вивести їх.
// 2 Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// 3 Запити робити через axios, організація коду через сервіси