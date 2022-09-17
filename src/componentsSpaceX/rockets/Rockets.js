import Rocket from "../rocket/Rocket";
import {getAllRockets} from "../services/rocket.api.axios.service";
import {useEffect, useState} from "react";

export default function Rockets(){

    let [rockets,setRockets] = useState([])

    useEffect(()=>{
        getAllRockets()
            .then(({data}) => data.filter(rocket => rocket.launch_year !=='2020'))
            .then(value=> setRockets(value))
    },[])

    return(<div className={'containerForRockets'}>
        {
       rockets.length? rockets.map((rocket,index)=> <Rocket rocket={rocket} key={index}/>) :
           <div className={'box'}>{'Wait for your rockets. Besides 2020 year.'}</div>
        }
    </div>)
}