import css from './album.module.css'

const Album = ({album}) => {

    return(<div className={css.album}>
        <h2>{'Album'}</h2>
        <h3>user id: {album.userId}</h3>
        <h3>id: {album.id}</h3>
        <h3>title: {album.title}</h3>
    </div>)
};

export{Album}