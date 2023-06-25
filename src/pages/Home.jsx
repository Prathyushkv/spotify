import React from 'react'
import image from '../assets/spotify.png'
import './Home.css'
const Home = () => {
  return (
    <div>
        <div class="bg">
        <div class="top">
            <img src={image} width="190px" height="40px" />
            <div class="premium">
                <a href="">Premium</a>
                <a href="">Help</a>
                <a href="">Download</a>
                <a href="" class="no">|</a>
                <a href="">Sign up</a>
                <a href="./Login">Log in</a>
            </div>
        </div>
        <div class="center">
            <h1 class="music">Music for everyone.</h1>
            <h6 class="million">Millions of songs. No credit card required.</h6>
            <button class="click">GET SPOTIFY FREE</button>
        </div>
    </div>
    </div>
  )
}

export default Home