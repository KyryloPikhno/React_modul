
export default function Character(props){
    let {character} = props

    return(<div className={'box'}>
        <h3 className={'text'}>id: {character.id}{props.name}</h3>
        <p className={'text'}>status {character.status}</p>
        <p className={'text'}>{character.species}</p>
        {/*<p className={'text'}>{character.gender}</p>*/}
        {/*<img className={'pic'} src={character.image} alt={'pic'}/>*/}
    </div>)
}