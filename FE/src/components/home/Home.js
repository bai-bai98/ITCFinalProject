import React from 'react';
import './home.css'
import logo from '../img/1bc7f7f40f4c4b9ba92e3f365bf4bb86.png';
import { Container } from 'react-bootstrap';
export default function Home() {

    return (
        <div className='container'>
            <div className="homeContainer">
                <div className="homeWelcomeMessage">
                <div className='container'>
                    <h1>Welcome to Cleanup!</h1>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <p>Cleanup connects between cleaners and lazy people. So, what are u waiting for?</p>
                </div>
                </div>
            </div>
        </div>
    )
}
