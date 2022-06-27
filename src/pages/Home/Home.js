import { ThreeDots } from 'react-loader-spinner';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrending } from '../../services/api';

function Home() {
    const [trendings, setTrendings] = useState([]);
    const [loading, setLoading] = useState(false);
  

useEffect(() => {
    const getMovies = async () => {
        try {
            setLoading(true);
            const movies = await getTrending();
            setTrendings(movies)
    } catch (error) {
        console.log(error);
        } finally {
    setLoading(false);
    }
    }
    getMovies()
}, []);

    return (
        <section>
            {loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
            <h1>Trending today</h1>
            <ul>
                {trendings.map((({id, title}) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>))}
            </ul>
            </section>
)
}

export default Home;