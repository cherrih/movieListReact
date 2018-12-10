import React from 'react';

const Movie = props => {
  var displayData = props.movie.displayData;

  return (
    <div className={props.movie.title} >
      <div id={props.movie.title}className='movietitle'>{props.movie.title}</div>
      {/* <Description watched = {props.movie.watched} clickHandler={props.handleWatchedClick} movie={props.movie}/> */}
    </div>
  )
}

export default Movie;
