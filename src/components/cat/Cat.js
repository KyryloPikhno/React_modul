const Cat = ({cat, dispatch}) =>{

    return(
        <div>
            <p>Name: {cat.name}</p>
            <button onClick={()=> dispatch({type: 'deleteCat', payload: cat.id})}>delete cat</button>
        </div>
    )}

export {Cat}