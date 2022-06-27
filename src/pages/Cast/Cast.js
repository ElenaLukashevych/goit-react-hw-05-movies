import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import defaultImage from './defaultImage.jpg';
import s from './Cast.module.css';


function Cast() {
const { movieId } = useParams();
const [cast, setCast] = useState(null);
    useEffect(() => {
        async function getCast() {
            try {
                const movieCast = await getMovieCredits(movieId)
                setCast(movieCast)
            } catch (error) {
                console.log(error);
            } 
        }
     getCast()   
    }, [movieId]); 

    return (
        <div>
             { cast && <ul className={s.list}>
                {cast.cast.map(({ id, profile_path, name, character }) => <li className={s.item} key={id}>
                    <img className={s.img} src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : defaultImage} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)}
        </ul>}
       </div>
    )



}

export default Cast;