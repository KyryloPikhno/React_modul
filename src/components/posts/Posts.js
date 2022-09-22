import {Post} from "../post/Post";


const Posts=(props)=>{

    let {posts}=props




    return(<div>
        {
            posts.map(post => <Post key={post.id} post={post}/>)
        }
    </div>)
}

export {Posts}