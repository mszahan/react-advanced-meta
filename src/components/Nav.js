import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className='main-nav'>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/forms'>Forms</Link></li>
                <li><Link to='/blog'>Blog</Link></li>

            </ul>
        </nav>
    );
    }

export default Nav;