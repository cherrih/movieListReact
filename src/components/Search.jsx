import React from 'react';

const Search = props => {
  
    return (
      <form className='search' onSubmit={props.handleSubmit}>
        <input type='text' placeholder='Search...' onChange={props.handleChange}/>
        <input type='submit' value='Go!' />
      </form>
    )

}

export default Search;

// value={this.state.value} 