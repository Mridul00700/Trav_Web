import React from 'react';
import { Button } from '../Button';
import './main.css';
import '../App.css';
function main() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE LIES AHEAD</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch Trailer <i className="far fa-play-circle" />  
                </Button>

            </div>
        </div>
    )
}

export default main;
