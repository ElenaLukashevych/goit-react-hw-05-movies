import { useParams, useLocation, Link, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from 'react-icons/fa';
import { getMovieDetails } from '../../services/api'

function MovieDetails() {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    

    useEffect(() => {
        async function getDetails() {
            try {
                setLoading(true);
                const movieDetails = await getMovieDetails(movieId)
                setMovie(movieDetails)
            } catch (error) {
                toast.error('Not found')
                console.log(error);

            } finally {
                setLoading(false);
            }
        }
     getDetails()   
    }, [movieId]);

    return (
        <div>
            {loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
        <Link  to={location?.state?.from ?? '/'}><FaArrowLeft /> Go back</Link>

            {movie && <div>
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
                <p>User Score: {movie.vote_average}</p>

                <p>Additional information</p>
                <NavLink to="cast">Cast</NavLink>
                <NavLink to="reviews">Reviews</NavLink>
            </div>
            }
        <Outlet/>
    </div>
)
}

export default MovieDetails;