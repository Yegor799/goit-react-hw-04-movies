import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import "./Reviews.css"

export default function Reviews() {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();
    

    useEffect(() => {
        moviesAPI.fetchReviews(movieId).then(setReviews)
    }, [movieId]);

    return (
        <>
          <ul>
                {reviews && reviews.results.length > 0
                    ? reviews.results.map(review => {
                    return (
                        <li key={review.id} className="ReviewsItem">
                            {review.content}
                          <hr/>
                        </li>                        
                 )})                
                    : <p>There are no reviews</p>
            }
          </ul>
        </>
    )
}