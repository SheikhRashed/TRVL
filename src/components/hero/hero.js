import React from 'react';
import '../hero/hero.css';
// Components
import { Button } from '../button/Button';
function Hero() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted></video>
            <h1>ADEVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button
                    // className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    // className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    );
}

export default Hero;
