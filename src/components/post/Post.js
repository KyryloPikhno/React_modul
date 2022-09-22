const Post = (props)=>{

    let {post} = props

    return(<div>
        <div>{post.id} - {post.title}</div>
    </div>)
}

export {Post}