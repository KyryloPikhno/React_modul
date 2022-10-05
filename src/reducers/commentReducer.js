


const commentReducer = ((state = {comments:[]}, action)=>{

    switch (action.type){
        case'LOAD_COMMENTS':
            return {...state, comments: action.payload}

        default:
            return {...state}
    }

})

export {commentReducer}