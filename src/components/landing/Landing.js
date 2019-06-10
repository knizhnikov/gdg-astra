import React from 'react';
import Hero from './Hero';
import About from './About';
import Events from './Events';
import Team from './Team';

import styles from './styles/Landing.css';

function Landing() {
    return (
        <>
            <Hero />
            <About />
            <Events />
            <Team />
        </>
    );
}

export default Landing;