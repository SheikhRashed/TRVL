import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// components
import { Button } from '../button/Button';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Events
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () =>
        window.innerWidth <= 960 ? setButton(false) : setButton(true);
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link
                        to='/'
                        className='navbar-logo'
                        onClick={closeMobileMenu}
                    >
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? (
                            <i className='fas fa-times'></i>
                        ) : (
                            <i className='fas fa-bars'></i>
                        )}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                onClick={closeMobileMenu}
                                className='nav-links'
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                onClick={closeMobileMenu}
                                className='nav-links'
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Products'
                                onClick={closeMobileMenu}
                                className='nav-links'
                            >
                                Product
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/sign-up'
                                onClick={closeMobileMenu}
                                className='nav-links-mobile'
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && (
                        <Button buttonStyle='btn--outline' type='submit'>
                            Sign up
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
