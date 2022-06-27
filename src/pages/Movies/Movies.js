import { useLocation, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm';
import { getSearchMovies } from '../../services/api';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Movies.module.css';


function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');

    useEffect(() => {
        async function searchMovies() {
            if (!searchQuery) {
                return
            }
            try {
                setLoading(true);
                const movie = await getSearchMovies(searchQuery)
                setMovies(movie)
            } catch (error) {
                toast.error('Not found')
                console.log(error);

            } finally {
                setLoading(false);
            }
        }
     searchMovies()   
    }, [searchQuery]);

    const handleSubmit = (name) => {
        setSearchParams({ query: name })
    }

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            {loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
            {movies && <ul className={s.list}>
                {movies.map(({ id, title, poster_path }) => <li className={s.item} key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        <img className={s.img} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}></img>
                        <p className={s.text}>{title}</p></Link>
                </li>)}
            </ul> }
        </>
    )

}

export default Movies;