import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import "./MovieDetailsPage.css"
import * as moviesAPI from '../../services/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage() {
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    

    useEffect(() => {
       moviesAPI.fetchMovieById(movieId).then(setMovie)
    }, [movieId])



    return (
        <>
            {movie && (                
                <div className="MovieDetailsPage">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="MovieGallery-image" />
                    <div>
                    <h2>{movie.title} ({movie.release_date.substring(0, 4)})</h2>
                    <p>Rating: {movie.vote_average}/10</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <ul className="MovieDetailsPage-genres">
                        {movie.genres.map((genre, idx) => (
                            <li key={idx} className="MovieDetailsPage-genres__item">{genre.name}</li>
                        ))}
                        </ul>
                    </div>                    
                </div>
                    
                   
            )         
            }
            <h3>Additional information</h3>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>

            <Route path={`${path}/cast`}>
                {movie && <Cast/>}
            </Route>

            <Route path={`${path}/reviews`}>
                {movie && <Reviews/>}
            </Route>

        </>
    )
}