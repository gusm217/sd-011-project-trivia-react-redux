import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';
import Settings from './components/Settings';
import Feedback from './components/Feedback';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
