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
      alert('Oops! I couldn\'t find that. Try again.');
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

  render() {
      return (
        <div>
        <div className='title'><h1>Movie List</h1></div>
        <div><AddMovie handleAddSubmit={this.handleAddSubmit.bind(this)} handleAddChange={this.handleAddChange.bind(this)}/></div>
        <div><Search handleSubmit={this.handleSearchSubmit.bind(this)} handleChange={this.handleSearchChange.bind(this)}/></div>
        <div><MovieList movies={this.state.movies}/></div>
        </div>
      )
  }

}


export default App;
