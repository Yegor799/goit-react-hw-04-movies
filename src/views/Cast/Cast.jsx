import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import image from "../../data/default.jpg"


export default function Cast() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
         

    useEffect(() => {
       moviesAPI.fetchCastInformation(movieId).then(setMovie)
    }, [movieId])


    return (
        <>
            <ul>
                {movie && movie.cast.map((item) => {                  
                    
                    return (
                        <li key={item.id}>
                            {item.profile_path
                                ? <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="" />
                                : <img src={image} alt="" style={{width: 200}} />
                             }
                            <p>{item.name}</p>
                            <p>Character: {item.character}</p>                        
                        </li>
                    )
                })}
            </ul>
        </>
    )
}