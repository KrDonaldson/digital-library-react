import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import { Home } from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let myTitle = 'My Digital Library'

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={myTitle} />
        </Route>

      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);