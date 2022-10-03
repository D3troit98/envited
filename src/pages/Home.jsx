import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Landing page image.svg"
import "./home.css"
const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_content-text medium-screen'>
                <h1 className='home_header'>Imagine if <br />
                    <span className='home_gradient_header'>Snapchat</span> <br />
                    had events.
                </h1>
                <p className='home_text'>Easily host and share events with your <br /> friends across any social media.</p>

            </div>
            <div className='home_logo-image'>
                <img src={logo} alt="logo" />
            </div>
            <div className='home_content-text '>
                <h1 className='home_header large-screen'>Imagine if <br />
                    <span className='home_gradient_header'>Snapchat</span> <br />
                    had events.
                </h1>
                <p className='home_text large-screen'>Easily host and share events with your <br /> friends across any social media.</p>
                <Link to="/create">
                    <button type="button" className='home_button'>🎉 Create my event</button>
                </Link>
            </div>
        </div>
    )
}

export default Home