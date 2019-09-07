import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Games from './components/Games';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Games} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

