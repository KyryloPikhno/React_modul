import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux/slices";
import {Car} from "../Car/Car";


const Cars = () => {

    const dispatch = useDispatch()

    const {cars} = useSelector(state => state.carReducer)

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};