import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
/* const App = () => {
    return 'First Application'
} */
const getId = (id) => {
    return document.getElementById(id);
}
ReactDOM.render(<App />,  getId('root'));