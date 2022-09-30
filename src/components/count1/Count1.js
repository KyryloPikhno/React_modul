import {dec, inc, reset, set, useCount1Reducer} from "../../reducers";

const Count1 = () => {

    const [state, dispatch] = useCount1Reducer()

    return (
        <div>
            <h1>Count1: {state.count1}</h1>
            <buttun onClick={()=>dispatch({type: inc})}>INC</buttun>
            <buttun onClick={()=>dispatch({type: dec})}>DEC</buttun>
            <buttun onClick={()=>dispatch({type: reset})}>RESET</buttun>
            <buttun onClick={()=>dispatch({type: set, payload:10})}>SET</buttun>
        </div>
    );
};

export {Count1};