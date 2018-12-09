import React from 'react';

const Movie = props => {
  var watched = props.movie.watched;
  return (
    <div className={props.movie.title}>
      <div>
      { watched ? 
        <div>
      <span id='movietitle' className='watched'>{props.movie.title}</span>
      <span ><input type='submit' value='to watch' id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
    </div>  
        :
        <div>
        <span id='movietitle'>{props.movie.title}</span>
        <span ><input type='submit' value='watched' id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
      </div>
      }
      </div> 
    </div>
  )
}

export default Movie;



// return (
//   <div className={props.movie.title}>
    // <div>
    //   <span id='movietitle'>{props.movie.title}</span>
    //   <span ><input type='submit' value='watched' id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
    // </div> 
//   </div>
// )