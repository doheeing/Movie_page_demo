import React from 'react'
import "./Homepage.style.css"
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovie from './components/TopRatedMovie/TopRatedMovie';

const Homepage = () => {
  return (
    <div>
     <Banner/>
     <PopularMovieSlide/>
     <TopRatedMovie/>
    </div>
  )
}

export default Homepage
