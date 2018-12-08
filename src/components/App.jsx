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
      watchedMovies: [],
      show: true,
    };
  }

  handleSearchChange(event) {
    this.setState({searchValue: event.target.value});
  }
  handleSearchSubmit(event) {
    event.preventDefault();
    let updatedMovies = [];
    this.state.movies.forEach(movie => {
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
    movies.push({title: this.state.addValue})
    this.setState({movies:movies})
  }

  handleToWatchSubmit(event) {
    event.preventDefault();
    console.log('clicked!');
    this.setState({movies: movies})
  }
  handleWatchedSubmit(event) {
    event.preventDefault();
    console.log('clicked!');
    this.setState({movies: this.state.watchedMovies})
  }
  handleWatchedClick(event) {
    event.preventDefault();
    //can get the div element that's selected then set show to false
    //console.log(document.getElementsByClassName(event.target.id)[0])
    
    //find the movie in the array, slice and push to watched array
    // console.log(event.target.id);
    this.state.watchedMovies.push({title: event.target.id});
    console.log(this.state.watchedMovies);
    // console.log({title: event.target.id});

    // var index = this.state.movies.indexOf(event.target.id);
    // console.log(index);
  }

  render() {
      return (
        <div>
        <div className='title'><h1>Movie List</h1></div>
        <div><AddMovie handleAddSubmit={this.handleAddSubmit.bind(this)} handleAddChange={this.handleAddChange.bind(this)}/></div>
        <span>
          <Search handleSearchSubmit={this.handleSearchSubmit.bind(this)} 
            handleSearchChange={this.handleSearchChange.bind(this)}
            handleToWatchSubmit={this.handleToWatchSubmit.bind(this)}
            handleWatchedSubmit={this.handleWatchedSubmit.bind(this)}/>
          </span>
        <div><MovieList movies={this.state.movies} handleWatchedClick={this.handleWatchedClick.bind(this)}/></div>
        </div>
      )
  }

}


export default App;
