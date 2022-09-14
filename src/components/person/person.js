export default function Person(props){
    let {person}= props

    return(<div className={'box'}>
        <h3 className={'text'}>{person.name}</h3>
        <p className={'text'}>surname -{person.surname}</p>
        <p className={'text'}>age - {person.age}</p>
        <p className={'text'}>{person.info}</p>
        <img className={'img'} src={person.photo}/>
    </div>);
}