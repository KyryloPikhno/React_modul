import {useState} from 'react';
import Character from '../character/character'

export default function Characters(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let[characters,setCharacters] = useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0,6))
        })

return (
    <div className={'container'}>
        {characters.map((character, index)=>(<Character character={character} key={index}/>))}
    </div>
)
}