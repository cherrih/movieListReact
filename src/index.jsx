//render reactdom
import App from './components/App.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import movies from './components/data/data.js';

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));