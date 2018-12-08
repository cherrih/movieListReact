import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
            <div className='title'><h1>Movie List</h1></div>
            <div><MovieList movies={this.props.movies}/></div>
            </div>
        )
    }

}


export default App;