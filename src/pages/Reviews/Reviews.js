import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';

function Reviews() {
const { movieId } = useParams();
const [reviews, setReviews] = useState(null);
    useEffect(() => {
        async function getCast() {
            try {
                const movieReviews = await getMovieReviews(movieId)
                setReviews(movieReviews)
            } catch (error) {
                console.log(error);
            } 
        }
     getCast()   
    }, [movieId]);

    return (
        <div>
            {reviews && <ul>
                 {reviews.results.length > 0 ? reviews.results.map(({ author, content, id }) => <li key={id}>
                     <p>Author: {author}</p>
                     <p>{content}</p>
                </li>) : <p>We dont have any reviews for this movie</p>}
            </ul>}
        </div>
    )
}

export default Reviews;