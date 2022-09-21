import css from './Car.module.css'

export default function Car(props){
    let{car} = props

    return(<div className={css.box} >
        <div>id: {car.id}</div>
        <div>model: {car.model}</div>
        <div>price: {car.price}</div>
        <div>year: {car.year}</div>
        <button className={css.button}>Update</button>
        <button className={css.button}>Delete</button>
    </div>)
}