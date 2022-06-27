import { ThreeDots } from 'react-loader-spinner';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrending } from '../../services/api';
import s from './Home.module.css';

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
            <h1 className={s.title}>Trending today</h1>
            <ul className={s.list}>
                {trendings.map((({ id, title, poster_path }) => <li className={s.item} key={id}><Link className={s.link} to={`/movies/${id}`}>
                    <img className={s.img} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}></img>
                   <p className={s.text}> {title}</p></Link></li>))}
            </ul>
            </section>
)
}

export default Home;