import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopRatedPage from './components/TopRatedPage';
import UpcomingMoviePage from './components/UpcomingMoviePage';
import SingleMovieDetailPage from './components/SingleMovieDetailPage';
import SearchedMoviePage from './components/SearchedMoviePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRatedPage/>} />
          <Route path="/upcoming" element={<UpcomingMoviePage  />} />
          <Route path="/movie/:movieId" element={<SingleMovieDetailPage />} /> 
          <Route path="/search" element={<SearchedMoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;