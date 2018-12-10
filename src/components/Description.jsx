import React from 'react';

const Description = props => {
  return (
    <div>
      {props.display ?
        <div id='description'>
          <div>Year: {props.movie.year}</div>
          <div>Runtime: {props.movie.runtime}</div>
          <div>IMDB Rating: {props.movie.imdbRating}</div>
          <input id='watched' type='submit' value='Watched'/>
        </div>
        : 
        <div></div>}
    </div>
  )
};

export default Description;

//    watched ? 
//         <div>
//       <span id='movietitle' className='watched'>{props.movie.title}</span>
//       <span ><input type='submit' value='to watch' id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
//     </div>  
//         :
//         <div>
//         <span id='movietitle'>{props.movie.title}</span>
//         <span ><input type='submit' value='watched' id={props.movie.title} className='watchedbutton' onClick={props.clickHandler}/></span>
//       </div>