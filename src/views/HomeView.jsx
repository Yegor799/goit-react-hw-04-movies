import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/movies-api'
import "./HomeView.css"


export default function HomeView() {
    const [movies, setMovies] = useState(null);
    console.log(movies)
    

useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setMovies)
}, [])

    return (
        <ul className="MovieGallery">
            {movies &&
                
                movies.results.map(movie => <li key={movie.id} className="MovieGalleryItem">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="MovieGalleryItem-image" />
                </li>)}
</ul>
    )
}