import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import defaultImage from './defaultImage.jpg';

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
             { cast && <ul>
                {cast.cast.map(({ id, profile_path, name, character }) => <li key={id}>
                    <img src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : defaultImage} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)}
        </ul>}
       </div>
    )



}

export default Cast;