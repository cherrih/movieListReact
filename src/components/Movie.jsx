import React from 'react';

const Movie = props => {

  return (
    <div className={props.movie.title} >
      <div id={props.movie.title}className='movietitle'>{props.movie.title}</div>
      <span ><input type='submit' value={props.watched ? 'to watch' : 'watched'} id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
    </div>
  )
}

export default Movie;
