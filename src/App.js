import {Users, Posts} from "./components";

import './App.css';
import {postAxiosService} from "./services";
import {useState} from "react";


function App() {
    const [posts,setPosts] = useState([])

  const getUserId = (userId)=>{
    postAxiosService.getPosts(userId).then(({data})=> setPosts(data))
  }

  return (<div>
    <Users getUserId={getUserId}/>
      <Posts posts={posts}/>
      </div>
  );
}

export default App;
