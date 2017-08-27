import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BookStore from './BookStore'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BookStore />, document.getElementById('root'));
registerServiceWorker();
