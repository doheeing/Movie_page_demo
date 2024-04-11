import React from 'react'
import "./Homepage.style.css"
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovie';
import UpComingMovieSlide from './components/UpComingMovieSlide/UpComingMovieSlide';
import Footer from '../../layout/Footer/Footer';

const Homepage = () => {
  return (
    <div>
     <Banner/>
     <PopularMovieSlide/>
     <TopRatedMovieSlide/>
     <UpComingMovieSlide/>
    </div>
  )
}

export default Homepage
