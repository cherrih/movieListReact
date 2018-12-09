import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  var toggle = props.watchedTab;
  //make new arr with ternary: if true then filter for movie.watched otherwise whole array
  var arr = toggle ? props.movies.filter(movie => movie.watched === true) : props.movies.filter(movie => movie.watched === false);
  return (
    arr.map(movie => {
      return (
        <div className='movielist' key={movie.title}><Movie movie={movie} clickHandler={props.handleWatchedClick}/></div>
      ) 
    })
  )
}

export default MovieList;