import React from 'react';

const Description = props => {
  return (
    <div>
      {props.display ?
        <div id='description'>
          <div>Year: {props.movie.year}</div>
          <div>Runtime: {props.movie.runtime}</div>
          <div>IMDB Rating: {props.movie.imdbRating}</div>
        </div>
        : 
        <div></div>}
    </div>
  )
};

export default Description;
