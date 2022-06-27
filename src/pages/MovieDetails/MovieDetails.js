import { useParams, useLocation, Link, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from 'react-icons/fa';
import { getMovieDetails } from '../../services/api';
import s from './MovieDetails.module.css';


function MovieDetails() {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const goBack = location?.state?.from ?? '/';

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
        <Link className={s.goBack}  to={goBack}><FaArrowLeft /> Go back</Link>

            {movie && <div  className={s.thumb} >
                <h2 className={s.title}>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
                <div className={s.box}>
                    <img className={s.img} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                    <div className={s.info}>
                        <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
                <p>User Score: {movie.vote_average}</p>

                <p>Additional information</p>
                <NavLink className={({isActive}) => isActive ? s.active : s.link} to="cast" state={{from: goBack}}>Cast</NavLink>
                <NavLink className={({isActive}) => isActive ? s.active : s.link} to="reviews" state={{from: goBack}}>Reviews</NavLink>
                </div>
                </div>
            </div>
            }
        <Outlet/>
    </div>
)
}

export default MovieDetails;