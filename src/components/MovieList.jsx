import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  return (
      props.movies.map(movie => {
          return (
              <div className='movielist' key={movie.title}><Movie movie={movie} clickHandler={props.handleWatchedClick}/></div>
          )
          
      })
  )

}

export default MovieList;