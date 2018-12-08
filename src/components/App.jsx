import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      movies: this.props.movies,
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    let updatedMovies = [];
    this.state.movies.forEach(movie => {
      if (movie.title.includes(this.state.value)) {
        updatedMovies.push(movie);
      } 
    })
    if (updatedMovies.length === 0) {
      alert('Oops! I couldn\'t find that. Try again.');
      this.setState({movies: this.props.movies})
    } else {
      this.setState({movies: updatedMovies});
    }
  }

  render() {
      return (
        <div>
        <div className='title'><h1>Movie List</h1></div>
        <div><Search handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/></div>
        <div><MovieList movies={this.state.movies}/></div>
        </div>
      )
  }

}


export default App;
