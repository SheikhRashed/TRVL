import React from 'react';

import '../../App.css';

// Component
import Hero from '../hero/hero';
import Cards from '../card/cards';
import Footer from '../footer/Footer';
function home() {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    );
}

export default home;
