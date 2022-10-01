import {Route, Routes, Navigate} from "react-router-dom";

import {Layout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";



function App() {

  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<Navigate to={'/login'}/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/cars'} element={<CarsPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
