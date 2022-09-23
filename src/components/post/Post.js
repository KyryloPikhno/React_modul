const Post =(props)=>{

    const {post} = props

    return(<div>
        <p>{post.id} - {post.title}</p>
    </div>)
}


export {Post}