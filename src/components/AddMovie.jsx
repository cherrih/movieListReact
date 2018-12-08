import React from 'react';

const AddMovie = props => {
  return (
    <form className='addmovie' onSubmit={props.handleAddSubmit}>
      <input type='text' placeholder='Add movie title here' onChange={props.handleAddChange}/>
      <input id='addsubmit' type='submit' value='Add'/>
    </form>
  )
}

export default AddMovie;