import './navbar.scss';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__content'>
                <ul className=''>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <h1>Landing</h1>
                <button>Buy Now</button>
            </div>
        </nav>
    );
};

export default Navbar;
