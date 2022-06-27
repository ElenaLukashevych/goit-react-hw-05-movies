import { useLocation, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm';
import { getSearchMovies } from '../../services/api';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            {movies && <ul>
                {movies.map(({ id, title }) => <li key={id}>
                    <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
                </li>)}
            </ul> }
        </>
    )

}

export default Movies;