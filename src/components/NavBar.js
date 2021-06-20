import { Link } from 'gatsby';

const NavBar = () => {
    return (
        <nav>
            <h1>Rui Warrior</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    );
};

export default NavBar;
