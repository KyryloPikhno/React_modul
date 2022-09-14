import {simpsons} from "../data";
import Person from "../person/person";

export default function Persons(){
    return(<div className={'container'}>
        {simpsons.map((person,index)=>(<Person person={person} key={index}/>))}
    </div>)
}