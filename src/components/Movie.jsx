import React from 'react';

const Movie = props => {
  return (
    <div className={props.movie.title}>
      <span id='movietitle'>{props.movie.title}</span>
      <span ><input type='submit' value='watched' id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
    </div>
  )
}

export default Movie;