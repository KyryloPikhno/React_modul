import {dec, inc, reset, set, useCount2Reducer} from "../../reducers";

const Count2 = () => {

    const [state, dispatch] = useCount2Reducer()

    return (
        <div>
            <h1>Count2: {state.count2}</h1>
            <buttun onClick={()=>dispatch({type: inc})}>INC</buttun>
            <buttun onClick={()=>dispatch({type: dec})}>DEC</buttun>
            <buttun onClick={()=>dispatch({type: reset})}>RESET</buttun>
            <buttun onClick={()=>dispatch({type: set, payload:20})}>SET</buttun>
        </div>
    );
};

export {Count2};