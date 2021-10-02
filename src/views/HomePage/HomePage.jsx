import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import "./HomePage.css"


export default function HomeView() {
    const [movies, setMovies] = useState(null);
    
    

useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setMovies)
}, [])

    return (
        <ul className="MovieGallery">
            {movies &&
                
                movies.results.map(movie => <li key={movie.id} className="MovieGalleryItem">
                    <Link to={`movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="MovieGalleryItem-image"/>
                    </Link>
                    {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="MovieGalleryItem-image" /> */}
                </li>)}
        </ul>
    );
}