import {Routes,Route,Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AboutPage, AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "./pages";



function App() {
  return (

          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'home'}/>}/>
                      <Route path={'home'} element={<HomePage/>}/>
                  <Route path={'todos'} element={<TodosPage/>}/>
                  <Route path={'albums'} element={<AlbumsPage/>}/>
                  <Route path={'comments'} element={<CommentsPage/>}/>
                  <Route path={'about'} element={<AboutPage/>}/>
          </Route>
               <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
  )
}

export default App;
