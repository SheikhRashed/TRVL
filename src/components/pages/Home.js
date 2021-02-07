import React from 'react';

import '../../App.css';

// Component
import Hero from '../hero/hero';
import Cards from '../card/cards';
function home() {
    return (
        <>
            <Hero />
            <Cards />
        </>
    );
}

export default home;
