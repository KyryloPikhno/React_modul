import {Link,Routes,Route} from "react-router-dom";

import {Albums, Comments, Todos, Post} from "./components";
import css from './App.module.css'

function App() {
  return (<div className={css.container}>
      <div className={css.nav}>
        <div><Link to={'/todos'} className={css.item}>todos</Link></div>
        <div><Link to={'/albums'} className={css.item}>albums</Link></div>
        <div><Link to={'/comments'} className={css.item}>comments</Link></div>
      </div>
      <div>
          <Routes>
              <Route path={'/todos'} element={<Todos/>}/>
              <Route path={'/albums'} element={<Albums/>}/>
              <Route path={'/comments'} element={<Comments/>}/>
              <Route path={'/comments/post/:id'} element={<Post/>}/>
          </Routes>
      </div>
    </div>);
}

export default App;
