import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";


function App() {

      return (
          <div>
               <Routes>
                    <Route path={'/'} element={<MainLayout/>}/>
               </Routes>
          </div>
      );
    }

export default App;
