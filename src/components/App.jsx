import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import movies from './data/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      movies: movies,
      addValue: '',
      watchedTab: false,
    };
  }

  handleSearchChange(event) {
    this.setState({searchValue: event.target.value});
  }
  handleSearchSubmit(event) {
    event.preventDefault();
    let updatedMovies = [];
    movies.forEach(movie => {
      if (movie.title.includes(this.state.searchValue)) {
        updatedMovies.push(movie);
      } 
    })
    if (updatedMovies.length === 0) {
      alert('Oops! I couldn\'t find that one. Try again.');
      this.setState({movies: movies})
    } else {
      this.setState({movies: updatedMovies});
    }
  }

  handleAddChange(event) {
    this.setState({addValue: event.target.value})
  }
  handleAddSubmit(event) {
    event.preventDefault();
    movies.push({title: this.state.addValue, displayData:false, watched: false, year: 1990, runtime: '107 minutes', metascore: 46, imdbRating: 9.2})
    this.setState({movies:movies})
  }


  handleToWatchSubmit(event) {
    event.preventDefault();
    this.setState({watchedTab: false});
    this.forceUpdate();
  }
  handleWatchedSubmit(event) {
    event.preventDefault();
    this.setState({watchedTab: true});
    this.forceUpdate();
  }

  handleWatchedClick(event) {
    event.preventDefault();
    movies.forEach(movie => {
      if (movie.title === event.target.id) {
        movie.watched = !movie.watched;
        movie.displayData = !movie.displayData;
      } 
    })
    this.forceUpdate();
    
  }

  displayDataHandler(event) {
    movies.forEach(movie => {
      if (movie.title === event.target.id) {
        movie.displayData = !movie.displayData;
      } 
    })
    this.forceUpdate();
  }

  render() {
      return (
        <div>
        <div className='title'><h1>Movie List</h1></div>
        <div>
          <AddMovie 
          handleAddSubmit={this.handleAddSubmit.bind(this)} 
          handleAddChange={this.handleAddChange.bind(this)}/>
        </div>
        <span>
          <Search handleSearchSubmit={this.handleSearchSubmit.bind(this)} 
            handleSearchChange={this.handleSearchChange.bind(this)}
            handleToWatchSubmit={this.handleToWatchSubmit.bind(this)}
            handleWatchedSubmit={this.handleWatchedSubmit.bind(this)}/>
          </span>
          <div>
            <MovieList handleDisplay={this.displayDataHandler.bind(this)} 
              displayData={this.state.displayData}
              watchedTab={this.state.watchedTab} 
              movies={this.state.movies} 
              handleWatchedClick={this.handleWatchedClick.bind(this)}/>
          </div>
        </div>
      )
  }

}


export default App;
