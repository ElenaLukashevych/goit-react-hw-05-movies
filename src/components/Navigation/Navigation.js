import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';



function Navigation() {
    return (
        <header className={s.header}>
            <nav>
                <NavLink className={({isActive}) => isActive ? s.active : s.link}
                    to='/'
                >
                    Home
                </NavLink>

                <NavLink className={({isActive}) => isActive ? s.active : s.link}
                    to='/movies'
                >
                    Movies
                </NavLink>
            </nav>
    </header>
)
}

export default Navigation;