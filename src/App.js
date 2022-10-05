import {Route, Routes,} from "react-router-dom";

import {MainLayout} from "./layout";
import {CommentPage, NotFoundPage, PostPage, UserPage} from "./pages";


function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'users'} element={<UserPage/>}/>
              <Route path={'posts'} element={<PostPage/>}/>
              <Route path={'comments'} element={<CommentPage/>}/>
          </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
