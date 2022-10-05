



const postReducer = ((state = {posts:[]}, action)=>{

    switch (action.type){
        case'LOAD_POSTS':
            return {...state, posts: action.payload}

        default:
            return {...state}
    }

})

export {postReducer}