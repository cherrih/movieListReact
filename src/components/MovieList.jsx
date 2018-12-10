import React from 'react';
import Movie from './Movie.jsx';
import Description from './Description.jsx';

const MovieList = (props) => {
  var toggle = props.watchedTab;
  //make new arr with ternary: if true then filter for movie.watched otherwise whole array
  var arr = toggle ? props.movies.filter(movie => movie.watched === true) : props.movies.filter(movie => movie.watched === false);
  return (
    arr.map(movie => {
      return (
        <div key={movie.title}>
        <div className='movielist' id={movie.title} onClick={props.handleDisplay}><Movie movie={movie} handleDisplay={props.handleDisplay}/></div>
        <div id={movie.title}><Description watched = {movie.watched} movie={movie} display = {movie.displayData}/></div>
        </div>
      ) 
    })
  )
}

export default MovieList;