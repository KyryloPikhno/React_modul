import {dec, inc, reset, set, useCount1Reducer} from "../../reducers";

const Count1 = () => {

    const [state, dispatch] = useCount1Reducer()

    return (
        <div>
            <h1>Count1: {state.count1}</h1>

            <button onClick={()=>dispatch({type: inc})}>INC</button>
            <button onClick={()=>dispatch({type: dec})}>DEC</button>
            <button onClick={()=>dispatch({type: reset})}>RESET</button>
            <button onClick={()=>dispatch({type: set, payload:10})}>SET</button>
        </div>
    );
};

export {Count1};