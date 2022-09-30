import {Route, Routers, Navigate} from "react-router-dom";

import {Layout} from "./layouts";


function App() {

  return (
    <Routers>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<Navigate to={'/login'}/>}/>
            <Route path={'/login'} element={}/>
            <Route path={'/register'} element={}/>
        </Route>
    </Routers>
  );
}

export default App;
