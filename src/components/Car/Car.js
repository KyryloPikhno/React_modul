import {useDispatch} from "react-redux";

import {carActions} from "../../redux/slices";
import css from './Car.module.css'


const Car = ({car}) => {

    const {id, model, year, price} = car

    const dispatch = useDispatch()

    return (
        <div className={css.box}>
            <h3>id: {id}</h3>
            <h3>model: {model}</h3>
            <h3>year: {year}</h3>
            <h3>price: {price}</h3>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>Delete</button>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};