import {Header, Posts, Users} from "./components";
import css from './style/App.module.css'


function App() {
  return (
    <div className={css.container}>
        <div>
             <Header/>
        </div>
        <div>
            <Users/>
             <hr/>
            <Posts/>
        </div>
    </div>
  );
}

export default App;
