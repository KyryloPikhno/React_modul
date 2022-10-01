import {CarForm, Cars} from "../../components";
import {useEffect, useState} from "react";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    let[cars, setCars]= useState([])
    let [prev, setPrev] = useState(null)
    let [next, setNext] = useState(null)
    let [query, setQuery] = useSearchParams({page: '1'})

    useEffect(()=>{
        carService.getAll(query.get('page'))
            .then(({data:res})=>{
                setCars(res.data)
                setPrev(res.prev)
                setNext(res.next)
            })
    },[query])

    let prevPage=()=>{
       setQuery(value=>({page:value.get('page')-1}))
    }

    let nextPage=()=>{
        setQuery(value=>({page:+value.get('page')+1}))
    }

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {CarsPage};