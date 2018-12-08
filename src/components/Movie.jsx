import React from 'react';

const Movie = props => {
  return (
    <div>
      <span id='movietitle'>{props.movie.title}</span>
      <span ><input type='submit' value='watched' id='watchedbutton' onClick={props.clickHandler}/></span>
    </div>
  )
}

export default Movie;