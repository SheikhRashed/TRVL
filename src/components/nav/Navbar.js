import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(false);

    // Events
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                    <button className='menu-icon' onClick={handleClick}>
                        {click ? (
                            <i className='fas fa-times'></i>
                        ) : (
                            <i className='fas fa-bars'></i>
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
