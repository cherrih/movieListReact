import React from 'react';

const Search = props => {
    return (
      <form className='search' onSubmit={props.handleSearchSubmit}>
        <button id='watched' type='submit' onClick={props.handleWatchedSubmit}> Watched</button>
        <button id='towatch' type='submit' onClick={props.handleToWatchSubmit}> To Watch</button>
        <input type='text' placeholder='Search...' onChange={props.handleSearchChange}/>
        <input type='submit' value='Go!' />
      </form>
    )

}

export default Search;

// value={this.state.value} 