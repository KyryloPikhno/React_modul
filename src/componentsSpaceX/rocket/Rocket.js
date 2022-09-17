

export default function Rocket (props){
    let{rocket} = props

    return(
        <div className={'box'}>
            <h3>{rocket.mission_name}</h3>
            <p>{rocket.launch_year}</p>
            <img className={'pic'} alt={'pic'} src={rocket.links.mission_patch_small}/>
    </div>
    )}