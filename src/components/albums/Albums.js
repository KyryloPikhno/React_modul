import {useEffect, useState} from "react";

import {albumAxiosService} from "../../services";
import {Album} from "../album/Album";
import  css from './albums.module.css'


const Albums = () => {

 const [albums, setAlbums] = useState([])

    useEffect(()=>{
        albumAxiosService.getAll()
            .then(({data})=>setAlbums(data))
    },[])

    return(<div className={css.albums}>
        {
            albums.map(album => <Album album={album} key={album.id}/>)
        }
    </div>)
};

export{Albums}