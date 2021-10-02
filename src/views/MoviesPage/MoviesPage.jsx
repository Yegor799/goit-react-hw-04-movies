import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import '../HomePage/HomePage.css'


export default function MoviesPage() {
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState(null);
    console.log(movies);

    const handleChange = e => {
        console.log(e.target.value);
        setMovie(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        moviesAPI.searcMovie(movie).then(setMovies)
    }
    
    
    
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text"
                        onChange={handleChange}
                    />
                </label>

                <button>Search</button>
            </form>

            <ul className="MovieGallery">
            {movies &&
                
                movies.results.map(movie => <li key={movie.id} className="MovieGalleryItem">
                    <Link to={`movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="MovieGalleryItem-image"/>
                    </Link>
                    
                </li>)}
        </ul>
        </>
    );
}