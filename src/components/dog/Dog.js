const Dog = ({dog, dispatch}) =>{

    return(
        <div>
            <p>Name: {dog.name}</p>
            <button onClick={()=>dispatch({type:'deleteDog', payload: dog.id})}>delete dog</button>
        </div>
    )}

export {Dog}