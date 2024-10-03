import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDisplay, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../index.css'; 
import '../app.css'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Brand</div>

            

            {/* Navigation Menu */}
            <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a className='conHead' href="#">Contact US</a></li>
            </ul>

            <button className='buttonhead '>
                <div>
                <FontAwesomeIcon icon="fa-solid fa-id-card" />
                    Contact US
                </div>
            </button>

            {/* Hamburger Menu Icon */}
            <label htmlFor="click" className="menu-btn" onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </label>
            
        </nav>
    );
};

export default Navbar;
