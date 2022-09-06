import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
// import { firebaseConfig } from './firebaseConfig'
// import 'firebase/auth';
// import { Provider } from 'react-redux';
// import { store } from './redux/store'
import '../src/style.css';
import { Home } from './components/Home';
import { Books } from './components/Books';
import { Library } from './components/Library';
import { Authors } from './components/Authors';
import { AboutUs } from './components/AboutUs';

let myTitle = 'My Digital Library'

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={myTitle} />
        </Route>
        <Route path='/Library'>
          <Library></Library>
        </Route>
        <Route path='/Books'>
          <Books></Books>
        </Route>
        <Route path='/Authors'>
          <Authors></Authors>
        </Route>
        <Route path='/About'>
          <AboutUs></AboutUs>
        </Route>

      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);