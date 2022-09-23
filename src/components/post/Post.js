const Post =(props)=>{

    const {post,addComment} = props

    return(<div>
        <p>{post.id} - {post.title}</p>
        <button onClick={()=>addComment(post.postId)}>addComment</button>
    </div>)
}


export {Post}