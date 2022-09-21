export default function Car(props){
    let{car} = props

    return(<div>
        <div>id: {car.id}</div>
        <div>model: {car.model}</div>
        <div>price: {car.price}</div>
        <div>year: {car.year}</div>
    </div>)
}