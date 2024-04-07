import React from 'react'
import "./Homepage.style.css"
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';

const Homepage = () => {
  return (
    <div>
     <Banner/>
     <PopularMovieSlide/>
    </div>
  )
}

export default Homepage
