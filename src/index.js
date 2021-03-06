import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Games from './components/Games';
import Streams from './components/Streams';
import GameStreams from './components/GameStreams';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Header />
        <Route exact path="/" component={Games} />
        <Route exact path="/top-streams" component={Streams} />
        <Route exact path="/game/:id" component={GameStreams} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

