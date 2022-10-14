import {useDispatch} from "react-redux";

import {carActions} from "../../redux/slices";
import css from './Car.module.css'


const Car = ({car}) => {

    const {id, model, year, price} = car

    const dispatch = useDispatch()

    return (
        <div className={css.box}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>Delete</button>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};